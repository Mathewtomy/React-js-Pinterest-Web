import React from 'react';

 import '../styles/final_board_styles.css';
// import NewPin from './Newpin.js';
import Modal from './Modal.js';

class FinalBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pins: [],
            show_modal: false,
         
        }
    }

    add_pin = () => {
        this.setState(_state => {
            const new_pins = [
                ..._state.pins,
            
            ]

            // new_pins.push(
            //     <NewPin pinDetails={pinDetails} key={_state.pins.length}  />
            // )

            return {
                pins: new_pins,
                show_modal: false
            }
        });
    }

    render() {
        return (
            <div>
                <div className="navigation_bar">
                    <div onClick={() => this.setState({ show_modal: true })} className="pint_mock_icon_container add_pin">
                        <img src={this.props.path} alt="add_pin" className="pint_mock_icon" />
                    </div>
                </div>

                <div className="pin_container">
                    {/* {this.state.} */}
                </div>

                <div onClick={event => event.target.className === 'add_pin_modal' ? this.setState({ show_modal: false }) : null}
                    className="add_pin_modal_container"
                >
                    {
                       
                            <Modal add_pin={this.add_pin}  /> 
                    }
                    
                </div>
            </div >
        )
    }
}

export default FinalBoard;