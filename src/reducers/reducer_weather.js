import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        return state.concat([action.payload.data]);         //IT'S A TRAP! We can't manipulate state directly. Concat returns new array
        //return [ action.payload.data, ...state ];     ES6 SYNTAX
    }
    return state;
}