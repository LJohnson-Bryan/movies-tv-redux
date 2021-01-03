export const addMovie = title => {
    return {
        type: "ADD_MOVIE",
        payload: title
    }
}

export const removeMovie = title => {
    return {
        type: "REMOVE_MOVIE",
        payload: title
    }
}

export const getMovies = () => {
    return {
        type: "GET_MOVIES"
    }
}

const initialState = ["Star Wars", "Soul", "Onward", "Frozen", "Finding Dory", "The Godfather", "Jurrasic Park", "The Avengers"];

export const movieReducer = (movies = initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIE":
            return [...movies, action.payload];
        case "REMOVE_MOVIE":
            return movies.filter(movie => movie !== action.payload);
        case "GET_MOVIES":
            return movies;
        default:
            return movies;
    }
}
