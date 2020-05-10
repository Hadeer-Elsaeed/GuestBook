import React, { Component, Fragment } from 'react'
import ListMessages from './listmessage-component'
import Header from './Header'
import AddMessage from './addmessage-component'

import { BrowserRouter, Route,Link } from 'react-router-dom'
import axios from 'axios'
import EditMesssage from './editmessage-component'
class MessageApp extends Component {
    state = {
        Data: []
    }
    addnewmsg=(newmsg)=>{
        let newMessage=[...this.state.Data,newmsg];
        this.setState({
            Data:newMessage
        })

    }
    componentDidMount(){
        this.getData();
 
    }
    getData=()=>{
        axios("http://localhost:8080/messages/list")
        .then((res)=>{
                console.log(res.data);
                this.setState({
                    Data:res.data
                })
        })
    }
    deleteMessage=(msg_id)=>{
        axios.get(`http://localhost:8080/messages/delete/${msg_id}`)
        .then(res=>{
            this.getData();
        })

    }

    getEditData=(msg_id)=>{
        axios.get(`http://localhost:8080/messages/edit/${msg_id}`)
        .then(res=>{
            this.setState({
                EditData:res.data
            })
        })
    }
    editMessage=(msg_id)=>{
         axios.post(`http://localhost:8080/messages/edit/${msg_id}`)
        .then(res=>{
            this.geEdittData();
        })
    }
    render() {

        return (
            <div>
                <BrowserRouter>
                <Route exact path="/" component={() => <ListMessages deleteMessage={this.deleteMessage} mydata={this.state.Data} />} />
                    <Route exact path="/messages/list" component={() => <ListMessages  deleteMessage={this.deleteMessage} mydata={this.state.Data} />} />
                    <Route exact path="/messages/edit" component={() => <EditMesssage  getEditData={this.getEditData} mydata={this.state.EditData} />} />

                    <Route exact path="/AddMessage" component={AddMessage}/>
                </BrowserRouter>
            </div>



        )
    }

}
export default MessageApp;