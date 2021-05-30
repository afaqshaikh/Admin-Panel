// import FixedPlugin from '../Components/FixedPlugin'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'



function Orders() {
    return (
        <div>
            <div className="wrapper ">
                <SideBar />
                <div className="main-panel">
                    <Navbar />
                    <div className="content">
                        <h1>Orders</h1>
                    </div>
                    <Footer />
                </div>
            </div>
            {/* <FixedPlugin /> */}
        </div>
    )
}

export default Orders