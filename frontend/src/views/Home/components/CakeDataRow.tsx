import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber, formatLocalisedCompactNumber } from 'utils/formatBalance'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { Flex, Text, Heading, Skeleton, Card } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import tokens from 'config/constants/tokens'

const StyledBox = styled(Card)`
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 12px;  
  }
`

const StyledImage = styled.img`
  width: 48px;
  height: auto;
  margin-bottom: 18px;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 48px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-gap: 32px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`

const emissionsPerBlock = 0.5

const CakeDataRow = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(tokens.srs.address))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0
  const cakePriceBusd = usePriceCakeBusd()
  const mcap = cakePriceBusd.times(cakeSupply)
  const mcapString = formatLocalisedCompactNumber(mcap.toNumber())

  return (
    <Grid>
      <StyledBox>
        <StyledImage src='/images/icon/supply.png' alt='Total Supply' />
        {cakeSupply ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="32px" bold value={cakeSupply} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
        <Text color="textSubtle">{t('Total supply')}</Text>
      </StyledBox>
      <StyledBox>
        <StyledImage src='/images/icon/fire.png' alt='Total Supply' />
        {burnedBalance >= 0 ? (
          <Balance decimals={0} lineHeight="1.1" fontSize="32px" bold value={burnedBalance} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
        <Text color="textSubtle">{t('Burned to date')}</Text>
      </StyledBox>
      <StyledBox>
        <StyledImage src='/images/icon/growth.png' alt='Total Supply' />
        {mcap?.gt(0) && mcapString ? (
          // <Heading scale="lg" style={{ fontSize: "32px" }}>{t('$%marketCap%', { marketCap: mcapString })}</Heading>
          <Balance decimals={0} lineHeight="1.1" fontSize="32px" bold value={mcap.toNumber()} />
        ) : (
          <Skeleton height={24} width={126} my="4px" />
        )}
        <Text color="textSubtle">{t('Market cap')}</Text>
      </StyledBox>
      <StyledBox>
        <StyledImage src='/images/icon/gift.png' alt='Total Supply' />
        <Heading scale="lg" style={{ fontSize: "32px" }}>{t('%cakeEmissions%/block', { cakeEmissions: emissionsPerBlock })}</Heading>
        <Text color="textSubtle">{t('Current emissions')}</Text>
      </StyledBox>
    </Grid>
  )
}

export default CakeDataRow
