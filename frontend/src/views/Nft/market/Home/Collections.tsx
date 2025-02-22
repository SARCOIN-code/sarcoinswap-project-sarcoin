import React from 'react'
import orderBy from 'lodash/orderBy'
import { Button, ChevronRightIcon, Flex, Grid, Heading, Text } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useGetCollections } from 'state/nftMarket/hooks'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import { useTranslation } from 'contexts/Localization'
import { HotCollectionCard } from '../components/CollectibleCard'
import { BNBAmountLabel } from '../components/CollectibleCard/styles'

const Collections = () => {
  const { t } = useTranslation()

  const collections = [
    {
     id: 1,
     banner: '/images/collections/no-collection-banner-sm.png',
     avatar: '/images/collections/no-collection-banner-sm.png',
     name: 'SarcoinSwap Nft Super',
     totalVolumeETH: '0',
    },
    {
      id: 2,
      banner: '/images/collections/no-collection-banner-sm.png',
      avatar: '/images/collections/no-collection-banner-sm.png',
      name: 'SarcoinSwap Nft Hero',
      totalVolumeETH: '0',
     },
  ]

  return (
    <>
      <Flex alignItems="center" justifyContent="space-between" mb="32px">
        <Heading as="h3" scale="lg">
          {t('Hot Collections')}
        </Heading>
        <Button
          disabled
          as={Link}
          to={`${nftsBaseUrl}`}
          variant="secondary"
          scale="sm"
          endIcon={<ChevronRightIcon color="primary" width="24px" />}
        >
          {t('View All')}
        </Button>
      </Flex>
      <Grid gridGap="16px" gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} mb="64px">
        {collections.map((collection) => {
          return (
            <HotCollectionCard
              disabled
              key={collection.id}
              bgSrc={collection.banner}
              avatarSrc={collection.avatar}
              collectionName={collection.name}
              url={`${nftsBaseUrl}`}
            >
              <Flex alignItems="center">
                <Text fontSize="12px" color="textSubtle">
                  {t('Volume')}
                </Text>
                <BNBAmountLabel amount={collection.totalVolumeETH ? parseFloat(collection.totalVolumeETH) : 0} />
              </Flex>
            </HotCollectionCard>
          )
        })}
        <HotCollectionCard
          disabled
          bgSrc="/images/collections/no-collection-banner-sm.png"
          collectionName={t('Coming Soon')}
        >
          <Text color="textDisabled" fontSize="12px">
            {t('More Collections are on their way!')}
          </Text>
        </HotCollectionCard>
      </Grid>
    </>
  )
}

export default Collections
