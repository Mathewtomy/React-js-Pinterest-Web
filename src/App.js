import "./App.css";
import MenuContainer from "./Components/MenuContainer";
import { Fragment } from 'react';
import pinterest from "./Images/pinterest.png";
import {CarRentalSharp,SportsBaseball,Snowboarding,Restaurant,NaturePeople,Add,BeachAccess} from "@mui/icons-material"
import React from "react";
import PinterestIcon from '@mui/icons-material/Pinterest';
import Pin from './Components/Pin'
import Axios from 'axios';
import Header from "./Components/SearchHandler";
import Pinfav from "./Components/Pinfav";

import { BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'

import Pindetails from "./Components/Pindetails";
//Axios is a library that serves to create HTTP requests that are present externally.
//The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM 
class App extends React.Component {
	constructor(props) {
		super(props);
	this.state = {
			arr: [],
			timeOut: false,
            show:true,
            cart:[],
			status:"Pin",
	

		};
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState(state => ({
			show: !state.show
		}));
	  }

	getImages = async (query, page) => {
		// console.log(this.state);
		this.setState({ arr: [] });
		const response = await Axios.get('https://api.unsplash.com/search/photos/', {
			params: { query, per_page: 49, page },
			headers: {
				Authorization: 'Client-ID y-KsfJBqb_iZfZO12bN7fqEWsrAdGbQoJAUwN-soUns'
			}
		});
		return response;
	};

	componentDidMount = async () => {
		let response = await this.getImages('dog', 1);
		// console.log(response);
		this.setState({ arr: response.data.results });
		const cart = localStorage.getItem('myCart')
        this.setState({cart: JSON.parse(cart) ? JSON.parse(cart) : []}, this.addTotal) 
	};

	handleSubmit = async (value, page) => {
		this.setState({ timeOut: false });
		let response = await this.getImages(value, Math.random() * 200);
		let timeOut = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve();
			}, 5000);
		});

		timeOut.then(() => {
			this.setState({ timeOut: true });
		});
		this.setState({
			arr: response.data.results
		});
	};

 handleClick = (item,id) => {
	
	  if (this.state.cart.indexOf(item) !== -1) return;
	  
    this.setState({
			cart: [...this.state.cart, item],
	
		}, ()=> {
		
            localStorage.setItem('myCart', JSON.stringify(this.state.cart))})
		
	};

  handleRemove = (id) => {
    const arr = this.state.cart.filter((item) => item.id !== id);
    this.setState({
		cart:[...arr],
  }, () => {
	
	localStorage.setItem('myCart', JSON.stringify(this.state.cart))
})
  };


//   handlefav = (id) => {
//     const arr = this.state.cart.filter((item) => item.id === id);
// 	if(arr) {
//     this.setState({
//       status: "Pinned"
//   });
// }
//   };



  car = async () => {
		let response = await this.getImages('car', 1);
		// console.log(response);
		this.setState({ arr: response.data.results });
	};

  sports = async () => {
		let response = await this.getImages('football', 1);
		// console.log(response);
		this.setState({ arr: response.data.results });
	};

  Restaurant = async () => {
		let response = await this.getImages('restaurant', 1);
		// console.log(response);
		this.setState({ arr: response.data.results });
	};


  Snowboarding = async () => {
		let response = await this.getImages('snow', 1);
		// console.log(response);
		this.setState({ arr: response.data.results });
	};

nature = async () => {
		let response = await this.getImages('nature', 1);
		// console.log(response);
		this.setState({ arr: response.data.results });
	};

  beach = async () => {
		let response = await this.getImages('beach', 1);
		// console.log(response);
		this.setState({ arr: response.data.results });
	};


url='/add';
path='/'

  render() {

		return (
			
    <div className="App">

<div>



      <div className="menuContainer">
   
       <a href={this.path}><img src={pinterest}/> </a> 
        <div className="subMenu">
          <div >
      
            <i className='iconContainer' onClick={this.car}>   <CarRentalSharp/> </i>
            <i className='iconContainer' onClick={this.sports}>    <SportsBaseball/> </i>
            <i className='iconContainer'  onClick={this.Restaurant}>   <Restaurant/> </i>
            <i className='iconContainer' onClick={this.Snowboarding}>   <Snowboarding/> </i>
            <i className='iconContainer' onClick={this.nature}>   <NaturePeople/> </i>
            <i className='iconContainer' onClick={this.beach}>   <BeachAccess/> </i>


        
          </div>
          {/* <div>
            <MenuContainer icon={<FavoriteRounded/>}/>
          </div> */}
          <div>
		  <a href={this.url} > 
     <MenuContainer icon={<Add/>} /></a>  
							
          </div>
        </div>
      </div>
      <main>
<div>

      <Header onSubmit={this.handleSubmit} click={this.handleToggleClick} size={this.state.cart.length} />
    </div>
    
        {/* <div className="searchBox">
          <input type="text" placeholder="Search...." />
          <div className="search">
            <img src={icons} alt="" />
          </div> */}
    
        {/* </div> */}
   
      

      
 {this.state.show ? (
		<Router>
		<Switch>
	   <Route exact path="/">
                    <Pin
                    images={this.state.arr}
                    onLoad={this.setLoadingFalse}
                    timeOut={this.state.timeOut}
                    handleClick={this.handleClick}
					status={this.state.status}
	
                  />
                 </Route>
 </Switch>
  
  </Router>
      
                  ) :  (
                   
					
				  <Pinfav cart={this.state.cart} setCart={this.setState.cart} handleRemove={this.handleRemove} size={this.state.cart.length}/>
                  )}
      </main>
	  
	  </div>


<>

<Router>
<Switch>


<Route path="/details/:id">
<Pindetails  images={this.state.arr}></Pindetails>
</Route>

</Switch>
</Router>

</>
    </div>

  );
        }
}

export default App;
