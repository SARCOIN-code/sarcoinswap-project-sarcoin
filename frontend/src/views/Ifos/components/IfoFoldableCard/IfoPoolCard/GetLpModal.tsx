import React, { useMemo } from 'react'
import { Modal, ModalBody, Text, Image, Button, Link, OpenNewIcon } from '@pancakeswap/uikit'
import { Token } from '@pancakeswap/sdk'
import { useTranslation } from 'contexts/Localization'
import { BASE_URL } from 'config'
import tokens from 'config/constants/tokens'

interface Props {
  currency: Token
  onDismiss?: () => void
}


const GetLpModal: React.FC<Partial<Props>> = ({ currency, onDismiss }) => {
  const { t } = useTranslation()

  const link = useMemo(() => {
    if (currency.symbol.includes('LP')) {
      const lpName = currency.symbol.replace('LP', '').trim().split('/')
      const token1 = tokens[lpName?.[0]?.toLowerCase()]
      const token2 = tokens[lpName?.[1]?.toLowerCase()]
      if (token1 && token2) {
        return `${BASE_URL}add/${token1.address}/${token2.address}`
      }
      return `${BASE_URL}add`
    }
    return `${BASE_URL}swap?outputCurrency=${currency.address}`
  }, [currency.address, currency.symbol])

  return (
    <Modal title={t('%symbol% required', { symbol: `${currency.symbol}` })} onDismiss={onDismiss}>
      <ModalBody maxWidth="288px">
        <Image
          src={`/images/idos/${currency.symbol.split(' ')[0].toLocaleLowerCase()}.png`}
          width={72}
          height={72}
          margin="auto"
          mb="24px"
        />
        <Text mb="16px">{t('You’ll need %symbol% tokens to participate in the IDO!', { symbol: `${currency.symbol}` })}</Text>
        <Text mb="24px">{t('Get %symbol%, or make sure your tokens aren’t staked somewhere else.', { symbol: `${currency.symbol}` })}</Text>
        <Button
          as={Link}
          external
          href={link}
          endIcon={<OpenNewIcon color="white" />}
          minWidth="100%" // Bypass the width="fit-content" on Links
        >
          {t('Get %symbol%', { symbol: `${currency.symbol}` })}
        </Button>
      </ModalBody>
    </Modal>
  )
}

export default GetLpModal
