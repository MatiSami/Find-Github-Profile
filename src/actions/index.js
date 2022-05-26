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