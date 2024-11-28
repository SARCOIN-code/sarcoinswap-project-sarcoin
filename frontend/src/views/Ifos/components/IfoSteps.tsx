import React, { useMemo } from 'react'
import styled from 'styled-components'
import every from 'lodash/every'
import { Stepper, Step, StepStatus, Card, CardBody, Heading, Text, Button, Link, OpenNewIcon } from '@pancakeswap/uikit'
import { Link as RouterLink } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import { Ifo } from 'config/constants/types'
import tokens from 'config/constants/tokens'
import { BASE_URL } from 'config'
import { WalletIfoData } from 'views/Ifos/types'
import { useTranslation } from 'contexts/Localization'
import useTokenBalance from 'hooks/useTokenBalance'
import Container from 'components/Layout/Container'
import { useProfile } from 'state/profile/hooks'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import ConnectWalletButton from 'components/ConnectWalletButton'


interface Props {
  ifo: Ifo
  walletIfoData: WalletIfoData
}

const Wrapper = styled(Container)`
  background: ${({ theme }) => theme.colors.gradients.bubblegum};
  margin-left: -16px;
  margin-right: -16px;
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: -24px;
    margin-right: -24px;
  }
`

const IfoSteps: React.FC<Props> = ({ ifo, walletIfoData }) => {
  const { poolBasic, poolUnlimited } = walletIfoData
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { balance } = useTokenBalance(ifo.currency.address)
  const stepsValidationStatus = [
    balance.isGreaterThan(0),
    poolBasic.amountTokenCommittedInLP.isGreaterThan(0) || poolUnlimited.amountTokenCommittedInLP.isGreaterThan(0),
    poolBasic.hasClaimed || poolUnlimited.hasClaimed,
  ]

  const getStatusProp = (index: number): StepStatus => {
    const arePreviousValid = index === 0 ? true : every(stepsValidationStatus.slice(0, index), Boolean)
    if (stepsValidationStatus[index]) {
      return arePreviousValid ? 'past' : 'future'
    }
    return arePreviousValid ? 'current' : 'future'
  }

  const link = useMemo(() => {
    if (ifo.currency.symbol.includes('LP')) {
      const lpName = ifo.currency.symbol.replace('LP', '').trim().split('/')
      const token1 = tokens[lpName?.[0]?.toLowerCase()]
      const token2 = tokens[lpName?.[1]?.toLowerCase()]
      if (token1 && token2) {
        return `${BASE_URL}add/${token1.address}/${token2.address}`
      }
      return `${BASE_URL}add`
    }
    return `${BASE_URL}swap?outputCurrency=${ifo.currency.address}`
  }, [ifo.currency.address, ifo.currency.symbol])


  const renderCardBody = (step: number) => {
    const isStepValid = stepsValidationStatus[step]
    
    switch (step) {
      case 0:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Get %symbol%', { symbol: `${ifo.currency.symbol}` })}
            </Heading>
            <Text color="textSubtle" small>
              {t('You’ll spend %symbol% to buy IDO sale tokens.', { symbol: `${ifo.currency.symbol}` })}
            </Text>
            <Button
              as={Link}
              external
              href={link}
              endIcon={<OpenNewIcon color="white" />}
              mt="16px"
            >
              {t('Get %symbol%', { symbol: `${ifo.currency.symbol}` })}
            </Button>
          </CardBody>
        )
      case 1:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Commit %symbol%', { symbol: `${ifo.currency.symbol}` })}
            </Heading>
            <Text color="textSubtle" small>
              {t('When the IDO sales are live, you can “commit” your %symbol% to buy the tokens being sold.', { symbol: `${ifo.currency.symbol}` })} <br />
              {t('We recommend committing to the Basic Sale first, but you can do both if you like.')}
            </Text>
          </CardBody>
        )
      case 2:
        return (
          <CardBody>
            <Heading as="h4" color="secondary" mb="16px">
              {t('Claim your tokens')}
            </Heading>
            <Text color="textSubtle" small>
              {t(
                'After the IDO sales finish, you can claim any IDO tokens that you bought, and any unspent %symbol%  tokens will be returned to your wallet.',
                { symbol: `${ifo.currency.symbol}` }
              )}
            </Text>
          </CardBody>
        )
      default:
        return null
    }
  }

  return (
    <Wrapper>
      <Heading as="h2" scale="xl" color="secondary" mb="24px" textAlign="center">
        {t('How to Take Part')}
      </Heading>
      <Stepper>
        {stepsValidationStatus.map((_, index) => (
          <Step
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            index={index}
            statusFirstPart={getStatusProp(index)}
            statusSecondPart={getStatusProp(index + 1)}
          >
            <Card>{renderCardBody(index)}</Card>
          </Step>
        ))}
      </Stepper>
    </Wrapper>
  )
}

export default IfoSteps
