<template>
  <div>
    <slot v-if="!open" name="short" />
    <slot v-if="open" name="long" />
    <button
    @click="toggleOpen"
    :aria-expanded="!open"
    >
      {{open ? 'Show less' : 'Show more'}}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    }
  }
}
</script>
