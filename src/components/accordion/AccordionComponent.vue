<template>
  <div class="w-full rounded-[16px] border-[1px] border-gray pl-[12px] py-[8px] pr-[20px] cursor-pointer">
    <div @click="accordionClicked" :id="'accordion' + title" 
    class="accordion-item flex w-full items-center justify-between">
      <div class="flex items-center gap-[12px]">
        <div class="icon flex items-center justify-center gap-[8px] w-[48px] h-[48px] bg-gray rounded-full transition-all">
          <Icon :icon="icon" class="text-lg text-black" />
        </div>
        <p class="font-bold text-sm text-black leading-[20px] capitalize">{{ title }}</p>
      </div>
      <Icon icon="octicon:chevron-down-24" class="text-xl text-grayDark4 accordion-icon" />
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
    return {
    }
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
            id: e.target.closest('.accordion-item').id,
        }
        
        const accodrion = document.getElementById(accordionData.id)
        const allAccordion = document.querySelectorAll('.accordion-item')

        allAccordion.forEach(item => {
            if(item !== accodrion && item.classList.contains('active')) {
                item.classList.remove('active')
            }
        })
        if(!accodrion?.classList.contains('active')) {
            accodrion.classList.add('active')
        }else if(accodrion.classList.contains('active')) {
            accodrion.classList.remove('active')
        }

        const activeAccordion = document.querySelector('.accordion-item.active')
        this.$emit('accordionClicked', activeAccordion)

    }
  },
}
</script>


<style>
    .accordion-item.active .accordion-icon {
        transform: rotate(180deg);
    }
</style>