// import FixedPlugin from '../Components/FixedPlugin'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'



function Bills() {
    return (
        <div>
            <div className="wrapper ">
                <SideBar />
                <div className="main-panel">
                    <Navbar name="Bills" />
                    <div className="content">
                        <h1>Bills</h1>
                    </div>
                    <Footer />
                </div>
            </div>
            {/* <FixedPlugin /> */}
        </div>
    )
}

export default Bills