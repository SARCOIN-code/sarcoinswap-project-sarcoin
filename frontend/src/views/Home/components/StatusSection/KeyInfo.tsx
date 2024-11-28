import React from 'react'
import { Flex, Heading, Skeleton, Text, Box } from '@pancakeswap/uikit'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import Balance from 'components/Balance'

interface KeyInfoProps {
  image: string
  comment: string
  balance: number
}

const StyledImage = styled.img`
  width: 56px;
  padding: 8px;
  height: auto;
  border-radius: 4px;
`

const KeyInfo: React.FC<KeyInfoProps> = ({
  image, comment, balance
}) => {
  return (
    <Flex alignItems='flex-start' flex='1' mt='24px'>
      <StyledImage src={image} alt={comment} />
      <Flex flexDirection='column' ml='6px'>
        <Text>{comment}</Text>
        <Flex alignItems='center' flexWrap='wrap'>
          {balance >= 0 && <Balance
            decimals={2}
            fontSize="30px"
            bold
            lineHeight="1.1"
            value={balance}
            mr='16px'
          />}
        </Flex>
      </Flex>
    </Flex>

  )
}

export default KeyInfo
