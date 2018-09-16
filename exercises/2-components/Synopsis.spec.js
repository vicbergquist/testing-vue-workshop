import Synopsis from './Synopsis.vue'

// You can use the Vue Test Utils slots option to pass in a slot:
//
// const wrapper = shallowMount(Component, {
//   slots: {
//     foo: '<div />',
//     bar: 'bar',
//   }
// })
//
// https://vue-test-utils.vuejs.org/api/options.html#slots
test('renders short slot, and hides long slot, initially')

// You can use the Vue Test Utils find and trigger methods to trigger an event:
//
// const wrapper = shallowMount(Component)
// wrapper.find('button').trigger('click')
//
// https://vue-test-utils.vuejs.org/api/options.html#slots
test('renders long slot, and hides short slot, when button is clicked')

test('toggles "Show more/ show less" when button is clicked')
