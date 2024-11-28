import React from 'react'
import { Card, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'
import HarvestCard from './HarvestCard'

const StyledCard = styled(Card)`
  & > div {
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.mediaQueries.md} {
      flex-direction: row;
    }
  }

  max-width: 960px;
  margin: auto;
  margin-top: 48px;
`

const StatusSection = () => {
  return (
    <StyledCard>
      <HarvestCard />
    </StyledCard>
  )
}

export default StatusSection
