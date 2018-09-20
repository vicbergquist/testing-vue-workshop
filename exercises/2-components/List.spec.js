import {shallowMount} from '@vue/test-utils'
import List from './List.vue'

test('renders "no items" if items prop is undefined', () => {
  //  Get the component
  const wrapper = shallowMount(List)
  // What the test should expect
  expect(wrapper.text()).toContain('No items')
})

test('renders text using each item in items prop array', () => {
  // Get the component and define what the props should be like
  const wrapper = shallowMount(List, {
    propsData: {
      items: ['lion', 'tiger', 'jaguar']
    }
  })
  // What the test should check for
  expect(wrapper.text()).toContain('lion')
  expect(wrapper.text()).toContain('tiger')
  expect(wrapper.text()).toContain('jaguar')
})
