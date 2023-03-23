import types from './types'

const add = item => ({
  type: types.ADD_HAHA, item
})

const reset = item => ({
  type: types.RESET_HAHA, item
})

export default {
  add,
  reset
}
