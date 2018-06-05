import React, {Component} from 'react';
import '../css/styles.css'
class Header extends Component {

state = {
    keywords: ''
  }

  inputChangeHandler=(event) =>{
    //console.log(event.target.value)
    //const value = event.target.value ==='' ? 'active':'non-active';
    this.setState({
      keywords: event.target.value
    });
  }

  render() {

    return (<header className={this.state.active}>
      <div className="logo">Logo</div>
      <input type="text" onChange={this.inputChangeHandler}/>
    </header>)
  }
}
export default Header;
