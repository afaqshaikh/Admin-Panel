// import FixedPlugin from '../Components/FixedPlugin'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import Self from '../Images/Self.jpg'
import { connect } from 'react-redux';
import { useState } from 'react'



function Orders(props) {

    var [name, setName] = useState()
    var [orderDetail, setOrderDetail] = useState()
    var [weight, setWeight] = useState()
    var [rate, setRate] = useState()
    var [totalP, setTotalP] = useState()
    var [advance, setAdvance] = useState()
    var [remainP, setRemainP] = useState()
    var [orderT, setOrderT] = useState()

    const handle_submit = (e) => {
        e.preventDefault()
        setName("")
        setOrderDetail("")
        setWeight("")
        setRate("")
        setTotalP("")
        setAdvance("")
        setRemainP("")
        setOrderT("")

    }

    var date = new Date()
    // const orders = props.orders

    return (
        <div>
            <div className="wrapper ">
                <SideBar />
                <div className="main-panel">
                    <Navbar name="Orders" />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header card-header-primary">
                                            <h4 className="card-title">Create Order</h4>
                                        </div>
                                        <div className="card-body">
                                            {/* <button onClick={()=>props.set_account()}>Redux</button> */}
                                            <form>
                                            <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group ">
                                                            <label className="bmd-label-floating dropdown" >Select Account</label>
                                                            <input type="text" className="form-control dropdown-toggle" 
                                                            id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
                                                            aria-expanded="false"
                                                            onChange={(e)=>setName(e.target.value)}
                                                            required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">{date.toDateString()}</label>
                                                            {/* <input type="text" className="form-control" /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Order Details</label>
                                                            <div className="form-group">
                                                                <label className="bmd-label-floating"> Extra Information</label>
                                                                <textarea className="form-control" rows={5} defaultValue="Nulkl" onChange={e=>setOrderDetail(e.target.value)}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Weight</label>
                                                            
                                                            <input type="number" onChange={(e)=>setWeight(e.target.value)} className="form-control" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Rate</label>
                                                            <input type="number" onChange={(e)=>setRate(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">

                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Total Payment</label>
                                                            <input type="text" onChange={(e)=>setTotalP(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Advance</label>
                                                            <input type="text" onChange={(e)=>setAdvance(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Remaining</label>
                                                            <input type="number" onChange={(e)=>setRemainP(e.target.value)} className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Order Time</label>
                                                            <input type="text" onChange={(e)=>setOrderT(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                                <button type="submit" className="btn btn-primary pull-right">Create Order</button>
                                                <div className="clearfix" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-profile">
                                        <div className="card-avatar">
                                            <img className="img" alt="Person" src={Self} />
                                        </div>
                                        <div className="card-body">
                                            <h6 className="card-category text-gray">CEO / Co-Founder</h6>
                                            <h4 className="card-title">Muhammad Afaque</h4>
                                            <p className="card-description">
                                                Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
                                             </p>
                                            <button className="btn btn-primary btn-round">Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                        <h4 className="card-title ">Orders</h4>
                                        <p className="card-category"> Customers Orders</p>
                                        <input className=" form-control mt-1"
                                            type="text" placeholder="Search" aria-label="Search"
                                        />

                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead style={{ color: "#8e24aa", fontWeight: 'bold' }} >
                                                    <tr>
                                                        <th style={{ fontWeight: 'bold' }}>ID</th>
                                                        <th style={{ fontWeight: 'bold' }}>Name</th>
                                                        <th style={{ fontWeight: 'bold' }}>Time</th>
                                                        <th style={{ fontWeight: 'bold' }}>Advance</th>
                                                        <th style={{ fontWeight: 'bold' }}>Contact</th>
                                                        <th style={{ fontWeight: 'bold' }}>Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* {orders.map((v, i) => {
                                                        return <tr key={i}>
                                                            <td>{i}</td>
                                                            <td>{v.name}</td>
                                                            <td>{v.time}</td>
                                                            <td>{v.advance}</td>
                                                            <td style={{ color: "#8e24aa" }}>{props.accounts.contact}</td>
                                                            <td><button type="button" className="btn btn-primary">View Details</button></td>
                                                        </tr>
                                                    })} */}
                                                    <tr>
                                                        <td>0</td>
                                                        <td>Afaque</td>
                                                        <td>Pakistan</td>
                                                        <td>Hyderabad</td>
                                                        <td style={{ color: "#8e24aa" }}>03003066396</td>
                                                        <td><button type="button" className="btn btn-primary">View Details</button></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
            {/* <FixedPlugin /> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        orders: state.orders
        // accounts: state.accounts

    })
}

export default connect(mapStateToProps , null)(Orders)
