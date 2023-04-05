import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    {
      id: 1,
      title: 'Software Development',
      description: {
        en: 'I build modern and scalable systems using the latest technologies and paralleism',
        tr: 'PHP frameworkü olan Laravel ile modern ve gelişmiş web siteleri ve uygulamaları yapıyorum.',
      },
      icon: 'logo-laravel',
      image: null,
    },
    {
      id: 2,
      title: 'Web Development',
      description: {
        en: 'I use VueJS, a modern JavaScript framework, while making dynamic and static websites and applications.',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'logo-vue',
      image: null,
    },
    {
      id: 3,
      title: 'Algorithmic Trading',
      description: {
        en: 'I developed my own modular framework including frontend for running modern algorithmic-trading strategies',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'trending-up-outline',
      image: null,
    },
    {
      id: 4,
      title: 'Data Analysis and Visualization',
      description: {
        en: 'I am strongly familiar with languages of R and Python, and data analysis is one of my strong verticals',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'bar-chart-outline',
      image: null,
    },
    {
      id: 5,
      title: 'Anything and Everything',
      description: {
        en: 'Very Fast Learner ,Have worked across a huge number of technologies and systems. Throw anything at me, Ill catch it',
        tr: 'Dinamik ve statik web site ve uygulamaları yaparken modern JavaScript framework olan VueJS kullanıyorum.',
      },
      icon: 'battery-charging-outline',
      image: null,
    },
  ]
})
