<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="username" />
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: null
    }
  },
  props: {
    onSubmit: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleSubmit() {
      this.onSubmit(this.username)
    }
  }
}
</script>
