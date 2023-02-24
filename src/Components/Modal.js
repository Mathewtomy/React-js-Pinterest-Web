import React, { Component } from 'react'
  import '../styles/modal_styles.css';





class Modal extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
          message: "",
          items: []
        }
      }
    
      updateMessage(event) {
        this.setState({
          message: event.target.value
        });
      }
    
      handleClick() {
        var items = this.state.items;
    
        items.push(this.state.message);
    
        this.setState({
          items: items,
          
        });
      }
    
      handleItemChanged( event) {
        var items = this.state.items;
        items = event.target.value;
    
        this.setState({
          items: items
        });
      }
    
      handleItemDeleted(i) {
        var items = this.state.items;
    
        items.splice(i, 1);
    
        this.setState({
          items: items
        });
      }
    
      renderRows() {
        var context = this;
    
        return  this.state.items.map(function(o, i) {
                  return (
                    <tr >
                  
                      <td>
                        <input
                          type="text"
                          value={o}
                    
                        />
                      </td>
                      <td>
                        <button
                          onClick={context.handleItemDeleted.bind(context, i)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                });
      }
    
      render() {
        return ( 
        <div>
            <table className="">
              <thead>
                <tr>
               
                  <th>
                 Comments
                  </th>
                  <th>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.renderRows()}
              </tbody>
            </table>
        <div className="add_pin_modal">
            <div className="add_pin_container">
            

                <div className="side" id="right_side">
                    <div className="section1">
                        <div className="select_size">
                          <p>Comments</p>
                        <input
              type="text"
           
            />
                            <button  className="btns"
              onClick={this.handleClick.bind(this)}
            >
             Done
            </button>
            <div className="se2">
                        <input placeholder="Add your title" type="text" className="new_pin_input" id="pin_title"   value={this.state.message}
              onChange={this.updateMessage.bind(this)}/>
                        
                    </div>
                        </div>
                    </div>

                  
                </div>
            </div>
        </div>
        </div>
    )
}
}

export default Modal;