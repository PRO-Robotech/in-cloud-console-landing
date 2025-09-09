import styled from 'styled-components'

type TVideoContainerProps = {
  $width: number
  $height: number
  $widthMob: number
  $heightMob: number
}

const VideoContainer = styled.div<TVideoContainerProps>`
  background: rgba(56, 56, 56, 1);
  margin: 0 auto;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 1);
  width: 310px;

  @media (min-width: 425px) {
    width: ${({ $widthMob }) => $widthMob}px;
    height: ${({ $heightMob }) => $heightMob}px;
  }

  @media (min-width: 1440px) {
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
  }

  video {
    object-fit: cover; /* keep video filling nicely */
    pointer-events: none;
    width: 310px;

    @media (min-width: 425px) {
      width: ${({ $widthMob }) => $widthMob}px;
      height: ${({ $heightMob }) => $heightMob}px;
    }

    @media (min-width: 1440px) {
      width: ${({ $width }) => $width}px;
      height: ${({ $height }) => $height}px;
    }
  }
`

export const Styled = {
  VideoContainer,
}
