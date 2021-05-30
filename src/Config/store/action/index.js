
const set_account = (data) => {
    console.log(data)

    return (dispatch) => {
        // console.log("Working......")
        dispatch({type : 'SETACCOUNT',payload : data})
    }
}


export {
    set_account
}