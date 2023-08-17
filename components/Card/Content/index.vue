<script setup lang="ts">
import * as S from './styles.css'

interface Props {
  content: string
  size?: "small" | "large" | "medium"
}

const props = defineProps<Props>()

</script>
<template>
  <div :class="S.content">
    <p 
      :class="S.text({ size: props.size })"
    >
      {{ props.content }}
    </p>

    <slot />
  </div>
</template>