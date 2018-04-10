import React from "react";

class UserProfileWidget extends React.Component{
  constructor(props){
    super(props)
    this.user = this.props.currentUser
  }

  componentDidMount(){

  }

  render(){
    console.log(this.props)
    return(
      <React.Fragment>
        <h1>UserProfileWidget</h1>
      </React.Fragment>
    )
  }
}

export default UserProfileWidget;
