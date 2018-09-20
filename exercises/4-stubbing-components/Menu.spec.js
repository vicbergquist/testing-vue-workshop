import { RouterLinkStub, shallowMount } from '@vue/test-utils'
import Menu from './Menu.vue'

test('renders router-link to /login page when signedIn is false', () => {
  // Make the stub from our component's routerlink
  const wrapper = shallowMount(Menu, {
    stubs: {
      'router-link': RouterLinkStub
    }
  })
  // Find the stub, and find the prop value and check that it is /login.
  // Can't be on /login if you're signed in, so if /login is true, signedIn is false
  expect(wrapper.find(RouterLinkStub).props('to')).toBe('/login')
})

test('renders <a> that signs user out if signedIn is true', () => {
  // Creates a mock function
  const signOut = jest.fn()
  const wrapper = shallowMount(Menu, {
    propsData: {
      signedIn: true,
      signOut
    },
    stubs: {
      'router-link': RouterLinkStub
    }
  })
  // Find the a tag and trigger a click event
  wrapper.find('a').trigger('click')

  // Find the router link stubs
  expect(wrapper.findAll(RouterLinkStub)).toHaveLength(0)

  // test if the signout mock function has been called
  expect(signOut).toHaveBeenCalled()
})
