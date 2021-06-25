import types from './types'

const TODOS = {

    list: [{ text: "Posprzątać pokój ", id: 0 }, { text: "Zrobić zadania rekrutacyjne", id: 1 }],
    id: 2,
    edit: { text: "", id: null }
}

function todosReducer(state = TODOS, action) {
    switch (action.type) {

        case types.ADD:

            return {
                ...state,
                list: [...state.list, { text: action.text, id: state.id }],
                id: state.id + 1

            }
        case types.REMOVE:
            return ({
                ...state,
                list: [...state.list].filter(todo => todo.id !== action.id),

            })
        case types.EDIT:


            return {
                ...state,
                edit: action,
            }
        case types.EDIT2:
            let arr = state.list
            console.log(arr)
            console.log(state.edit.id)
            console.log(state.edit.text)
            for (var i = 0; i < state.list.length; i++) {
                if (arr[i].id === state.edit.id) {
                    arr[i].text = action.text
                    arr[i].id = state.edit.id

                }
            }



            return {
                ...state,
                list: arr,
                edit: { text: "", id: null }
            }

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