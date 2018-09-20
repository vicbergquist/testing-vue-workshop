import { shallowMount } from '@vue/test-utils'
import fetchItems from './api'
import axios from 'axios'
import ItemView from './ItemView'
import Item from './Item.vue'
import flushPromises from 'flush-promises'

jest.mock('./api')

test('renders items resolved from fetchItems', async () => {
  expect.assertions(1)
  const cats = [{},{}]
  fetchItems.mockResolvedValue(cats)
  const wrapper = shallowMount(ItemView)

  await flushPromises()

  expect(wrapper.findAll(Item)).toHaveLength(2)
})

test('renders error if fetchItems rejects')
