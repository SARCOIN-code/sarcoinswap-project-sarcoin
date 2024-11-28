import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'SRS-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB8a50d734DbAa08233916D79Fa6AD2E94a59db95',
    },
    token: serializedTokens.srs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'SRS-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x393f151b2732761B03775cD1e7fBdc0588f3C2c1',
    },
    token: serializedTokens.srs,
    quoteToken: serializedTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'SRS-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x980C42E790D94e290115FB549e7c7d5CaaCbB27E',
    },
    token: serializedTokens.srs,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 3,
    lpSymbol: 'SRS-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x6CCb44F64282a2E168D37941d57B645712bA2EEA',
    },
    token: serializedTokens.srs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'SRS-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xb3DeAE946f1c950FAc379763dD7a8e24B8670088',
    },
    token: serializedTokens.srs,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    lpSymbol: 'BNB-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x949B7c118aDcedf505108D0D829Cc3624Dd4AE5e',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 6,
    lpSymbol: 'BNB-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xc346cc6CE06086A9c19811F54486DCb117fAaDa3',
    },
    token: serializedTokens.btcb,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 7,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xbD97cFa243C79CcAF43550E5F630795be58a17ba',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 8,
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x173f02CAa5B787B5531458ac06Ff7f9bB10b94F2',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.usdt,
  },
]

export default farms
