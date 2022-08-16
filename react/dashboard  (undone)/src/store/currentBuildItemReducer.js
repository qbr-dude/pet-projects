const defaultState = {
    current: 0,
}

export const currentBuildingItemReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CHANGE_BUILDING_ITEM':
            return { ...state, current: action.payload };

        default:
            return state;
    }
}