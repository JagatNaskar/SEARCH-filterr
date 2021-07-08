import React from 'react'

import './Form.css';
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Fullname: "",
            Email: "",
            Phone: "",
            Message: "",
        }
    }
   
    /*
    handleName=(event)=>{
        this.setState({Fullname: event.target.value})
    }
    handleEmail=(event)=>{
        this.setState({Email: event.target.value})
    }
    handlePhone=(event)=>{
        this.setState({Phone: event.target.value})
    }
    handleMessage=(event)=>{
       this.setState({Message: event.target.value})
    }*/

    handleChangeAll=(e)=>{
        this.setState({[e.target.name] :e.target.value});
    }
    /*
     handlesubmit=(event)=>{
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }*/
     handlesubmit=(event)=>{
         
        console.log( 'Hi.. Your name is ' +this.state.Fullname+'. Your email is '+ this.state.Email+'. Your phone number is '+ this.state.Phone+'. Feedback: '+this.state.Message);
        event.preventDefault(); //it will not go to the new page on submit

    } 
   onSubmit =(event)=>{
    event.preventDefault();
    const Fullname = this.Fullname.value;
    const Email = this.Email.value;
    const Phone = this.Phone.value;
    const Message = this.Message.value;
    const info = {Fullname : this.Fullname, Email : Email, Phone : Phone, Message : Message};
    const data = this.state.data;
   }
    render(){
        return(
            <div>
                <form className="form-inline"  onSubmit={this.onSubmit} > 
                    <label>Full Name : </label><br/>
                    <input type="text" validate="required" errorHelp="needs to be completed" name="Fullname" value={this.state.Fullname} ref={input=>this.Fullname=input} onChange={this.handleChangeAll} /> <br/>

                    <label>Email : </label><br/>
                    <input type="Email" validate="required" errorHelp="needs to be completed" name="Email" value={this.state.Email} ref={input=>this.Email=input} onChange={this.handleChangeAll} /> <br/>

                    <label>Phone Number : </label><br/>
                    <input type="number" name="Phone" value={this.state.Phone} ref={input=>this.Phone=input} onChange={this.handleChangeAll} /> <br/>

                    <label>Message : </label><br/>
                    <textarea name="Message" validate="required" errorHelp="needs to be completed" value={this.state.Message} ref={input=>this.Message=input} onChange={this.handleChangeAll} /> <br/>

                    <button type="submit" color="primary" type = "submit"  > Submit </button> 
                    <button input type="reset" value="-" onClick={this.handlePlus}>-  </button> 
                </form>
                
                
                
            </div>
        )
    }
}

export default Form;