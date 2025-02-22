import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { AutoRenewIcon, Button, Card, CardBody, Flex, Heading, Skeleton, Text, ArrowForwardIcon } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { usePriceCakeBusd } from 'state/farms/hooks'
import useToast from 'hooks/useToast'
import { useMasterchef } from 'hooks/useContract'
import tokens from 'config/constants/tokens'
import useTokenBalance, { FetchStatus } from 'hooks/useTokenBalance'
import { harvestFarm } from 'utils/calls'
import { getBalanceNumber } from 'utils/formatBalance'
import useFarmsWithBalance from 'views/Home/hooks/useFarmsWithBalance'
import KeyInfo from './KeyInfo'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  flex: 1;

  border-right: none;
  border-bottom: none;

  ${({ theme }) => theme.mediaQueries.md} {
    border-right: none;
  }
`

const HarvestCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  
  const { t } = useTranslation()
  const { toastSuccess, toastError } = useToast()
  const { farmsWithStakedBalance, earningsSum: farmEarningsSum } = useFarmsWithBalance()

  const masterChefContract = useMasterchef()
  const cakePriceBusd = usePriceCakeBusd()
  const earningsBusd = new BigNumber(farmEarningsSum).multipliedBy(cakePriceBusd)
  const numTotalToCollect = farmsWithStakedBalance.length
  const numFarmsToCollect = farmsWithStakedBalance.filter((value) => value.pid !== 0).length
  const hasCakePoolToCollect = numTotalToCollect - numFarmsToCollect > 0
  const { balance: cakeBalance, fetchStatus: cakeFetchStatus } = useTokenBalance(tokens.srs.address)
  const keyBalanceNumber = getBalanceNumber(cakeBalance, tokens.srs.decimals)
  const keyBalanceBusd = new BigNumber(keyBalanceNumber).multipliedBy(cakePriceBusd)

  // const earningsText = getEarningsText(numFarmsToCollect, hasCakePoolToCollect, earningsBusd, t)
  // const [preText, toCollectText] = earningsText.split(earningsBusd.toString())

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of farmsWithStakedBalance) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvestFarm(masterChefContract, farmWithBalance.pid)
        toastSuccess(
          `${t('Harvested')}!`,
          t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'SRS' }),
        )
      } catch (error) {
        toastError(t('Error'), t('Please try again. Confirm the transaction and make sure you are paying enough gas!'))
      }
    }
    setPendingTx(false)
  }, [farmsWithStakedBalance, masterChefContract, toastSuccess, toastError, t])

  return (
    <Wrapper>
      <Flex justifyContent='space-between'>
        <Heading scale='xl' color='textSubtle' style={{ fontWeight: 'bold' }}>Farms</Heading>
        {numTotalToCollect <= 0 ? (
          <Link to="farms">
            <Button width='auto' variant="secondary" padding='8px'>
              {t('Start earning')}
            </Button>
          </Link>
        ) : (
          <Button
            width='auto'
            id="harvest-all"
            isLoading={pendingTx}
            endIcon={pendingTx ? <AutoRenewIcon spin color="currentColor" /> : null}
            disabled={pendingTx}
            onClick={harvestAllFarms}
            variant="secondary"
            scale='sm'
            padding='8px'
          >
            <Text color='primary' bold>
              {pendingTx ? t('Harvesting') : t('Harvest all')}
            </Text>
          </Button>
        )}
      </Flex>
      <Flex flexDirection={['column', null, 'row']}>
        <KeyInfo image='/images/icon/harvest.png' comment='SRS to Harvest' balance={farmEarningsSum}  />
        <KeyInfo image='/images/icon/wallet.png' comment='SRS in Wallet' balance={keyBalanceNumber} />
      </Flex>

    </Wrapper>
  )
}

export default HarvestCard
