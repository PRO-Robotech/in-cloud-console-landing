import styled from 'styled-components'

type TVideoContainerProps = {
  $width: number
  $height: number
}

const VideoContainer = styled.div<TVideoContainerProps>`
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: rgba(56, 56, 56, 1);
  margin: 0 auto;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 1);

  video {
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    object-fit: cover; /* keep video filling nicely */
  }
`

export const Styled = {
  VideoContainer,
}
