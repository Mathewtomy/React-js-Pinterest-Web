import React from "react";
import { IconButton } from "@material-ui/core";
import {FavoriteRounded} from "@mui/icons-material"
const Navbar = ({ setShow, size }) => {
  return (
    <div className="menu">
 <IconButton>
 <span className="my_shop" onClick={() => setShow(true)}></span>
				 <i className='iconContainer'>	<FavoriteRounded/> {size}	</i>
                 <div className="cart" onClick={() => setShow(false)}></div> 
             
				 </IconButton>
        </div>
  );
};

export default Navbar;