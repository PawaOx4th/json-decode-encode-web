<template>
  <div>
    <i-container>
      <i-row>
        <i-column xs="12">
          <p class="_text-center d1">JS ED</p>
          <i-input v-model="value" placeholder="Type something.." />
        </i-column>
      </i-row>
    </i-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const message = ref('This is a message')
    const value = ref('')

    return {
      message,
      value,
    }
  },
})
</script>

<style></style>
