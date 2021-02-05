import './App.css';
import React from 'react';

class ClassComponent extends React.Component{
  constructor(props){
    super(props);
    //console.log("In Constructor:CHILD")
  }
  componentDidMount() {
    //console.log('In Component Did Mount:CHILD');
  }
  componentDidUpdate(){
    //console.log("In Component Did Update:CHILD");
  }
  render(){
    //console.log("In render:CHILD");
    return (
    <ol>
      {this.props?.CD?.map((ele,index)=>{
        return <li key={index}>{ele}</li>
      })}
    </ol>
    )
  }
}


function FunctionalComponent1(props) {
  return (
    <ul>
      {props?.FD?.map((ele,index)=><li key={index}>{ele}</li>)}
    </ul>
  );
}

class WrapperComponent extends React.Component{
  constructor(props){
    //console.log("In Constructor");
    super(props);
    this.state={
      CD: ["Vasudev","Siva","Bhanu","Shashi"],
      FD: ["IronMan","Captain America","Hulk","Thor"],
      //if it is true I will display CD, if it is false I will loop FD
      value: 'Vasudev',
      type: 'CD'
    }
    //WEIRD -> the value of "this" is not binded to the object by default but it is determined at runtime
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    //console.log('In Component Did Mount');
  }
  componentDidUpdate(){
    //console.log("In Component Did Update");
  }
  handleOnClick(){
    this.setState((prevState)=>{
      return {
        login:!prevState.login
      }
    }
    )
  }

  handleChangeInput(e){
    console.log(e,e.target.value)
    this.setState({
      value:e.target.value
    })
  }

  handleChangeCheckbox(e){
    console.log(e.target.value, "checkbox");
    this.setState({
      type: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    /*
    ES6 spread operator
    Dynamic assignment or accessing in a array -> prevState.CD, prevState[prevState.type] 
    Adding New element in a array using spread operator
    Returning Object directly from a arrow function
    */
    this.setState((prevState)=>({
      [prevState.type]: [...prevState[prevState.type], this.state.value]
    }))
  }
  
  render(){
    //console.log("In Render");
    return(
      <>
        <form onSubmit={this.handleSubmit}>
        <label>
          Add:
          <input type="text" value={this.state.value} onChange={this.handleChangeInput} />
        </label>
        <label>
          Type:
          <select value={this.state.type} onChange={this.handleChangeCheckbox}>
            <option value="CD">CD</option>
            <option value="FD">FD</option>
            </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
        {
          this.state.type==='CD'?<ClassComponent CD={this.state.CD}/>:<FunctionalComponent1 FD={this.state.FD}/>
        }
      </>
    )
  }
}

export default WrapperComponent;
