<script setup lang="ts">
import * as S from './styles.css'

interface Props {
  photo: string
}

const props = defineProps<Props>()
</script>

<template>
  <img :class="S.img" :src="props.photo" loading="lazy">
</template>