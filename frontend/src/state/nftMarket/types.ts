import { BigNumberish } from 'ethers'

// Collections -> Nfts -> Transactions
// Users -> Nft tokens IDs

// TODO: Handle the error state on the UI
export enum NFTMarketInitializationState {
  UNINITIALIZED = 'UNINITIALIZED',
  INITIALIZED = 'INITIALIZED',
  ERROR = 'ERROR',
}

export enum UserNftInitializationState {
  UNINITIALIZED = 'UNINITIALIZED',
  INITIALIZING = 'INITIALIZING',
  INITIALIZED = 'INITIALIZED',
  ERROR = 'ERROR',
}

export enum NftFilterLoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
}

export interface State {
  initializationState: NFTMarketInitializationState
  data: {
    collections: Record<string, Collection> // string is the address
    nfts: Record<string, NftToken[]> // string is the collection address
    filters: Record<string, NftFilter> // string is the collection address
    loadingState: {
      isUpdatingPancakeBunnies: boolean
      latestPancakeBunniesUpdateAt: number
    }
    users: Record<string, User> // string is the address
    user: UserNftsState
  }
}

export interface UserNftsState {
  userNftsInitializationState: UserNftInitializationState
  nfts: NftToken[]
  activity: UserActivity
}

export interface Transaction {
  id: string
  block: string
  timestamp: string
  askPrice: string
  netPrice: string
  buyer: { id: string }
  seller: { id: string }
  withEtH: boolean
  nft?: TokenMarketData
}

export enum AskOrderType {
  NEW = 'NEW',
  MODIFY = 'MODIFY',
  CANCEL = 'CANCEL',
}

export interface AskOrder {
  id: string
  block: string
  timestamp: string
  askPrice: string
  orderType: AskOrderType
  nft?: TokenMarketData
}

export interface Image {
  original: string
  thumbnail: string
  mp4?: string
  webm?: string
  gif?: string
}

export enum NftLocation {
  FORSALE = 'For Sale',
  PROFILE = 'Profile Pic',
  WALLET = 'In Wallet',
}

// Market data regarding specific token ID, acquired via subgraph
export interface TokenMarketData {
  tokenId: string
  metadataUrl: string
  currentAskPrice: string
  currentSeller: string
  latestTradedPriceInETH: string
  tradeVolumeETH: string
  totalTrades: string
  isTradable: boolean
  otherId: string
  collection?: {
    id: string
  }
  updatedAt?: string
  transactionHistory?: Transaction[]
}

// Represents single NFT token, either Squad-like NFT or single PancakeBunny.
export interface NftToken {
  tokenId: string
  name: string
  description: string
  collectionName: string
  collectionAddress: string
  image: Image
  attributes?: NftAttribute[]
  createdAt?: string // API createdAt
  updatedAt?: string // API updatedAt
  marketData?: TokenMarketData
  location?: NftLocation
  meta?: Record<string, string | number>
}

export interface NftFilter {
  loadingState: NftFilterLoadingState
  activeFilters: Record<string, NftAttribute>
  showOnlyOnSale: boolean
  ordering: {
    field: string
    direction: 'asc' | 'desc'
  }
}

export interface TokenIdWithCollectionAddress {
  collectionAddress: string
  tokenId: string
  nftLocation?: NftLocation
}

export interface NftAttribute {
  traitType: string
  value: string | number
  displayType: string
}

// Internal type used to refer to a collection
// Most fields are populated from API (via ApiCollection type)
export interface Collection {
  id: string
  address: string
  name: string
  description?: string
  symbol: string
  active: boolean
  totalVolumeETH: string
  numberTokensListed: string
  tradingFee: string
  creatorFee: string
  owner: string
  totalSupply: string
  verified: boolean
  avatar: string
  banner: {
    large: string
    small: string
  }
  attributes?: NftAttribute[]
}

export interface ApiCollections {
  [key: string]: Collection
}

export interface User {
  address: string
  numberTokensListed: BigNumberish
  numberTokensPurchased: BigNumberish
  numberTokensSold: BigNumberish
  nfts: Record<string, BigNumberish> // String is an address, BigNumberish is a tokenID
}

/**
 * API RESPONSES
 */

export interface ApiCollection {
  address: string
  owner: string
  name: string
  description: string
  symbol: string
  totalSupply: string
  verified: boolean
  createdAt: string
  updatedAt: string
  avatar: string
  banner: {
    large: string
    small: string
  }
  attributes?: NftAttribute[] // returned for specific collection but not for all collections
}

// Get all collections
// ${API_NFT}/collections/
export interface ApiCollectionsResponse {
  total: number
  data: ApiCollection[]
}

// Get single collection
// ${API_NFT}/collections/${collectionAddress}
export interface ApiSingleCollectionResponse {
  data: ApiCollection
}

// Get single collection
// ${API_NFT}/collections/${collectionAddress}
export interface ApiTokenFilterResponse {
  total: number
  data: Record<string, ApiSingleTokenData>
}

export interface ApiSingleTokenData {
  name: string
  description: string
  image: Image
  collection: {
    name: string
  }
  attributes?: NftAttribute[]
  tokenId?: string
}

// Get tokens within collection
// ${API_NFT}/collections/${collectionAddress}/tokens
export interface ApiResponseCollectionTokens {
  total: number
  attributesDistribution: Record<string, number>
  data: Record<string, ApiSingleTokenData>
}

// Get specific token data
// ${API_NFT}/collections/${collectionAddress}/tokens/${tokenId}
export interface ApiResponseSpecificToken {
  data: {
    tokenId: string
    name: string
    description: string
    image: Image
    createdAt: string
    updatedAt: string
    attributes: NftAttribute[]
    collection: {
      name: string
    }
  }
}

// ${API_NFT}/collections/${collectionAddress}/distribution
export interface ApiCollectionDistribution {
  total: number
  data: Record<string, Record<string, number>>
}

export interface ApiCollectionDistributionPB {
  total: number
  data: Record<string, number>
}

/**
 * SUBGRAPH RESPONSES
 */

export interface CollectionMarketDataBaseFields {
  id: string
  name: string
  symbol: string
  active: boolean
  totalTrades: string
  totalVolumeETH: string
  numberTokensListed: string
  creatorAddress: string
  tradingFee: string
  creatorFee: string
  whitelistChecked: string
}

export interface UserActivity {
  askOrderHistory: AskOrder[]
  buyTradeHistory: Transaction[]
  sellTradeHistory: Transaction[]
  initializationState: UserNftInitializationState
}
