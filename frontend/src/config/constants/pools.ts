import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.srs,
    earningToken: serializedTokens.srs,
    contractAddress: {
      97: '',
      56: '0xC8FAbB71a37151E1b6709BbE2c6996D1d521D297',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '13',
    sortOrder: 1,
    isFinished: true,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.srs,
    earningToken: serializedTokens.srs,
    contractAddress: {
      97: '',
      56: '0xC8FAbB71a37151E1b6709BbE2c6996D1d521D297',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '5',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
