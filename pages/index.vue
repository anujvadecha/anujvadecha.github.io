<script setup>
import { useI18n } from 'vue-i18n'

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Testimonials */
const { data: testimonials } = await useFetch('/api/testimonials')

const testimonialItem = ref({})
const activeModal = ref(false)
const activeOverlay = ref(false)

function showTestimonial(id) {
  testimonialItem.value = testimonials.value.find(item => item.id === id)
  activeModal.value = true
  activeOverlay.value = true
}

function closeTestimonaial() {
  testimonialItem.value = {}
  activeModal.value = false
  activeOverlay.value = false
}
/* Testimonials */

/* Services */
const { data: services } = await useFetch('/api/services')
</script>

<template>
  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.about') }}
      </h2>
    </header>

    <section class="about-text">
      <p>
        I'm a software engineer from <a href="https://en.wikipedia.org/wiki/New_York_(state)">New York,USA</a>, currently pursuing my Masters in Computer Science at the <a href="https://www.buffalo.edu/"> University at Buffalo.</a>
        I enjoy
        solving complex problems with simple approaches.
      </p>
      <p>
        I am passionate about scalable architectures and distributed systems and enjoy building interesting projects.
        Having worked with PayU in India before pursuing my masters, I was a owner for many interesting systems including Loan Management Systems, Notification and User Management, Reconciliation and functional feature flows.
        My work is to build systems from scratch making sure they will be future proof and using the best design.
        I also freelance building algorithmic trading and fullstack web solutions to a few clients. If you are interested to hire me for your new interesting project. Please contact me.
        Currently I am working on a project with the University at Buffalo , SEAS to create a generic resource scheduling system which can optimize and apply to all kinds of use cases from classrooms, person-to-person meetings as well as huge movie theatres.
      </p>
    </section>

    <!-- service -->

    <section class="service">
      <h3 class="h3 service-title">
        What i'm doing?
      </h3>

      <ul class="service-list">
        <ServiceItem v-for="service in services" :key="service.id" :service="service" />
      </ul>
    </section>

    <!-- testimonials -->

    <section class="testimonials">
      <h3 class="h3 testimonials-title">
        Testimonials
      </h3>

      <ul class="testimonials-list has-scrollbar">
        <li v-for="testimonial in testimonials" :key="testimonial.id" class="testimonials-item" @click="showTestimonial(testimonial.id)">
          <div class="content-card">
            <figure class="testimonials-avatar-box">
              <img :src="testimonial.image" alt="Daniel lewis" width="60">
            </figure>

            <h4 class="h4 testimonials-item-title">
              {{ testimonial.title }}
            </h4>

            <div class="testimonials-text">
              <p>{{ locale === 'en' ? testimonial.content?.en : testimonial.content?.tr }}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!-- testimonials modal -->

    <div class="modal-container" :class="{ active: activeModal }">
      <div v-show="activeModal" class="overlay" :class="{ active: activeOverlay }" />

      <section class="testimonials-modal">
        <button class="modal-close-btn" @click="closeTestimonaial">
          <ion-icon name="close-outline" />
        </button>

        <div class="flex gap-5 mb-5 justify-start items-center">
          <div class="modal-avatar-box">
            <img :src="testimonialItem.image" alt="Daniel lewis" width="80">
          </div>

          <div class="modal-content">
            <h4 class="h3 modal-title">
              {{ testimonialItem.title }}
            </h4>
            <time datetime="2021-06-14">14 June, 2021</time>
          </div>
        </div>

        <div class="flex gap-5 items-start">
          <img class="my-auto hidden md:block" src="/images/icon-quote.svg" alt="quote icon">
          <p class="text-justify text-gray-400 text-sm md:text-md" v-html="locale === 'en' ? testimonialItem.content?.en : testimonialItem.content?.tr" />
        </div>
        <div class="mt-2 flex justify-end text-sm text-gray-600 italic">
          Company Co.
        </div>
      </section>
    </div>

    <!-- clients -->

    <section class="clients">
      <h3 class="h3 clients-title">
        Clients
      </h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="images/logo-1-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-2-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-3-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-4-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-5-color.png" alt="client logo">
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="images/logo-6-color.png" alt="client logo">
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
