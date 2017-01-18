import { DUMMIE_ACTION } from './constants'

const initialState = {

}

export function lobby(state = initialState, action) {

    switch (action.type) {
        case DUMMIE_ACTION:
            return state
            break

        default:
            return state
    }
}
