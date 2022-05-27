const initialvalue = {
    repos: {
    },
    isLoading: false,
    commits: {
    }
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
        default:
            return state
    }
}

export default rootReducer