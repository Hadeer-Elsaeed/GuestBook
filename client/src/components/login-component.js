import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './navbar-component';

export default class LoginUser extends Component {
        state = {
            u_email: '',
            u_password: ''  
        }

        onFormSubmit=(e)=>{

            e.preventDefault()

            axios.post("http://localhost:8080/login",{
                Email:this.state.u_email,
                Password:this.state.u_password

            }).then(res=>{
                console.log("Login");
                localStorage.setItem('usertoken', res.data)
                window.location = '/messages/list' 
                return res.data  
            }).catch(res=>{
                window.location = '/login'
            })
        }
        
        render() {
            return (
           
             
                <div>
                    <Navbar/>
              
                    <br></br>
                    <form>
                        <div></div>
                    <div className="form-group ">
                            <label for="email" className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control"
                                 id="email" placeholder="Email"
                                    value={this.state.u_email}
                                    onChange={(e)=>this.setState({
                                        u_email:e.target.value
                                    })}
                                  />
                            </div>
                        </div>
         
                        <div className="form-group ">
                            <label for="pass" className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control"
                                 id="pass" placeholder="Password"
                                    value={this.state.u_password}
                                    onChange={(e)=>this.setState({
                                        u_password:e.target.value
                                    })}
                                  />
                            </div>
                        </div>
     
    
                        <div className="form-group ">
                            <div className="col-sm-10">
                                <button onClick={this.onFormSubmit} className="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    
    
}



