
// const set_account = (name,contact) => {
//     console.log(name,contact)
//     var newAccount = {name : name,contact:contact}
//     console.log(newAccount)
//     return (dispatch) => {
//         console.log("Working......")
//         dispatch({type : 'SETACCOUNT',payload : newAccount})
//     }
// }
const set_account = (newAccount) => {
    console.log("Setaccount==>",newAccount)
    return (dispatch) => {
        console.log("Working......")
        dispatch({type : 'SETACCOUNT',payload : newAccount })
    }
}


export {
    set_account
}