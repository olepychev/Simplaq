<template>
  <div class="w-full rounded-[16px] border-[1px] border-gray pl-[12px] py-[8px] pr-[20px] cursor-pointer">
    <div @click="accordionClicked" :id="'accordion' + title" class="accordion-item flex w-full items-center justify-between">
      <div class="flex items-center gap-[12px]">
        <div class="icon flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
          <Icon :icon="icon" class="text-lg text-black" />
        </div>
        <p class="title font-bold text-sm text-black leading-[20px] capitalize">{{ title }}</p>
      </div>
      <Icon icon="octicon:chevron-down-24" class="text-xl text-grayDark4 accordion-icon transition-all" />
    </div>
    <div class="cursor-default">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Accordion',
  data() {
    return {}
  },
  props: {
    icon: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    }
  },
  methods: {
    accordionClicked(e: Event) {
      const accordionData = {
        id: (e.target as HTMLElement).closest('.accordion-item').id
      }

      const accodrion = document.getElementById(accordionData.id)
      const allAccordion = document.querySelectorAll('.accordion-item')

      allAccordion.forEach(item => {
        if (item !== accodrion && item.classList.contains('active')) {
          item.classList.remove('active')
          item.querySelector('.icon').classList.remove('bg-yellowLight')
          item.querySelector('.icon svg').classList.remove('text-orange')
          item.querySelector('.icon svg').classList.remove('text-orange')
          item.querySelector('.title').classList.remove('text-orange')
          item.querySelector('.accordion-icon').classList.remove('text-orange')
        }
      })
      if (!accodrion?.classList.contains('active')) {
        accodrion.classList.add('active')
        accodrion.querySelector('.icon').classList.add('bg-yellowLight')
        accodrion.querySelector('.icon svg').classList.add('text-orange')
        accodrion.querySelector('.icon svg').classList.add('text-orange')
        accodrion.querySelector('.title').classList.add('text-orange')
        accodrion.querySelector('.accordion-icon').classList.add('text-orange')
      } else if (accodrion.classList.contains('active')) {
        accodrion.classList.remove('active')
        accodrion.querySelector('.icon').classList.remove('bg-yellowLight')
        accodrion.querySelector('.icon svg').classList.remove('text-orange')
        accodrion.querySelector('.icon svg').classList.remove('text-orange')
        accodrion.querySelector('.title').classList.remove('text-orange')
        accodrion.querySelector('.accordion-icon').classList.remove('text-orange')
      }

      const activeAccordion = document.querySelector('.accordion-item.active')
      this.$emit('accordionClicked', activeAccordion)
    }
  }
}
</script>

<style>
.accordion-item.active .accordion-icon {
  transform: scale(-1);
}
</style>
