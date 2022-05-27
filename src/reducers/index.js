const initialvalue = {
    repos: {
    },
    isLoading: false,
    commits: {
    },
    error: false,
}

const rootReducer = (state = initialvalue, action) => {
    switch (action.type) {
        case ('ADD_REPOS_LIST'):
            return {
                ...state,
                repos: action.payload,

            };
        case ('IS_LOADING'):
            return {
                ...state,
                isLoading: action.payload,

            };
        case ('ADD_COMMITS'):
            return {
                ...state,
                commits: action.payload,

            };
        case ('SHOW_ERROR'):
            return {
                ...state,
                error: action.payload,

            };
        default:
            return state
    }
}

export default rootReducer