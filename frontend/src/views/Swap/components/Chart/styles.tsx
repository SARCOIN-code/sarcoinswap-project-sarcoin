import { Box } from '@pancakeswap/uikit'
import styled from 'styled-components'

export const StyledPriceChart = styled(Box)<{ $isDark: boolean; $isExpanded: boolean }>`
  border: none;
  border-radius: 32px;
  width: 100%;
  height: 70%;
  padding-top: 36px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 8px;
    background: #141824;
    border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
    border-radius: ${({ $isExpanded }) => ($isExpanded ? '0' : '16px')};
    width: ${({ $isExpanded }) => ($isExpanded ? '100%' : '50%')};
    height: ${({ $isExpanded }) => ($isExpanded ? 'calc(100vh - 100px)' : '484px')};
  }
`
