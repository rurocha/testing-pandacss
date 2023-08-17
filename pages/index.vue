<script setup lang="ts">
import { cards } from 'data/cards'
import * as S from './home.css'
</script>

<template>
  <main :class="S.main">
    <h1 :class="S.title">hello</h1>
    
    <div :class="S.container">
      <Card 
        v-for="card in cards"
        :class="S.card"
      >
        <CardPhoto :photo="card.photo"/>
        <CardContent 
          :content="card.content.text" 
          :size="card.content.size"
        >
          <CardFooter 
            :name="card.footer.name" 
            :job="card.footer.job"
          />
        </CardContent>
      </Card>
    </div>
  </main>
</template>

