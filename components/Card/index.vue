<script setup lang="ts">
import * as S from './styles.css'
</script>

<template>
  <div :class="S.container">
    <slot/>
  </div>
</template>