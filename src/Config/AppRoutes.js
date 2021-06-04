import {BrowserRouter as Router,Route} from "react-router-dom";
import Dashboard from '../Pages/Dashboard'
import Accounts from '../Pages/Accounts'
import Bills from '../Pages/Bills'
import Orders from '../Pages/Orders'

function AppRoutes(){
    return(
        <Router>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/accounts" component={Accounts} />
            <Route path="/bills" component={Bills} />
            <Route path="/orders" component={Orders} />
        </Router>
    )
}

export default AppRoutes