import React from 'react';
import icons from '../Images/icons.png'
import './search.css';
import styled from "styled-components";
import { IconButton } from "@material-ui/core";
import {Person,Notifications,Chat,FavoriteRounded,KeyboardArrowDownOutlined} from "@mui/icons-material"

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 'dog'
		};
	}

	handleChange = event => {
		this.setState({ value: event.target.value });
	};

	// handleClick = () => {
	// 	console.log('Clicked!');
	// 	console.log(this.state.value);
	// };

	getButtonClasses = () => {
		let classes = 'btn  ml-4  btn-';
		classes += this.state.value ? 'secondary bg-dark' : 'light';
		return classes;
	};
	render() {
		return (
			<div className='main-menu'>
			
            <div className="searchBox">
					<input
						type='text' placeholder="Search...."
						value={this.state.value}
						onChange={this.handleChange}
						onKeyUp={e => {
							if (e.keyCode == 13) {
								this.props.onSubmit(this.state.value);
							}
						}}
					></input>
					<button
						onClick={() => this.props.onSubmit(this.state.value)}
						className={this.getButtonClasses()}
						disabled={this.state.value ? false : true}
					>
					
				
                    <div className="search">
            <img src={icons} alt="" />
          </div>
          </button>
		 </div>
		
				<div className="menu">
	       
				<IconButton>
				 <i className='iconContainer'>	 <Notifications/></i>
				 </IconButton>
				 <IconButton>
				 <i className='iconContainer'><Person/>		</i>
				 </IconButton>
				 <IconButton>
			 	<i className='iconContainer'> <Chat/>	</i>
				 </IconButton>
				 <IconButton>
				 <i className='iconContainer' onClick={() => this.props.click()} >	<FavoriteRounded/>   <div className="cart" > {this.props.size} </div> 	</i>
				 </IconButton>
				 <IconButton>
				 <i className='iconContainer'>   <KeyboardArrowDownOutlined/>	</i>
				 </IconButton>
			  </div>
			  </div>
          
			
		);
	}
}


export default Header;
