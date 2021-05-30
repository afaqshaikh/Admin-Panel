// import FixedPlugin from '../Components/FixedPlugin'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'
import Navbar from '../Components/Navbar'
import Self from '../Images/Self.jpg'
import { useState } from 'react'
import { connect } from 'react-redux';
import { set_account } from '../Config/store/action'


function Accounts(props) {
    var accounts = props.accounts
    // console.log("redux data ==>", props)

    var [name, setName] = useState("")
    var [address, setAddress] = useState("")
    var [city, setCity] = useState("")
    var [addInfo, setAddInfo] = useState("")
    var [contact, setContact] = useState()
    var [country, setCountry] = useState("")
    var [companyName, setcompanyName] = useState("")

    const handle_submit = (e) => {
        e.preventDefault()
        var newAccount = {
            name: name,
            address: address,
            city: city,
            addInfo: addInfo,
            contact: contact,
            country: country,
            companyName: companyName
        }
        console.log(newAccount)
        set_account([newAccount])

    }

    return (
        <div>

            <div className="wrapper ">
                <SideBar />
                <div className="main-panel">
                    <Navbar />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header card-header-primary">
                                            <h4 className="card-title">Create Account</h4>
                                        </div>
                                        <div className="card-body">
                                            <form onSubmit={handle_submit}>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Name</label>
                                                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Company Name</label>
                                                            <input type="text" value={companyName} onChange={(e) => setcompanyName(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Address</label>
                                                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">City</label>
                                                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Country</label>
                                                            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Number</label>
                                                            <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Additional  Info</label>
                                                            <div className="form-group">
                                                                <label className="bmd-label-floating"> Extra Information</label>
                                                                <textarea className="form-control" value={addInfo} onChange={(e) => setAddInfo(e.target.value)} rows={5} defaultValue={""} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary pull-right">Create Account</button>
                                                <div className="clearfix" />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-profile">
                                        <div className="card-avatar">
                                            {/* <a href="javascript:;"> */}
                                            <img className="img" alt="Person" src={Self} />
                                            {/* </a> */}
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
                                        <h4 className="card-title ">Accounts</h4>
                                        <p className="card-category"> Customers Accounts</p>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                        <th>Country</th>
                                                        <th>City</th>
                                                        <th>Contact</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {accounts.map((v, i) => {
                                                        return <tr key={i}>
                                                            <td>{i}</td>
                                                            <td>{v.name}</td>
                                                            <td>{v.country}</td>
                                                            <td>{v.city}</td>
                                                            <td className="text-primary">{v.contact}</td>
                                                        </tr>
                                                    })}

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
        accounts: state.accounts
    })
}
const mapDispatchToProps = (dispatch) => {
    return{
        set_account: (data) => dispatch(set_account())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)