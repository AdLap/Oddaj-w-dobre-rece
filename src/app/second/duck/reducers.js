import types from './types'

const INITIAL_STATE = {
	listName: 'second',
	list: []
}


const secondReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ADD_SECOND:
			return {
				...state, list: [...state.list, action.item]
			}
		case types.RESET_SECOND:
			return {
				...state, list: []
			}
		default:
			return state
	}
}

export default secondReducer
