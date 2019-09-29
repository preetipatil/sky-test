import React from 'react';

const mainDiv ={
    height: "150px",
}

const avatarDiv ={
    height: "100px",
    float:"left",
}

class MessageItem extends React.Component {

 constructor(){
    super();
    this.state = {
      emailTxt: "",
    };
 }

 onMouseEnter(email) {   ;
    this.setState({emailTxt: email})
 }

 onMouseLeave() {
    this.setState({emailTxt: ''})
 }

  render() {
    const { chatMessage, email, avatar, timestamp }  = this.props;
    
     return (
         <li >
            <div style={mainDiv}>
                <div style={avatarDiv}>
                    { avatar ? <img  src={avatar}  alt="" /> : " No Avatar "}
                </div>
                <div>
                    <p>DATE {new Date(timestamp).toLocaleString()} </p>
                    <p onMouseEnter={() => this.onMouseEnter(email)} onMouseLeave={() => this.onMouseLeave()}>TXT {chatMessage}  </p>
                    <span>{this.state.emailTxt}</span>
                </div>
            </div>
         </li>
     );
  }
}

export default MessageItem;