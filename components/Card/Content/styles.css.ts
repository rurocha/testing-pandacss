import { cva, css } from 'styled-system/css'

export const text = cva({
  base: {
    color: 'white',
    textAlign: 'center',
    marginBottom: '32px',
  },
  
  variants: {
    size: {
      small: {
        fontSize: '12px'
      },
      medium: {
        fontSize: '16px'
      },
      large: {
        fontSize: '24px'
      }
    }
  },
})

export const content = css({
  padding: 32
})


export const job = css({display: 'block', color: 'tertiary'})

