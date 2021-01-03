export const addShow = title => {
    return {
        type: "ADD_SHOW",
        payload: title
    }
}

export const removeShow = title => {
    return {
        type: "REMOVE_SHOW",
        payload: title
    }
}

export const getShows = () => {
    return {
        type: "GET_SHOW"
    }
}

const initialState = ["Madalorean", "Game of Throne"];

export const movieReducer = (shows = initialState, action) => {
    switch(action.type) {
        case "ADD_SHOW":
            return [...shows, action.payload];
        case "REMOVE_SHOW":
            return shows.filter(movie => movie !== action.payload);
        case "GET_SHOW":
            return shows;
        default:
            return shows;
    }
}
