import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.sarcoinswap.com/dogonswap/contact-us',
      },
      {
        label: t('Community'),
        href: 'https://t.me/sarcoinswap.community',
      },
      {
        label: t('SRS token'),
        href: 'https://docs.sarcoinswap.com/dogonswap/tokenomics/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Support'),
        href: 'https://docs.sarcoinswap.com/dogonswap/contact-us/customer-support',
      },
      {
        label: t('Intro'),
        href: 'https://docs.sarcoinswap.com/dogonswap/',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: t('Documentation'),
        href: 'https://docs.sarcoinswap.com/',
      },
      {
        label: t('Github'),
        href: 'https://github.com/dogonswap',
      },
    ],
  },
]
