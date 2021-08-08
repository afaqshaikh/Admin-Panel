const INITIAL_STATE = {
    accounts: [
        { name: "Afaque", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03130016396" },
        { name: "Hasan", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03363227586" },
        { name: "Ahmer", company: "null", address: "etc", city: "hyderabad", addInfo: "etc..", country: "pakistan", contact: "03130016396" },
    ],
    orders: [
        { name: "Afque", orderT: "15Days", weight: "10gram", rate: "250", totalP: 3000, advance: 500, remainP: 2500 ,orderDetail: "etc"},
        { name: "Hasan", orderT: "17Days", weight: "13gram", rate: "250", totalP: 2000, advance: 300, remainP: 200 ,orderDetail: "etc "},
        { name: "Ahmer", orderT: "11Days", weight: "15gram", rate: "250", totalP: 1000, advance: 600, remainP: 3500 ,orderDetail: "etc"}
        // {name : accounts.name , time: "15Days",weight: "10gram" , rate : "250", totalP : 3000 , advance : 500 , remainP : orders.totalP - orders.advance},
        // {name : accounts.name , time: "15Days",weight: "10gram" , rate : "250", totalP : 3000 , advance : 500 , remainP : orders.totalP - orders.advance},
    ],
    bills: []
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
        case "SETBILL":
            return({
                ...state,
                bills: [...state.bills , action.payload]
            })
        default:
            return state;
    }
}