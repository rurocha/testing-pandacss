import { css } from 'styled-system/css'

export const img = css({
  objectFit: 'cover',
  width: 100,
  height: 100,
  borderRadius: '50%',
  mb: '1.5rem',
  maxW: 384,
  maxH: 300,

  lg: {
    height: '100%',
    width: '100%',
    borderRadius: 'unset',
    mb: 0,
  }
})