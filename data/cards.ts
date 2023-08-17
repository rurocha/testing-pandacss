
interface Card {
  photo: string,
  content: {
    text: string
    size?: 'small' | 'medium' | 'large'
  },
  footer: {
    name: string
    job: string
  }
}

export const cards: Card[] = [
  {
    photo: 'https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg',
    content: {
      text: `Vanilla Extract CSS is the only framework that I've seen scale on large teams. I's easy to customize, adapts to any design, and the build size is tiny.`,
      size: 'medium'
    },
    footer: {
      name: 'Sarah Dayan',
      job: 'Staff Engineer, Algolia'
    }
  },
  {
    photo: 'https://media.licdn.com/dms/image/C4D03AQGVLL2BiPLm9Q/profile-displayphoto-shrink_800_800/0/1564134510183?e=1696464000&v=beta&t=leuitG5HzlObA5uDmqgat5rX4TF6tIFreYlWOIaHJfY',
    content: {
      text: `Vanilla Extract CSS is the only framework that I've seen scale on large teams. I's easy to customize, adapts to any design, and the build size is tiny.`,
      size: 'large'
    },
    footer: {
      name: 'Ruan Rocha',
      job: 'Front End Engineer, iBlue'
    }
  },
]