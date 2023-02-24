import React, { useState, useEffect } from "react";
import './result.css';
import icons from '../Images/icons.png';
import {Download} from "@mui/icons-material"
import Navbar from "./Navbar";
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import Pindetails from "./Pindetails";

const Pin = (props) => {
	const [show, setShow] = useState(true);
	const [cart, setCart] = useState([]);
	const [modal, setModal] = useState(false);
	// Toggle for Modal
	const toggle = () => setModal(!modal);
	// const handleClick = (item) => {
	//   if (cart.indexOf(item) !== -1) return;
	//   setCart([...cart, item]);
	// };

	
		if (props.images.length === 0 && props.timeOut === false) {
			return (
				<div className='loader-container'>
					<div className='loader'></div>
					<p>Loading</p>
				</div>
			);
		} else if (props.timeOut === true && props.images.length === 0) {
			return (
				<div className='loader-container not-found'>
					<h2>Sorry, no results found!</h2>
					<p>Your internet may be slow.</p>
				</div>
			);
		}
	
  
		
		return (
			
			<div className='results'>
		 
				{props.images.map(image => {
						
					return (
						
						<div>
	
		{/* <Navbar setShow={setShow} size={cart.length} />   */}

						<div key={image.id} className='image'>
						<Router>
						<Switch>
						
						<Route path="/details/:id">
						<Pindetails  images={image}></Pindetails>
						</Route>
						
						</Switch>
						</Router>
							<img alt={image.alt_description} src={image.urls.regular}   ></img>
	
							<div className='overlay' ></div>
		
							<button
								className='btn  btn-sm btn-light'
								onClick={() => {
									console.log('clicked!');
									window.open(image.urls.raw, '_newtab');
								}}
							>
								&darr;
							</button>
							<div className='pin' onClick={() => props.handleClick(image,image.id)}> {props.status}</div>

							<div className='likes badge badge-light'>{image.likes} Likes</div>
							<div className="modal_foot">
								
							<div className='profile'>
							<div className="pint_mock_icon_container">
					<a href={`/details/${image.urls.raw.split('?')[0]}` }>

<img src={icons} alt="edit" className="pint_mock_icon" />
				</a>
				
                    </div>
								<img
									alt=''
									src={image.user.profile_image.small}
									style={{ width: 30, height: 'auto', borderRadius: '50%' }}
								></img>
						
								  
								<h6
									onClick={() => {
										window.open(
											'https://www.unsplash.com/@' + image.user.username,
											'_newtab'
										);
									}}
								>
									{image.user.name}
								</h6>
								<div className="flex gap-2" style={{fontSize:"1.25rem",opacity:"3em"}}>
							
                <a
                //href={`https://images.unsplash.com/photo-`+  image.id`?dl`}
				

				  href={`${image.urls.raw.split('?')[0]}?dl`}
                  download
		
				  onClick={(e) => {e.stopPropagation()}}
                  className="btn  btn-sm btn-light"
                >
              <div className="btn  btn-sm btn-light">
                        <img src={icons} alt="send" className="pint_mock_icon" />
                    </div>
                </a>
              </div>
			  </div>
							</div>
						</div>
						</div>
		
					);
				
				}
				
				)
				
				}

			</div>
		);
	
}

export default Pin;