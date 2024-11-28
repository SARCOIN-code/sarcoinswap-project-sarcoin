import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Text, Button } from '@pancakeswap/uikit'

const StyledColumn = styled(Flex) <{ noLgBorder?: boolean, noMdBorder?: boolean }>`
  flex-direction: column;
  border: none;
  padding: 12px 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 12px 24px;
    border-left: ${({ noMdBorder }) => noMdBorder ? 'none' : '1px solid #5a5a5a'};
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 12px 24px;
    border-left: ${({ noLgBorder }) => noLgBorder ? 'none' : '1px solid #5a5a5a'};
  }

`

const FeatureCard: React.FC<{
  title: string,
  description: string,
  button: string,
  to: string,
  noLgBorder?: boolean,
  noMdBorder?: boolean
}> = ({ title, description, button, to, noLgBorder, noMdBorder }) => {
  return (
    <StyledColumn noLgBorder={noLgBorder} noMdBorder={noMdBorder}>
      <Text bold fontSize='24px'>{title}</Text>
      <Text>{description}</Text>
      <Link to={to}>
        <Button variant="secondary">
          {button}
        </Button>
      </Link>
    </StyledColumn>
  )
}

export default FeatureCard
