
const set_account = (newAccount) => {
    // console.log("Setaccount==>",newAccount)
    return (dispatch) => {
        // console.log("Working......")
        dispatch({type : 'SETACCOUNT',payload : newAccount })
    }
}
const set_order = (newOrder) => {
    return (dispatch) => {
        // console.log("Working......")
        console.log(newOrder)
        dispatch({type : 'SETORDER',payload : newOrder })
    }
}


export {
    set_account,
    set_order
}