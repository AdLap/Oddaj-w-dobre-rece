import types from './types'

const INITIAL_STATE = {
	listName: 'first',
	list: []
}

const firstReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_FIRST:
			return {
				...state, list: [...state.list, action.item]
			}
		case types.RESET_FIRST:
			return {
				...state, list: []
			}
		default:
			return state
	}
}

export default firstReducer
