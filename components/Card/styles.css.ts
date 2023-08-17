import { css } from 'styled-system/css'

export const container = css({
  backgroundColor: 'primary',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius: 32,
  padding: '2rem',
  justifyItems: 'center',
  overflow: 'hidden',

  lg: {
    flexDirection: 'row',
    rowGap: '1rem',
    width: '100%',
    padding: 0,
  },
})