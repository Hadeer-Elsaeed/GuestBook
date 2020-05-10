
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
class ListMessages extends Component {
    render() {
        // console.log(this.props.mydata);
        if (this.props.mydata == null) {
            return <div>Loading</div>
        }
        else {
            console.log(this.props);
            
            let newData=this.props.mydata.map((item,i)=>{
                return(

                    <table key={i}>
                    {/* <th scop="col"> */}
                    <div className="card border-info mb-3"  style={{width:500}}>
                    <div className="card-header bg-transparent border-info">{item.title}</div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{item._id} </h5>
                        <h5 className="card-text">{item.msgbody}</h5>
                    </div>
                    <div className="card-footer bg-transparent border-danger">
                    <button className="btn btn-danger"
                    onClick={()=>this.props.deleteMessage(item._id)} 
                    
                    >Delete Message</button>

                    <button className="btn btn-info"
                    onClick={()=>this.props.editMessage(item._id)} 
                    
                    >Edit Message</button>

                    {/* <Link className="btn btn-outline-info" to={{pathname: "/MessageApp/edit", state: { Message: item}}}> Edit</Link> */}
                    {/* <Link to={`/MessegeApp/Edit/2`} className="btn btn-outline-info">Edit</Link> */}
  
                        </div>
                    </div>
                    {/* </th> */}
                    </table>
        
                )
            })
            return (
                <div>
                      <Header/>
                      <br></br>
                      <a  href= "/AddMessage" className="btn btn-success">Add New Message</a>
                     <pre>


                     </pre>
                   {newData}
                </div>
            )
        }
     }
}
export default ListMessages