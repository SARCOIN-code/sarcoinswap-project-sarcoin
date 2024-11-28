import React, { useState, useEffect } from 'react'
import { Heading, Flex, Button, Grid, ChevronRightIcon, CardBody, Text, CardFooter } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Link } from 'react-router-dom'
import { nftsBaseUrl } from 'views/Nft/market/constants'
import GridPlaceholder from '../components/GridPlaceholder'
import { StyledCollectibleCard } from '../components/CollectibleCard/styles'

const nftIteam = [
  { 
    id: 1,
    name: 'Nft Dogon #1',
    collectionName: 'Nft 1',
    image: '/images/nfts/1.png',
    price: '1.5',
  },
  { 
    id: 2,
    name: 'Nft Dogon #2',
    collectionName: 'Nft 2',
    image: '/images/nfts/2.png',
    price: '0.05',
  },
  { 
    id: 3,
    name: 'Nft Dogon #3',
    collectionName: 'Nft 3',
    image: '/images/nfts/3.png',
    price: '3.5',
  },
  { 
    id: 4,
    name: 'Nft Dogon #4',
    collectionName: 'Nft 4',
    image: '/images/nfts/4.png',
    price: '0.15',
  },
];


const Newest: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" mb="26px">
        <Heading>{t('Newest Arrivals')}</Heading>
        <Button
          disabled
          as={Link}
          to={`${nftsBaseUrl}`}
          variant="secondary"
          scale="sm"
          endIcon={<ChevronRightIcon color="primary" />}
        >
          {t('View All')}
        </Button>
      </Flex>
      {nftIteam ? (
        <Grid
          gridRowGap="24px"
          gridColumnGap="16px"
          gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
        >
          {nftIteam.map((nft) => {
            return (
              <StyledCollectibleCard>
              <Link to={`${nftsBaseUrl}`}>
                <CardBody>
                  <img src={nft.image} width="1000" height="1000" style={{borderRadius: '8px'}} alt={nft.name} />
                  <Text>{nft.collectionName}</Text>
                  <Heading>{nft.name}</Heading>
                </CardBody>
                <CardFooter>
                  <Text>Asking price: {nft.price} BNB</Text>
                </CardFooter>
              </Link>
            </StyledCollectibleCard>
            )
          })}
        </Grid>
      ) : (
        <GridPlaceholder numItems={8} />
      )}
    </div>
  )
}

export default Newest
