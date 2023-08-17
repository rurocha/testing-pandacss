import { css } from 'styled-system/css'
import { flex, stack } from 'styled-system/patterns'

export const container = stack({ 
  gap: 32, 
  padding: 32,
})

export const title = css({
  fontSize: 56,
  mb: 24
})

export const main = flex({ 
  direction: 'column', 
  align: 'center',
  justify: 'center', 
})

export const card = css({ 
  maxW: { 
    base: 370, 
    lg: 800,
  } 
})