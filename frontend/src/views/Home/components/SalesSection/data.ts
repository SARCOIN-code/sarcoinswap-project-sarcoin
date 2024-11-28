import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade anything. No registration, no hassle.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.sarcoinswap.com/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/',
    attributes: [
      { src: 'trade', alt: 'Trade' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'SarcoinSwap makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.sarcoinswap.com/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with dogon token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'SarcoinSwap to the Moon!',
  bodyText: 'SarcoinSwap is an AMM & DEX on Binance Chain that offers fee rebates via trade mining. We have the lowest trading fees on Binance Chain.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://sarcoinswap.com/',
    text: 'Learn More',
    external: true,
  },

  images: {
    path: '/images/home/',
    attributes: [
      { src: 'coin', alt: 'Dogon token' },
    ],
  },
}
