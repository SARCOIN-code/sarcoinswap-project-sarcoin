import React from 'react'
import { Flex, Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import { useWeb3React } from '@web3-react/core'
import useTheme from 'hooks/useTheme'
import Container from 'components/Layout/Container'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import { swapSectionData, earnSectionData, cakeSectionData } from './components/SalesSection/data'
import MetricsSection from './components/MetricsSection'
import SalesSection from './components/SalesSection'
import FarmsPoolsRow from './components/FarmsPoolsRow'
import Footer from './components/Footer'
import CakeDataRow from './components/CakeDataRow'
import { WedgeTopLeft, InnerWedgeWrapper, OuterWedgeWrapper, WedgeTopRight } from './components/WedgeSvgs'
import UserBanner from './components/UserBanner'
import Announcements from './components/Announcement/Announcement'
import Features from './components/Features/Features'
import StatusRow from './components/StatusSection'
import IFOBanner from './components/Banners/IFOBanner'
import { partners, security } from './config/config'

const StyledHeroSection = styled(PageSection)`
  padding-top: 16px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 48px;
  }
`

const UserBannerWrapper = styled(Container)`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding-left: 0px;
  padding-right: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-left: 24px;
    padding-right: 24px;
  }
`

const PartnerImage = styled(Container)`
  width: 40%;
  margin-bottom: 2em;
  max-width: 400px;
  height: 4em;
  padding: 8px 16px;
  text-align: center;
  box-shadow: 5px 5px 5px #a3a3a3;
  background: white;
  border-radius: 8px;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 40%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 22%;
  }

  img {
    height: 100%;
    object-fit: contain;
  }
`

const PartnerImageNoBorder = styled(Container)`
  width: 40%;
  margin-bottom: 2em;
  max-width: 400px;
  height: 4em;
  padding: 8px 16px;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: 40%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 22%;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()
  const { account } = useWeb3React()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1096px' }

  return (
    <>
      <PageMeta />
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(rgb(28, 36, 58) 0%, rgb(30, 50, 79) 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <Hero />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(rgb(28, 36, 58) 0%, rgb(30, 50, 79) 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...cakeSectionData} />
        <CakeDataRow />
        <StatusRow />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="linear-gradient(166.77deg, rgb(59, 65, 85) 0%, rgb(58, 48, 69) 100%)"
        index={2}
        hasCurvedDivider={false}
      >
        <SalesSection {...swapSectionData} />
      </PageSection>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background="#1c243a"
        index={2}
        hasCurvedDivider={false}
      >
        <Footer />
      </PageSection>
    </>
  )
}
export default Home
