<template>
  <div>
    <slot />
    <button 
    @click="$emit('close-modal')" 
    aria-label="close"
    >
      Close modal
    </button>
  </div>
</template>
