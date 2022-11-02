import './App.css';
import React, { Component } from 'react';
import img from './Nidhal.jpg';

 class App extends Component {
  constructor(props){
    super(props)
    this.state={
      person:{
        fullName:"Nidhal Saidane",
        bio:"Electromechanical engineer with 3 years of experience",
        profession: "Electromechanical engineer",
        imgsrc : <img style={{position:'center',borderRadius: 500,width:250,}} src={img} alt='pic'/>
      },
      show:false,
      count: 0
    }
  }
show=()=>{
  this.setState({show:!this.state.show})
}
componentDidMount = () => {
  setInterval(() => {
    this.setState(() => ({count: this.state.count + 1}));
  }, 1000);
};

  render() {
    return (
      <div className='Profile'>
        {this.state.show ? 
        <div>
           {this.state.person.imgsrc}  
          <h1 style={{textAlign:'center'}}>{this.state.person.fullName}</h1>
          <h2 style={{textAlign:'center'}}>{this.state.person.profession}</h2>
          <p  style={{marginTop: 50,textAlign:'justify',fontFamily: "wotfardRegularWebfont",fontSize: 20,}}>{this.state.person.bio}</p>
          <div style={{width:'30px',height:'20px',margin:'auto',paddingBottom:'5px',background:'#4CAF50', color:'white',borderRadius:'50px'}}>{this.state.count}
          </div>          
        </div> 
        :null}

        <button style={{position:'center',width:'120px',height:'40px',background:'#4CAF50', color:'white',borderRadius:'15px'}} onClick={this.show} >Show profile</button>
      </div>
    )
  }
}




export default App;
