const INITIAL_STATE = {
    accounts: [
        { name: "Afaque", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03130016396" },
        { name: "Hasan", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03363227586" },
        { name: "Ahmer", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03130016396" },
    ],
    orders: [
        { name: "Afque", orderT: "15Days", weight: "10gram", rate: "250", totalP: 3000, advance: 500, remainP: 2500 ,orderDetail: "etc"}
        // {name : accounts.name , time: "15Days",weight: "10gram" , rate : "250", totalP : 3000 , advance : 500 , remainP : orders.totalP - orders.advance},
        // {name : accounts.name , time: "15Days",weight: "10gram" , rate : "250", totalP : 3000 , advance : 500 , remainP : orders.totalP - orders.advance},
    ]
}

export default (state = INITIAL_STATE, action) => {
    // console.log("action===>", action.payload)
    switch (action.type) {
        case "SETACCOUNT":
            return ({
                ...state,
                accounts: [...state.accounts, action.payload]
            })
        case "SETORDER":
            return ({
                ...state,
                orders: [...state.orders, action.payload]
            })
        default:
            return state;
    }
}