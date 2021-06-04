
const set_account = (newAccount) => {
    // console.log("Setaccount==>",newAccount)
    return (dispatch) => {
        // console.log("Working......")
        dispatch({type : 'SETACCOUNT',payload : newAccount })
    }
}


export {
    set_account
}