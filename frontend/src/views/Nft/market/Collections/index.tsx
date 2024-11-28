import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Table,
  Th,
  Td,
  Card,
  Flex,
  BnbUsdtPairTokenIcon,
  Heading,
  useMatchBreakpoints,
  ProfileAvatar,
  ArrowBackIcon,
  Text,
  ArrowForwardIcon,
} from '@pancakeswap/uikit'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGetCollections } from 'state/nftMarket/hooks'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export const ITEMS_PER_PAGE = 10

const SORT_FIELD = {
  volumeETH: 'totalVolumeBNB',
  items: 'numberTokensListed',
  supply: 'totalSupply',
}

export const PageButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2em;
  margin-bottom: 1.2em;
`

export const Arrow = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 20px;
  :hover {
    cursor: pointer;
  }
`

const Collectible = () => {
  const { t } = useTranslation()
  const collections = useGetCollections()
  const { isMobile } = useMatchBreakpoints()
  const [sortField, setSortField] = useState(null)
  const [sortDirection, setSortDirection] = useState<boolean>(false)
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }, 50)
  }, [page])

  useEffect(() => {
    let extraPages = 1
    const collectionValues = collections ? Object.values(collections) : []
    if (collectionValues.length % ITEMS_PER_PAGE === 0) {
      extraPages = 0
    }
    setMaxPage(Math.floor(collectionValues.length / ITEMS_PER_PAGE) + extraPages)
  }, [collections])

  const sortedCollections = useMemo(() => {
    const collectionValues = collections ? Object.values(collections) : []

    return collectionValues
      .sort((a, b) => {
        if (sortField && a && b) {
          return parseFloat(a[sortField]) > parseFloat(b[sortField])
            ? (sortDirection ? -1 : 1) * 1
            : (sortDirection ? -1 : 1) * -1
        }
        return -1
      })
      .slice(ITEMS_PER_PAGE * (page - 1), page * ITEMS_PER_PAGE)
  }, [page, collections, sortDirection, sortField])

  const handleSort = useCallback(
    (newField: string) => {
      setSortField(newField)
      setSortDirection(sortField !== newField ? true : !sortDirection)
    },
    [sortDirection, sortField],
  )

  const arrow = useCallback(
    (field: string) => {
      const directionArrow = !sortDirection ? '↑' : '↓'
      return sortField === field ? directionArrow : ''
    },
    [sortDirection, sortField],
  )

  return (
    <>
      <PageHeader>
        <Heading as="h1" scale="xxl" color="secondary">
          {t('Collections')}
        </Heading>
      </PageHeader>
      <Page>
        <Heading as="h2" scale="lg" style={{textAlign: 'center'}}>No data found!</Heading>
      </Page>
    </>
  )
}

export default Collectible
