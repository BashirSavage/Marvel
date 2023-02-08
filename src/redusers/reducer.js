const initialState = {
    characters: [],
    randomCharacter: {}
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case "upload/characters":
            return({
                ...state,
                characters: action.payload,
                randomCharacter: action.payload[0]
            })
            case "random/character":
                return({
                    ...state,
                    randomCharacter: state.characters[Math.floor(Math.random(0, 97) * 100)]
                })
       default: 
       return state
        
}}