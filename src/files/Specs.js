import React, { Component } from 'react';
import Parts from './Parts';



class Specs extends Component {



 render() {


  
        return (
            <div>
              <Parts 
                ItemName={this.props.ItemName} 
                ItemCost={this.props.ItemCost} 
                ItemHash={this.props.ItemHash}
                InputName={this.props.InputName}
                InputChecked={this.props.InputChecked}
                InputOnChange={this.props.InputOnChange}
   
              />
              
            </div>

        );          

  }
}






export default Specs;