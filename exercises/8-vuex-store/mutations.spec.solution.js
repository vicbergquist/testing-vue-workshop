import mutations from './mutations'

test('adds filtered items to state', () => {
  const items = [{}, null, {}]
  const state = {}
  mutations.setItems(state, { items })
  expect(state.items).toEqual([{}, {}])
})
