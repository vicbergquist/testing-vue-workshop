import { fetchItems } from './api'
import axios from 'axios'

// Let jest know we are mocking axios
jest.mock('axios')

test('resolves with data.items if /items returns 200', async () => {
  // Let the test know how many assertions are being called here, to make sure that assertions in a callback got called
  expect.assertions(1)
  // What want to check the api response against
  const cats = [{},{},{}]
  // Make the mock request, mockResolvedValue 200
  axios.get.mockResolvedValue(cats)
  // store the response
  const data = await fetchItems()
  // assertion
  expect(data).toBe(cats)
})

test('rejects with error if /items returns 500', async () => {
  // assertions we are expecting
  expect.assertions(1)
  // creating the mock value for this call
  axios.get.mockRejectedValue(new Error('500'))
  // expect that the fetchItems call get an error
  expect(fetchItems()).rejects.toBeInstanceOf(Error)
})
