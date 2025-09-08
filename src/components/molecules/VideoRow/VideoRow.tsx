import React, { FC } from 'react'
import { THomePage } from '@localTypes/pageTypes'
import { Spacer } from 'src/components/atoms'
import { Styled } from './styled'

export const VideoRow: FC<Pick<THomePage, 'videoSettings'>> = ({ videoSettings }) => {
  return (
    <>
      <Styled.VideoContainer $width={videoSettings.width} $height={videoSettings.height}>
        <video autoPlay loop muted playsInline>
          <source src={videoSettings.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Styled.VideoContainer>
      <Spacer $space={60} $samespace />
    </>
  )
}
