<template>
  <div :class="{ 'is-active': $store.state.error }">
    <button @click="$store.commit('setError', null)" aria-label="close">Close modal</button>
  </div>
</template>
