// import FixedPlugin from '../Components/FixedPlugin'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import { connect } from 'react-redux';
import { useState } from 'react'
import SelectSearch, { fuzzySearch } from 'react-select-search';
import { set_bill } from "../Config/store/action";




function Bills(props) {
    var date = new Date()
    const accounts = props.accounts
    // const bills =props.bills

    const [name, setName] = useState()
    const [inputFields, setInputFields] = useState([
        { itemDesc: "", weight: "", rate: "", amount: "" },
        { itemDesc: "", weight: "", rate: "", amount: "" },
    ])
    // const [newBill , setNewBill] = useState()
    // Get accounts from redux
    const options = accounts.map((v, i) => {
        return {
            name: v.name,
            value: v.name
        }
    }
    )

    const handleInputChange = (event, index) => {
        const values = [...inputFields]
        values[index][event.target.name] = event.target.value
        setInputFields(values)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!name) return alert("Enter account name")
        var bill = [name, inputFields]
        console.log("New Bill ==>",bill)
        // setNewBill(bill)
        setName("")
        setInputFields([
            { itemDesc: "", weight: "", rate: "", amount: "" },
            { itemDesc: "", weight: "", rate: "", amount: "" }
        ])
        // console.log(newBill)
    }

    const handleAddField = (e) => {
        e.preventDefault()
        setInputFields([
            ...inputFields,
            { itemDesc: "", weight: "", rate: "", amount: "" }
        ])
    }

    const handleRemoveField = (index) => {
        const values = [...inputFields]
        values.splice(index, 1)
        setInputFields(values)
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
                                            <form onSubmit={handleSubmit}>
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
                                                        </div>
                                                    </div>
                                                </div>
                                                {inputFields.map((inputField, index) => {
                                                    return <div className="row" key={index}>

                                                        <div className="col-md-3">
                                                            <div className="form-group">
                                                                <label className="bmd-label-floating">Item Desc.</label>

                                                                <input type="text" name="itemDesc" value={inputField.itemDesc} onChange={(event) => handleInputChange(event, index)} className="form-control" required />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">
                                                            <div className="form-group">
                                                                <label className="bmd-label-floating">Weight</label>
                                                                <input type="number" name="weight" value={inputField.weight} onChange={(event) => handleInputChange(event, index)} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">

                                                            <div className="form-group">
                                                                <label className="bmd-label-floating">Rate </label>
                                                                <input type="number" name="rate" value={inputField.rate} onChange={(event) => handleInputChange(event, index)} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-2">

                                                            <div className="form-group">
                                                                <label className="bmd-label-floating">Amount </label>
                                                                <input type="number" name="amount" value={inputField.amount} onChange={(event) => handleInputChange(event, index)} className="form-control" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="form-group">
                                                                <button type="submit" onClick={() => handleRemoveField(index)} className="btn btn-primary pull-right">Delete Row</button>

                                                                <button type="submit" onClick={(e) => handleAddField(e)} className="btn btn-primary pull-right">Add Row</button>

                                                            </div>

                                                        </div>

                                                    </div>
                                                })}
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label">Total Amount </label>
                                                            <input type="number" name="totalAmount" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label">Total Weight </label>
                                                            <input type="number" name="totalAmount" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" onClick={handleSubmit} className="btn btn-primary pull-right">Submit</button>
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
                                                    {/* {bills.map((v, i) => {
                                                        console.log(v)
                                                        // return <tr key={i}>
                                                        //     <td>{i}</td>
                                                        //     <td>{v.name}</td>
                                                        //     <td>{v.time}</td>
                                                        //     <td>{v.advance}</td>
                                                        //     <td style={{ color: "#8e24aa" }}>{props.accounts.contact}</td>
                                                        //     <td><button type="button" className="btn btn-primary">View Details</button></td>
                                                        // </tr>
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
        accounts: state.accounts,
        bills : state.bills
    })
}
// const mapDispatchToProps = (dispatch) => ({
//     set_bill: (newBill) => dispatch(set_bill(newBill))
// });


export default connect(mapStateToProps, null)(Bills)