import { shallowMount } from '@vue/test-utils'
import SubmitForm from './SubmitForm.vue'

test('calls onSubmit with value of input when form is submitted', () => {
  // Setting up the submit fn as a mock fn
  const onSubmit = jest.fn()
  // Getting our element
  const wrapper = shallowMount(SubmitForm, {
    propsData: {
      onSubmit
    }
  })
  // Find the input and set a value to test against
  wrapper.find('[type="text"]').setValue('Hello World')
  // find the input and trigger a submit event
  wrapper.find('[type="text"]').trigger('submit')
  // Test that the fn was called with our speciified text
  expect(onSubmit).toHaveBeenCalledWith('Hello World')
})
