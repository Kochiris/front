import types from'./types'

const TODOS = {
    
    list: [{text:"pierwsze",id:0},{text:"drugie",id:1}] ,
    id:2,
}

 function todosReducer(state = TODOS, action) {
     switch (action.type) {

        case types.ADD:
            
            return{
                
                list:[...state.list, {text:action.text,id: TODOS.id}],
                id: state.id+1
            }
        case types.REMOVE:
            return({
                list:[...state.list].filter(todo=> todo.id!==action.id),
                id: state.id-1
            })
        
        //  case types.ADD:
        //    return {

        //          list: [...state.counter, { text: action.text, id: TODOS.ide }],
        //         ide:state.counter.length+1,
        //     }
        // case types.REMOVE:
        //     return ({
        //         ide:state.ide-1,
        //         list: [...state.counter].filter(todo => todo.id !== action.id),

        //     }
        //     )
        // case types.RE:
        //     return {
        //         ide: state.counter.length,
        //         counter: reDizajn(state)

        //     }
        
        //     case types.EDIT:
        //         let arr = [...state.counter].map(item => action.id === item.id ? item = { text: action.text, id: action.id } : item)
          
          
          
        //         return {
        //           ...state,
          
        //           counter: arr
        //         }


        default:


            return state
    }
 }
export default todosReducer