import { Token, ChainId } from '@pancakeswap/sdk'
import tokens from './tokens'
import farms from './farms'
import { Ifo } from './types'

const cakeBnbLpToken = new Token(ChainId.MAINNET, farms[1].lpAddresses[ChainId.MAINNET], 18, farms[1].lpSymbol)

const ifos: Ifo[] = [
  {
    id: 'dogon',
    address: '0x9C9C732280365e0A72e592a102181c3D906aab37',
    isActive: false,
    name: 'SarcoinSwap Token (SRS)',
    poolBasic: {
      saleAmount: '10,500,000 SRS',
      raiseAmount: '$0',
      cakeToBurn: '$0',
      distributionRatio: 0.35,
    },
    poolUnlimited: {
      saleAmount: '19,500,000 SRS',
      raiseAmount: '$0',
      cakeToBurn: '$0',
      distributionRatio: 0.65,
    },
    currency: tokens.usdt,
    token: tokens.srs,
    releaseBlockNumber: 30270589,
    campaignId: '511140000',
    articleUrl: 'https://sarcoinswap.com/',
    tokenOfferingPrice: 0.01,
    version: 2,
  },
  {
    id: 'dogon',
    address: '0xf06fdC85c8d4AB6FaD2CCA2465DbfFB083dA0642',
    isActive: true,
    name: 'SarcoinSwap Token (SRS)',
    poolBasic: {
      saleAmount: '1500000 SRS',
      raiseAmount: '$30000',
      cakeToBurn: '$0',
      distributionRatio: 0.50,
    },
    poolUnlimited: {
      saleAmount: '1500000 SRS',
      raiseAmount: '$30000',
      cakeToBurn: '$0',
      distributionRatio: 0.50,
    },
    currency: tokens.usdt,
    token: tokens.srs,
    releaseBlockNumber: 31165940,
    campaignId: '511140000',
    articleUrl: 'https://sarcoinswap.com/',
    tokenOfferingPrice: 0.02,
    version: 2,
  },
]

export default ifos
