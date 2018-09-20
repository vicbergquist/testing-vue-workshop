import ProgressBar from './ProgressBar.vue'
import {shallowMount} from '@vue/test-utils'

test('increments width by 1% every 100ms', () => {
  // let the test know we are faking timers
  jest.useFakeTimers()
  const wrapper = shallowMount(ProgressBar)

  // Advance the timer by 400, then check that the output is 4%
  jest.advanceTimersByTime(400)
  expect(wrapper.element.style.width).toBe('4%')

  // advance the timer to 700, then check that the output is 400+700
  jest.advanceTimersByTime(700)
  expect(wrapper.element.style.width).toBe('11%')

})
