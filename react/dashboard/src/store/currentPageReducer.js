const defaultPage = {
    page: 1,
}

export const currentPageReducer = (state = defaultPage, action) => {
    switch (action.type) {
        case 'CHANGE_CURRENT_PAGE':
            return { ...state, page: action.payload };

        default:
            return state;
    }
}