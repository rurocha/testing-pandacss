<script setup>
import { css } from 'styled-system/css'

const styles = css({
  backgroundColor: 'gainsboro',
  borderRadius: '9999px',
  fontSize: '13px',
  padding: '10px 15px',
  _hover: {
    bg: 'orange.400'
  }
})

</script>
<template>
  <h1 :class="styles">hello</h1>
  <Button></Button>
</template>
