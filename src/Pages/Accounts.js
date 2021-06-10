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

    var [name, setName] = useState()
    var [address, setAddress] = useState()
    var [city, setCity] = useState()
    var [addInfo, setAddInfo] = useState()
    var [contact, setContact] = useState()
    var [country, setCountry] = useState()
    var [companyName, setcompanyName] = useState()
    var [searchValue,setSearchValue] = useState('')


    const handle_submit = (e) => {
        e.preventDefault()
        setName("")
        setAddress("")
        setCity("")
        setAddInfo("")
        setContact("")
        setCountry("")
        setcompanyName("")
    }

    var newAccount = {
        name: name,
        address: address,
        city: city,
        addInfo: addInfo,
        contact: contact,
        country: country,
        companyName: companyName
    }
    

    const accountsFilter = accounts.filter((v) => {
        return v.name.toLowerCase().includes(searchValue.toLowerCase())
    })


    return (
        <div>

            <div className="wrapper ">
                <SideBar />
                <div className="main-panel">
                    <Navbar name="Create Accounts" />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card">
                                        <div className="card-header card-header-primary">
                                            <h4 className="card-title">Create Account</h4>
                                        </div>
                                        <div className="card-body">
                                            {/* <button onClick={()=>props.set_account()}>Redux</button> */}
                                            <form onSubmit={handle_submit}>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Name</label>
                                                            <input type="text" value={name || ""}  onChange={(e) => setName(e.target.value)} className="form-control" required />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Company Name</label>
                                                            <input type="text" value={companyName || ""} onChange={(e) => setcompanyName(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Address</label>
                                                            <input type="text" value={address || ""}  onChange={(e) => setAddress(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4">
                                                
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">City</label>
                                                            <input type="text" value={city || ""}  onChange={(e) => setCity(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Country</label>
                                                            <input type="text" value={country || ""}  onChange={(e) => setCountry(e.target.value)} className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <label className="bmd-label-floating">Number</label>
                                                            <input type="number" value={contact || ""}  onChange={(e) => setContact(e.target.value)} className="form-control" required />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Additional  Info</label>
                                                            <div className="form-group">
                                                                <label className="bmd-label-floating"> Extra Information</label>
                                                                <textarea className="form-control" onChange={(e) => setAddInfo(e.target.value)} rows={5} defaultValue={addInfo} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" onClick={() => props.set_account(newAccount)} className="btn btn-primary pull-right">Create Account</button>
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
                                        <input className=" form-control mt-1" 
                                        type="text" placeholder="Search" aria-label="Search"
                                        onChange={ e => setSearchValue(e.target.value)}  />

                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead style={{ color: "#8e24aa", fontWeight: 'bold' }} >
                                                    <tr>
                                                        <th style={{ fontWeight: 'bold' }}>ID</th>
                                                        <th style={{ fontWeight: 'bold' }}>Name</th>
                                                        <th style={{ fontWeight: 'bold' }}>Country</th>
                                                        <th style={{ fontWeight: 'bold' }}>City</th>
                                                        <th style={{ fontWeight: 'bold' }}>Contact</th>
                                                        <th style={{ fontWeight: 'bold' }}>Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {accountsFilter.map((v, i) => {
                                                        return <tr key={i}>
                                                            <td>{i}</td>
                                                            <td>{v.name}</td>
                                                            <td>{v.country}</td>
                                                            <td>{v.city}</td>
                                                            <td style={{ color: "#8e24aa" }}>{v.contact}</td>
                                                            <td><button type="button" className="btn btn-primary">View Details</button></td>
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
const mapDispatchToProps = (dispatch) => ({
    set_account: (newAccount) => dispatch(set_account(newAccount))
});

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)