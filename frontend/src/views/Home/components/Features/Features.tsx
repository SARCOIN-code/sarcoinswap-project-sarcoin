import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Text, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from '../SunburstSvg'
import FeatureCard from './FeatureCard'

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  margin-bottom: 24px;
  grid-template-columns: repeat(1, minmax(0, 1fr));

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    grid-gap: 32px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

`

const Features = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()

  return (
    <>
      <Wrapper>
        <Heading mb="24px" scale="xl" color="primary" style={{ fontWeight: 'bold' }}>
          {t('Core Features')}
        </Heading>
        <Flex mt='24px' background='#1c243a'>
          <Grid>
            <FeatureCard
              title='Trading'
              description='SarcoinSwap supports most trading pairs on Binance Smart Chain and provides protected liquidities with high volumes.'
              to='swap'
              button='Start Trading'
              noLgBorder
              noMdBorder
            />
            <FeatureCard
              title='Farming'
              description='SarcoinSwap supports fixed APR of farms.'
              to='farms'
              button='Start Farming'
            />
            <FeatureCard
              title='Pooling'
              description='SarcoinSwap supports fixed apr of pools with low risk. Users can earn SRS tokens or any other tokens from pool or staking.'
              to='pools'
              button='Start Pooling'
              noMdBorder
            />
            <FeatureCard
              title='NFTs'
              description='SarcoinSwap supports NFT Marketplace and NFT staking pools with the highest apr. Just staking some NFTs will give you tons of rewards.'
              to='/'
              button='Start Staking'
              noLgBorder
            />
            <FeatureCard
              title='Launchpad'
              description='SarcoinSwap supports other projects to list tokens. All processes are transparent and protected by SarcoinSwap community.'
              to='ifo'
              button='View Launchpad'
              noMdBorder
            />
            <FeatureCard
              title='Metaverse'
              description='SarcoinSwap supports Metaverse Games to give good feeling with SRS tokens. Enjoy your time with some SRS tokens!'
              to='/'
              button='View Games'
            />
          </Grid>
        </Flex>
      </Wrapper>
    </>
  )
}

export default Features
