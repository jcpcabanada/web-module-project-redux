import {ADD_FAVORITE, TOGGLE_FAVORITES, REMOVE_FAVORITE} from "../actions/favoritesActions";

const initialState = {
    favorites: [{title: "Movie", id: 0}, {title: "Bruh", id: 1}],
    displayFavorites: true
};

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case(TOGGLE_FAVORITES): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        }
        case(ADD_FAVORITE): {
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        }
        case(REMOVE_FAVORITE): {
            return {
                ...state,
                favorites: state.filter(item=>(item.id !== action.payload))
            }
        }

        default:
            return (state);
    }
}

export default favoritesReducer;