import React from 'react'
import { useTranslation } from 'contexts/Localization'
import { getBscScanLink } from 'utils'
import { Flex, Link, PocketWatchIcon, Text, Skeleton } from '@pancakeswap/uikit'
import getTimePeriods from 'utils/getTimePeriods'
import { PublicIfoData } from 'views/Ifos/types'

interface Props {
  publicIfoData: PublicIfoData
}

const Timer: React.FC<Props> = ({ publicIfoData }) => {
  const { t } = useTranslation()
  const { status, secondsUntilStart, secondsUntilEnd, startBlockNum, endBlockNum } = publicIfoData
  const countdownToUse = status === 'coming_soon' ? secondsUntilStart : secondsUntilEnd
  const block = status === 'coming_soon' ? startBlockNum : endBlockNum
  const timeUntil = (countdownToUse)
  const d = Math.floor(timeUntil / (3600 * 24));
  const h = Math.floor(timeUntil % (3600 * 24) / 3600);
  const m = Math.floor(timeUntil % 3600 / 60);
  const s = Math.floor(timeUntil % 60);

  const suffix = status === 'coming_soon' ? t('Start').toLowerCase() : t('Finish').toLowerCase()
  return (
    <Flex justifyContent="center" mb="32px">
      {status === 'idle' ? (
        <Skeleton animation="pulse" variant="rect" width="100%" height="48px" />
      ) : (
        <>
          <PocketWatchIcon width="48px" mr="16px" />
          <Flex alignItems="center">
            <Text bold mr="16px">
              {suffix}:
            </Text>
            <Text>
              {t('%day%d %hour%h %minute%m', {
                day: d,
                hour: h,
                minute: m,
              })}
            </Text>
            <Link
              href={getBscScanLink(block, 'countdown')}
              target="blank"
              rel="noopener noreferrer"
              ml="8px"
              textTransform="lowercase"
            >
              {`(${t('Blocks')})`}
            </Link>
          </Flex>
        </>
      )}
    </Flex>
  )
}

export default Timer
