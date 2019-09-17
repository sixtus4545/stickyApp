import React, { Component } from 'react';
import Header from './header'
class Todo extends Component {

	// state={
	// 		toggle:true
	// 	}

	// toggle=()=>{
	// 	this.setState({
	// 		toggle:!this.state.toggle
	// 	})
	// }
	// render(){
	// 	return (
	// 		<div>
	// 		<Welcome text="checking out state and setState(show text)"/>
	// 		<h1>WELCOME </h1>
	// 		{this.state.toggle && 
	// 			<p>this sholud show and hide</p>
	// 		}
			
	// 		<button onClick={this.toggle}> show / hide</button>
	// 		</div>
	// 		)
	// }
	state={
		color:["blue"]
	}

	handleChange=e=>{
		this.setState({
			color:e.target.value
		})
	}
	render(){
		return(
				<div>
				<Header/>
						
				<div className="show" style={{background:this.state.color}}>
<input className="search-input" id="value" value={this.state.setcolor} onChange={this.handleChange}type="text"
 placeholder="input color to change background color" onfocus/>
				</div>
			
			<div className="container">
			<div className="show1" style={{background:this.state.color}}></div>
				<div className="show1" style={{background:this.state.color}}></div>
					<div className="show1" style={{background:this.state.color}}></div>
						<div className="show1" style={{background:this.state.color}}></div>
							<div className="show1" style={{background:this.state.color}}></div>

			</div>
				</div>
			)
	}
}


export default Todo;


