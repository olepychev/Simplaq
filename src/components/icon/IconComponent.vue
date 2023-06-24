<template>
  <Icon :icon="icon" />
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
  props: {
    icon: {
        type: String,
        required: true
    },
  },
  components: {
    Icon
  }
}
</script>
