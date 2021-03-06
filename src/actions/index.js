export const clearReposList = ( repo ) => {
    return {
        type: 'CLEAR_REPOS_LIST',
        payload: [],
    };
};

export const addReposList = ( data ) => {
    return {
        type: 'ADD_REPOS_LIST',
        payload: data
    }
};

export const isLoading = ( loading ) => {
    return {
        type: 'IS_LOADING',
        payload: loading
    }
};

export const addCommits = ( commits ) => {
    return {
        type: 'ADD_COMMITS',
        payload: commits
    }
};

export const showError = ( error ) => {
    return {
        type: 'SHOW_ERROR',
        payload: error
    }
};

export const AddFactorialResult = ( result ) => {
    return {
        type: 'ADD_FACTORIAL_RESULT',
        payload: result
    }
};

export const addActiveRepo = ( repoName ) => {
    return {
        type: 'ADD_ACTIVE_REPO',
        payload: repoName
    }
};