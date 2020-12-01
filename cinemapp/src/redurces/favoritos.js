
const inital_state = {
    selectedPg:'search',
    count_favoritos:0,
    list_favoritos:[]
}

export default function favoritos(state = inital_state,action){
    switch(action.type){
        case 'ADD_FILME':
            const new_list_favoritos = state.list_favoritos.filter(ele => ele.Title != action.filme.Title);
            if(new_list_favoritos.length == state.list_favoritos.length){
                return {
                    ...state,
                    count_favoritos:state.count_favoritos+1,
                    list_favoritos: [...state.list_favoritos,action.filme]
                }
            }
            else{
                return {
                    ...state,
                    count_favoritos:state.count_favoritos-1,
                    list_favoritos: new_list_favoritos
                }
            }
        case 'TG_PG':
            return{
                ...state,
                selectedPg:action.pg
            }
        default:
            return state;
    }
}