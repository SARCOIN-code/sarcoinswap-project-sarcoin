import React from 'react'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { Flex, Text, Button, ButtonMenu, ButtonMenuItem, Message, Link } from '@pancakeswap/uikit'
import { FetchStatus } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { NftToken } from 'state/nftMarket/types'
import { getBscScanLinkForNft } from 'utils'
import { Divider, RoundedImage } from '../shared/styles'
import { BorderedBox, BnbAmountCell } from './styles'
import { PaymentCurrency } from './types'

interface ReviewStageProps {
  nftToBuy: NftToken
  paymentCurrency: PaymentCurrency
  setPaymentCurrency: (index: number) => void
  nftPrice: number
  walletBalance: number
  walletFetchStatus: FetchStatus
  notEnoughBnbForPurchase: boolean
  continueToNextStage: () => void
}

const ReviewStage: React.FC<ReviewStageProps> = ({
  nftToBuy,
  paymentCurrency,
  setPaymentCurrency,
  nftPrice,
  walletBalance,
  walletFetchStatus,
  notEnoughBnbForPurchase,
  continueToNextStage,
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  return (
    <>
      <Flex px="24px" pt="24px" flexDirection="column">
        <Flex>
          <RoundedImage src={nftToBuy.image.thumbnail} height={68} width={68} mr="16px" />
          <Flex flexDirection="column" justifyContent="space-evenly">
            <Text color="textSubtle" fontSize="12px">
              {nftToBuy.collectionName}
            </Text>
            <Text bold>{nftToBuy.name}</Text>
            <Flex justifyContent="space-between" alignItems="center">
              <Text fontSize="12px" color="textSubtle" p="0px" height="16px" mr="4px">
                {t('Token ID:')}
              </Text>
              <Button
                as={Link}
                scale="xs"
                px="0px"
                pt="2px"
                external
                variant="text"
                href={getBscScanLinkForNft(nftToBuy.collectionAddress, nftToBuy.tokenId)}
              >
                {nftToBuy.tokenId}
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <BorderedBox>
          <Text small color="textSubtle">
            {t('Pay with')}
          </Text>
          <ButtonMenu
            activeIndex={paymentCurrency}
            onItemClick={(index) => setPaymentCurrency(index)}
            scale="sm"
            variant="subtle"
          >
            <ButtonMenuItem>ETH</ButtonMenuItem>
            <ButtonMenuItem>WETH</ButtonMenuItem>
          </ButtonMenu>
          <Text small color="textSubtle">
            {t('Total payment')}
          </Text>
          <BnbAmountCell bnbAmount={nftPrice} />
          <Text small color="textSubtle">
            {t('%symbol% in wallet', { symbol: paymentCurrency === PaymentCurrency.BNB ? 'BNB' : 'WBNB' })}
          </Text>
          {!account ? (
            <Flex justifySelf="flex-end">
              <ConnectWalletButton scale="sm" />
            </Flex>
          ) : (
            <BnbAmountCell
              bnbAmount={walletBalance}
              isLoading={walletFetchStatus !== FetchStatus.SUCCESS}
              isInsufficient={walletFetchStatus === FetchStatus.SUCCESS && notEnoughBnbForPurchase}
            />
          )}
        </BorderedBox>
        {walletFetchStatus === FetchStatus.SUCCESS && notEnoughBnbForPurchase && (
          <Message p="8px" variant="danger">
            <Text>
              {t('Not enough %symbol% to purchase this NFT', {
                symbol: paymentCurrency === PaymentCurrency.BNB ? 'BNB' : 'WBNB',
              })}
            </Text>
          </Message>
        )}
        <Flex alignItems="center">
          <Text my="16px" mr="4px">
            {t('Convert between ETH and WETH for free')}:
          </Text>
          <Button
            as={Link}
            p="0px"
            height="16px"
            external
            variant="text"
            href="/swap?inputCurrency=ETH&outputCurrency=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
          >
            {t('Convert')}
          </Button>
        </Flex>
      </Flex>
      <Divider />
      <Flex px="24px" pb="24px" flexDirection="column">
        <Button
          onClick={continueToNextStage}
          disabled={walletFetchStatus !== FetchStatus.SUCCESS || notEnoughBnbForPurchase}
          mb="8px"
        >
          {t('Checkout')}
        </Button>
        <Button as={Link} external style={{ width: '100%' }} href="/swap?outputCurrency=ETH" variant="secondary">
          {t('Get %symbol1% or %symbol2%', { symbol1: 'BNB', symbol2: 'WBNB' })}
        </Button>
      </Flex>
    </>
  )
}

export default ReviewStage
