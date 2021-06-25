import types from "./types";

const add = item => ({
    type: types.ADD,
    text: item.text,
})
const remove = item => ({
    type: types.REMOVE, 
    
    id: item.id
})
const re = item => ({
    type: types.RE, 
    text: item.text,
    id: item.id

})
const edit = item => ({
    type: types.EDIT, 
    text: item.text,
    id: item.id
});
const edit2= item=>({
    type: types.EDIT2,
    text: item.text
})


// eslint-disable-next-line
export default {
    add,
    remove,
    re,
    edit,
    edit2
}