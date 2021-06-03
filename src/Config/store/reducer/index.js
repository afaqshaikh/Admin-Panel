const INITIAL_STATE = {
    accounts: [
        { name: "Afaque", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03133787660" },
        { name: "Afaque", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03133787660" },
        { name: "Afaque", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03133787660" },
    ]
}

export default (state = INITIAL_STATE, action) => {
    console.log("action===>",action.payload)
    switch (action.type) {
        case "SETACCOUNT":
            return ({
                ...state,
                accounts: [...state.accounts,action.payload]
            })
        default:
            return state;
    }
}