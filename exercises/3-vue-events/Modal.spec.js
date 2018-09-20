import {shallowMount} from '@vue/test-utils'
import Modal from './Modal.vue'

test('emits on-close event when close button is clicked', () => {
  // Our Modal component
  const wrapper = shallowMount(Modal)

  // Making sure it hasn't been emitted already. It's undefined because it hasnt been emitted.
  expect(wrapper.emitted('close-modal')).toBeUndefined()

  // Find the element that is to be triggered
  wrapper.find('[aria-label="close"]').trigger('click')

  // Check that close-modal was called. Length of 1 indicates it was emitted
  // Only returns only the close-model event. Can also call without event name, and it will return all events.
  expect(wrapper.emitted('close-modal')).toHaveLength(1)

})
