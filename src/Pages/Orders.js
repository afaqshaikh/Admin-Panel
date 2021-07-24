// import FixedPlugin from '../Components/FixedPlugin'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import Self from '../Images/Self.jpg'
import { connect } from 'react-redux';
import { useState } from 'react'
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { set_order } from '../Config/store/action'

import "./../App.css"



function Orders(props) {

    const accounts = props.accounts
    const orders = props.orders

    var [name, setName] = useState()
    var [orderDetail, setOrderDetail] = useState()
    var [weight, setWeight] = useState()
    var [rate, setRate] = useState()
    var [totalP, setTotalP] = useState()
    var [advance, setAdvance] = useState()
    var [remainP, setRemainP] = useState()
    var [orderT, setOrderT] = useState()
    var [currentName, setcurrentName] = useState()
    var [currentOrderDetail ,setcurrentOrderDetail] = useState()
    var [currentWeight, setcurrentWeight] = useState()
    var [currentRate, setcurrentRate] = useState()
    var [currentTotalP, setcurrentTotalP] = useState()
    var [currentAdvance, setcurrentAdvance] = useState()
    var [currentRemainP, setcurrentRemainP] = useState()
    var [currentOrderT, setcurrentOrderT] = useState()
    var [searchValue,setSearchValue] = useState('')

    
    totalP = weight*rate
    remainP = totalP - advance

    const handle_submit = (e) => {
        // window.print()
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

    var newOrder = {
        name: name,
        orderDetail: orderDetail,
        weight: weight,
        rate: rate,
        totalP: totalP,
        advance: advance,
        remainP: remainP,
        orderT: orderT,
    }

    // Get accounts from redux
    const options = accounts.map((v, i) => {
        return {
            name: v.name,
            value: v.name
        }
    }
    )

    // Bootstrap Model Detail Function
    const currentDetails = (v, i) => {
        // console.log("current detail. ==>" , v,i)
        setcurrentName(v.name)
        setcurrentOrderDetail(v.orderDetail)
        setcurrentWeight(v.weight)
        setcurrentRate(v.rate)
        setcurrentTotalP(v.totalP)
        setcurrentAdvance(v.advance)
        setcurrentRemainP(v.remainP)
        setcurrentOrderT(v.orderT)

    }

    //Filter In Orders list
    const orderFilter = orders.filter((v) => {
        return v.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    //Print function
    let printDetails = ()=>{
        var divContent = document.getElementById("exampleModal").innerHTML
        // console.log(divContent)
        var a = window.open('', '', 'height=500, width=500');
            a.document.write('<html>');
            a.document.write('<body > <h1>Singapore Silver (Order Details) <br>')
            a.document.write(divContent);
            a.document.write('</body></html>');
            a.document.close();
            a.print();
    }


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
                                            <form onSubmit={handle_submit}>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <SelectSearch options={options}
                                                                search filterOptions={fuzzySearch}
                                                                placeholder="Select Account"
                                                                emptyMessage="Not found"
                                                                value={options.value}
                                                                onChange={(e) => setName(e)}
                                                            />
                                                            {/* <SelectSearch options={options} value="sv" className="form-control"  name="language" placeholder="Choose your language" /> */}
                                                        </div>
                                                    </div>
                                                    {/* <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className="bmd-label-floating">{date.toDateString()}</label>
                                                            </div>
                                                        </div> */}
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Order Details</label>
                                                            <div className="form-group">
                                                                <label className="bmd-label-floating"> Extra Information</label>
                                                                <textarea className="form-control" rows={5} defaultValue={orderDetail || ""} onChange={e => setOrderDetail(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Weight</label>

                                                            <input type="number" value={weight || ""} onChange={(e) => setWeight(e.target.value)} className="form-control" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Rate</label>
                                                            <input type="number" value={rate || ""} onChange={(e) => setRate(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">

                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Total Payment</label>
                                                            <input type="number" value={totalP || ""} onChange={(e) => setTotalP(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Advance</label>
                                                            <input type="number" value={advance || ""} onChange={(e) => setAdvance(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Remaining</label>
                                                            <input type="number" value={remainP || ""} onChange={(e) => setRemainP(e.target.value)} className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Order Time/Days</label>
                                                            <input type="number" value={orderT || ""} onChange={(e) => setOrderT(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>


                                                <button type="submit"
                                                    onClick={() => props.set_order(newOrder)}
                                                    className="btn btn-primary pull-right">Create Order</button>
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
                                            onChange={ e => setSearchValue(e.target.value)}
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
                                                        <th style={{ fontWeight: 'bold' }}>RemainP</th>
                                                        <th style={{ fontWeight: 'bold' }}>Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {orderFilter.map((v, i) => {
                                                        return <tr key={i}>
                                                            <td>{i}</td>
                                                            <td>{v.name}</td>
                                                            <td>{v.orderT}</td>
                                                            <td>{v.advance}</td>
                                                            <td>{v.remainP}</td>
                                                            <td>
                                                                {/* <button onClick={()=>{currentDetails(v,i)}} className="btn btn-primary" >View Details</button> */}
                                                                <button type="button" onClick={()=>{currentDetails(v,i)}} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">View Details</button>

                                                            </td>
                                                        </tr>

                                                    })}
                                                </tbody>
                                            </table>
                                            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header" style={{ backgroundColor: "#8e24aa" }}>
                                                            <h5 className="modal-title" id="exampleModalLabel" style={{ color: "#fff" }}>Order Details</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true" style={{ color: "#fff" }}>×</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <h6 style={{ color: "#8e24aa" }}>Account Name</h6>
                                                                    <p>{currentName}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <h6 style={{ color: "#8e24aa" }}>Order Detail</h6>
                                                                    <p>{currentOrderDetail}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <h6 style={{ color: "#8e24aa" }}>Weight</h6>
                                                                    <p>{`${currentWeight} gram`}</p>
                                                                </div>
                                                                <div className="col-4">
                                                                    <h6 style={{ color: "#8e24aa" }}>Rate</h6>
                                                                    <p>{`${currentRate} / gram`}</p>
                                                                </div>
                                                                <div className="col-4">
                                                                    <h6 style={{ color: "#8e24aa" }}>Time/Days</h6>
                                                                    <p>{currentOrderT}</p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-4">
                                                                    <h6 style={{ color: "#8e24aa" }}>Total Payment</h6>
                                                                    <p>{currentTotalP}</p>
                                                                </div>
                                                                <div className="col-4">
                                                                    <h6 style={{ color: "#8e24aa" }}>Advance</h6>
                                                                    <p>{currentAdvance}</p>
                                                                </div>
                                                                <div className="col-4">
                                                                    <h6 style={{ color: "#8e24aa" }}>Remaining</h6>
                                                                    <p>{currentRemainP}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                            <button type="button" onClick={()=>printDetails()} className="btn btn-primary">Print Receipt</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
        // orders: state.orders
        accounts: state.accounts,
        orders: state.orders

    })
}
const mapDispatchToProps = (dispatch) => ({
    set_order: (newOrder) => dispatch(set_order(newOrder))
});


export default connect(mapStateToProps, mapDispatchToProps)(Orders)
