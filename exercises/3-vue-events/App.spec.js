import {shallowMount} from '@vue/test-utils'
import App from './App.vue'
import Modal from './Modal.vue'

test('removes Modal when close-modal is emitted', () => {
  // Get the component you're testing
  const wrapper = shallowMount(App)
  // Set up what you're looking for, close-modal string is emitted
  wrapper.find(Modal).vm.$emit('close-modal')
  // What the test is to expect, close-modal does not exist. Can also use find.exists().toBe(false)
  expect(wrapper.findAll(Modal)).toHaveLength(0)

})
