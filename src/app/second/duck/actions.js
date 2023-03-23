import types from './types'

const add = item => ({
  type: types.ADD_SECOND, item
})

const reset = item => ({
  type: types.RESET_SECOND, item
})

export default {
  add,
  reset
}
