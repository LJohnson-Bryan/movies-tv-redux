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
        type: "GET_SHOWS"
    }
}

const initialState = ["The Mandalorian", "Game of Thrones", "The Crown", "Witcher", "Stranger Things", "The Wire", "Vikings", "Forensic Files"];

export const showsReducer = (shows = initialState, action) => {
    switch(action.type) {
        case "ADD_SHOW":
            return [...shows, action.payload];
        case "REMOVE_SHOW":
            return shows.filter(show => show !== action.payload);
        case "GET_SHOWS":
            return shows;
        default:
            return shows;
    }
}
