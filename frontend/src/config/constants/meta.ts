import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SarcoinSwap',
  description:
    'SarcoinSwap is an AMM & DEX on Binance Chain that offers fee rebates via trade mining. We have the lowest trading fees on Binance Chain.',
  image: 'https://sarcoinswap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SarcoinSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SarcoinSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SarcoinSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SarcoinSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SarcoinSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SarcoinSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SarcoinSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SarcoinSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SarcoinSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SarcoinSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SarcoinSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SarcoinSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SarcoinSwap')}`,
      }
    case '/ido':
      return {
        title: `${t('Initial Digital Assets Offering')} | ${t('SarcoinSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SarcoinSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SarcoinSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SarcoinSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SarcoinSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SarcoinSwap Info & Analytics')}`,
        description: 'View statistics for SarcoinSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SarcoinSwap Info & Analytics')}`,
        description: 'View statistics for SarcoinSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SarcoinSwap Info & Analytics')}`,
        description: 'View statistics for SarcoinSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SarcoinSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SarcoinSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('SarcoinSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SarcoinSwap')}`,
      }
    default:
      return null
  }
}
