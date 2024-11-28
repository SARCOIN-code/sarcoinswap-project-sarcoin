import React from 'react'
import styled from 'styled-components'
import { Card, Flex, Heading, Link, Text, Button } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const Wrapper = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledBox = styled(Card)`
  max-width: 480px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 24px 36px;
  }
`

const Header = styled.div`
  padding-bottom: 8px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e9d9d1;
  width: 100%;
  text-align: center;
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

const AuditRow = styled.div`
  gap: 32px;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const StyledImage = styled.img`
  max-width: 60px;
  height: auto;
`

const Announcements = () => {
  const { t } = useTranslation()

  return (
    <>
      <Wrapper>
        <Heading mb="24px" scale="xl" color="text" style={{ fontWeight: 'bold' }}>
          {t('Announcements')}
        </Heading>
        <div>
          <StyledBox>
            <Header>
              <Heading scale='lg' color='textSubtle'>NFT Mint Starting</Heading>
            </Header>
            <Flex flexDirection='column' alignItems='flex-start' mb='28px'>
              <Text>NFTs are going to list on SarcoinSwap. Please join and mint NFTs.</Text>
              <Text>It starts on Apr 11, 18:00 (UTC).</Text>
            </Flex>
            {/* <Link href='https://www.pinksale.finance/#/launchpad/0xEba2517eE673ebC65EFb37B5a2C29FCC08D907B4?chain=BSC' external target='_blank'> */}
            <Link href='.'>
              <Button variant="secondary" style={{ fontWeight: 'bold' }}>
                Join Mint
              </Button>
            </Link>
          </StyledBox>
        </div>
        <Heading mb="16px" mt="32px" scale="xl" color="text" style={{ fontWeight: 'bold' }}>
          {t('Our Parnters')}
        </Heading>
        <AuditRow>
          <Link href='https://zonoswap.finance/' external target='_blank'>
            <StyledImage src="/images/partners/ic-zono.png" alt="ZonoSwap" />
          </Link>
          <Link href='http://www.corgidoge.com' external target='_blank'>
            <StyledImage src="/images/partners/ic-corgi.png" alt="Corgi" />
          </Link>
          <Link href='https://www.dragonsgamefi.com/' external target='_blank'>
            <StyledImage src="/images/partners/ic-dragonsgamefi.png" alt="Dragons" />
          </Link>
          <Link href='http://www.smileswap.finance' external target='_blank'>
            <StyledImage src="/images/partners/ic-smile.png" alt="SmileSwap" />
          </Link>
          <Link href='https://github.com/Tech-Audit/Smart-Contract-Audits/blob/main/TECHAUDIT_KEYMASTERCHEF.pdf' external target='_blank'>
            <StyledImage src="/images/partners/ic-techaudit.png" alt="Tech Audit" />
          </Link>
        </AuditRow>
      </Wrapper>
    </>
  )
}

export default Announcements
