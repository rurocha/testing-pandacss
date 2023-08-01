<script setup>
import { cva } from 'styled-system/css'

const button = cva({
  base: {
    display: 'flex'
  },
  variants: {
    visual: {
      solid: { backgroundColor: '#fcc', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'pink' }
    },
    size: {
      sm: { padding: '4', fontSize: '12px' },
      lg: { padding: '8', fontSize: '24px' }
    }
  }
})
</script>

<template>
  <button :class="button({ visual: 'solid', size: 'sm' })">button</button>
</template>