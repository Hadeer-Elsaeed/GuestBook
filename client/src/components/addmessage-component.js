import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header'

export default class AddMessage extends Component {
        state = {
            m_title: '',
            m_body: ''    
        }
        onFormSubmit=(e)=>{
            e.preventDefault()
            axios.post("http://localhost:8080/messages/add",{
                Title:this.state.m_title,
                Msgbody:this.state.m_body
            }).then(res=>{
                window.location = '/messages/list'
                console.log("Saved");
            })
    
        }
        
        render() {
            return (
                <div>
                    <Header/>
                    <form  onSubmit={this.onFormSubmit}>
                         <br></br>
                        <div className="form-group">
                            {/* <label for="inputtitle" className="col-sm-2 col-form-label">Title</label> */}
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                 id="inputtitle" placeholder="Title"
                                    value={this.state.m_title}
                                    onChange={(e)=>this.setState({
                                        m_title:e.target.value
                                    })}
                                  />
                            </div>
                                        <br></br>
                            {/* <label for="inputmessage" className="col-sm-2 col-form-label">Message</label> */}
                            
                            <textarea name="textarea" rows="10" 
                            className="form-control"
                            id="inputmessage" placeholder="Message"
                               value={this.state.m_body}
                               onChange={(e)=>this.setState({
                                   m_body:e.target.value
                               })}
                            ></textarea>                           
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button type="submit" className="btn btn-info">Add Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    
    
}


