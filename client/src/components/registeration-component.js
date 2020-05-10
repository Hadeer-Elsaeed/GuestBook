import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar-component';

// import { useHistory } from "react-router-dom";


export default class RegisterUser extends Component {
    
        state = {
            u_name: '',
            u_password: '',
            u_email: '',
            u_phone: '',
            u_birthyear: ''    
        }
        onFormSubmit=(e)=>{
            e.preventDefault()
            console.log(this.state);
            axios.post("http://localhost:8080/register",{
                Username:this.state.u_name,
                Password:this.state.u_password,
                Email:this.state.u_email,
                Phone:this.state.u_phone,
                Birthyear:this.state.u_birthyear

            }).then(res=>{
                console.log(res);
                console.log("Saved");
                window.location = '/login'
            }).catch(err=>{
                console.log(err);
                window.location = '/register'
            })
    
        }
        
        render() {
            return (
                <div>
                    <Navbar/>
                    <br></br>
                    <form >
                        <div className="form-group row">
                            <label for="inputname" className="col-sm-2 col-form-label">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                 id="inputname" placeholder="_Name"
                                    value={this.state.u_name}
                                    onChange={(e)=>this.setState({
                                        u_name:e.target.value
                                    })}
                                  />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control"
                                 id="inputPassword3" placeholder="Password"
                                    value={this.state.u_password}
                                    onChange={(e)=>this.setState({
                                        u_password:e.target.value
                                    })}
                                  />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputemail3" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control"
                                 id="inputemail3" placeholder="Email"
                                    value={this.state.u_email}
                                    onChange={(e)=>this.setState({
                                        u_email:e.target.value
                                    })}
                                  />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputphone" className="col-sm-2 col-form-label">Phone</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control"  placeholder="Phone" id="inputphone"
                                value={this.state.u_phone}
                                onChange={(e)=>this.setState({
                                    u_phone:e.target.value
                                })}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label for="inputbirthyear" className="col-sm-2 col-form-label">BirthYear</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control"
                                 id="inputbirthyear" placeholder="Birthyear"
                                    value={this.state.u_birthyear}
                                    onChange={(e)=>this.setState({
                                        u_birthyear:e.target.value
                                    })}
                                  />
                            </div>
                        </div>
    
                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button onClick={this.onFormSubmit} className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    
    
}
