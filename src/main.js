import { createApp } from 'vue'
import App from './App.vue'
import { selectElem } from './lib'

const init = (id) => {
  selectElem.value = document.getElementById(id)
  const app = document.createElement('div')
  selectElem.value.after(app)
  createApp(App).mount(app)
}

if (import.meta.env.DEV) init('field95387578')

export default init
