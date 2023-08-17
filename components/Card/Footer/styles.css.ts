import { css } from 'styled-system/css'
import { SystemStyleObject } from 'styled-system/types'

const base: SystemStyleObject = ({
  display: 'block',
  
  xsToMd: {
    textAlign: 'center',
  }
})

export const name = css({
  ...base,
  color: 'secondary'
})

export const job = css({
  ...base,
  color: 'white'
})