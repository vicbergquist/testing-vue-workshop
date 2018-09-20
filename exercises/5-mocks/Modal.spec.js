import { shallowMount } from '@vue/test-utils'
import Modal from './Modal.vue'

// Use jest.fn to create a mock function
test('calls onClose when close button is clicked', () => {
  const onClose = jest.fn()
  // getting the props from our Modal component
  const wrapper = shallowMount(Modal, {
    propsData: {
      onClose
    }
  })
  // find the element with the right aria label
  // then trigger the click
  wrapper.find('[aria-label="close"]').trigger('click')

  // test to see if the onClose function was called after the click event was triggered
  expect(onClose).toHaveBeenCalled()
})
