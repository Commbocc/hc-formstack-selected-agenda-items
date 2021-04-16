<template>
  <div v-if="selectedItems.length">
    <p>Selected Items:</p>

    <ul>
      <li v-for="(item, i) in selectedItems" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { selectElem } from './lib'

export default {
  setup() {
    const selectedItems = ref([])

    onMounted(() => {
      selectElem.value.addEventListener('change', ({ target }) => {
        selectedItems.value = [...target.selectedOptions].map(
          (option) => option.innerText
        )
      })
    })

    return { selectedItems }
  },
}
</script>
