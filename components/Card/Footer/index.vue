<script setup lang="ts">
import * as S from './styles.css'

  interface Props {
    name: string
    job: string
  }
  const props = defineProps<Props>()
</script>

<template>
  <footer>
    <span :class="S.name">{{ props.name }}</span>
    <span :class="S.job">{{ props.job }}</span>
  </footer>
</template>


