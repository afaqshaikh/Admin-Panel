// import FixedPlugin from '../Components/FixedPlugin'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import { connect } from 'react-redux';
import { useState } from 'react'
import SelectSearch, { fuzzySearch } from 'react-select-search';




function Bills(props) {
    var date = new Date()
    const accounts = props.accounts

    const [name, setName] = useState()
    const [inputRows, setInputRows] = useState(1)
    // const [bill , setBills] = useState([])
    const [itemDesc , setItemDesc] = useState([])
    const [weight , setWeight] = useState()
    const [rate , setRate] = useState()
    const [amount , setAmount] = useState()

    console.log(itemDesc)
    // const billDetails = {
    //     account : name,
    // }

    // Get accounts from redux
    const options = accounts.map((v, i) => {
        return {
            name: v.name,
            value: v.name
        }
    }
    )

    const addBill = (e) => {
        e.preventDefault()
        // setBills([
        //     ...bill,
        //     {
        //         id : bill.length,
        //         desc : itemDesc
        //     }
        // ])
        // setItemDesc("")
    }


    return (
        <div>
            <div className="wrapper ">
                <SideBar />
                <div className="main-panel">
                    <Navbar name="Bills" />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-header card-header-primary">
                                            <h4 className="card-title">Create Bills</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={addBill}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group ">
                                                            <SelectSearch options={options}
                                                                search filterOptions={fuzzySearch}
                                                                placeholder="Select Account"
                                                                emptyMessage="Not found"
                                                                value={options.value}
                                                                onChange={(e) => setName(e)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">{date.toDateString()}</label>
                                                            {/* <input type="text" className="form-control" /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                {[...Array(inputRows)].map((elementInArray, index) => {
                                                    return (
                                                        <div className="row" key={index}>

                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="bmd-label-floating">Item Desc.</label>

                                                                    <input type="text" value={itemDesc||""} onChange={e=>setItemDesc([e.target.value])} className="form-control" required />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">
                                                                <div className="form-group">
                                                                    <label className="bmd-label-floating">Weight</label>
                                                                    <input type="number" value={weight||""} onChange={e=>setWeight(e.target.value)} className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">

                                                                <div className="form-group">
                                                                    <label className="bmd-label-floating">Rate </label>
                                                                    <input type="number" value={rate||""} onChange={e=>setRate(e.target.value)} className="form-control" />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-3">

                                                                <div className="form-group">
                                                                    <label className="bmd-label-floating">Amount </label>
                                                                    <input type="number" value={amount||""} onChange={e=>setAmount(e.target.value)} className="form-control" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                <button type="submit" className="btn btn-primary pull-right">Submit</button>
                                                <button type="submit" onClick={()=>setInputRows(inputRows - 1)} className="btn btn-primary pull-right">Delete Row</button>
                                                <button type="submit" onClick={()=>setInputRows(inputRows + 1)} className="btn btn-primary pull-right">Add Row</button>
                                                <div className="clearfix" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                        <h4 className="card-title ">Bills</h4>
                                        <p className="card-category"> Customers Bills</p>
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
        // orders: state.orders
        accounts: state.accounts,
        orders: state.orders

    })
}

export default connect(mapStateToProps, null)(Bills)