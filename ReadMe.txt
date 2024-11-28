SarcoinSwap Smart Contracts

SarcoinSwapRouter: 0xA4a39Be418732CeE7EaC18B1b1f49567Ee7F918D

MasterChef: 0xc544d79DbDBf0358479e36b874298B93E7Fe68b6

SarcoinSwapFactory: 0x87A1780a842aAb0Bd6E94629A167DE70DD103753

Sarcoin: 0xCa127b33F6e606660D8AbA486A4b167fEd4b5612

Owner wallet: 0xEe00Ed7Aba6e6a307e7f6FFc52fb0C63C610B59F

Note: owner get all fees from swap and farms.

Lp Pairs:

BNB-USDT: 0x173f02CAa5B787B5531458ac06Ff7f9bB10b94F2 pid 8

BNB-BUSD: 0xbD97cFa243C79CcAF43550E5F630795be58a17ba pid 7

BNB-BTCB: 0xc346cc6CE06086A9c19811F54486DCb117fAaDa3 pid 6

BNB-USDC: 0x949B7c118aDcedf505108D0D829Cc3624Dd4AE5e pid 5

BNB-SRS: 0xB8a50d734DbAa08233916D79Fa6AD2E94a59db95 pid 0

USDT-SRS: 0x393f151b2732761B03775cD1e7fBdc0588f3C2c1 pid 1

ETH-SRS: 0x6CCb44F64282a2E168D37941d57B645712bA2EEA pid 3

BTCB-SRS: 0xb3DeAE946f1c950FAc379763dD7a8e24B8670088 pid 4

BUSD-SRS: 0x980C42E790D94e290115FB549e7c7d5CaaCbB27E pid 2


# Frontend 

location: sarcoinswap-project\frontend

Note: you need install dependencies first by type command in terminal yarn.

dev server: yarn start

producation: yarn build

# UIKIT 

location: sarcoinswap-project\toolkit\packages\pancake-uikit

The core component is releted in uikit package.

Note: If you anything change in uikit ex: color etc than you need to copy the dist file & past into sarcoinswap-project\frontend\node_modules\@pancakeswap\dist and sdk dist file to since the package was locally host which not hosted npm package.


# Add new farm in frontend:

location: sarcoinswap-project\frontend\src\config\constants\farms.ts

Example:

{
    pid: 1, // pid number after add pair in masterchef you find pid number by last one.
    lpSymbol: 'SRS-USDT LP', // symbol
    lpAddresses: {
      97: '',
      56: '0x393f151b2732761B03775cD1e7fBdc0588f3C2c1', // lp address
    },
    token: serializedTokens.srs, // first token
    quoteToken: serializedTokens.usdt, // second token
},

Before add any farm first add token at sarcoinswap-project\frontend\src\config\constants\tokens.ts if token not exit.

Example:

srs: new Token(
    MAINNET,
    '0xCa127b33F6e606660D8AbA486A4b167fEd4b5612', // token contract
    18, // decimal
    'SRS', // token symbol
    'Sarcoin', // token name
    'https://sarcoinswap.com/', // token website
),

Thats All.

Thanks.