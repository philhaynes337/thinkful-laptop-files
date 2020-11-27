import React, { Component } from 'react';
import Specs from './Specs';



class MainForm extends Component {

     render() {


return (
	<div>
		
		<section>
			<Specs 
				ItemName={this.props.ItemName} 
                ItemCost={this.props.ItemCost} 
                ItemHash={this.props.ItemHash}
                InputName={this.props.InputName}
                InputChecked={this.props.InputChecked}
                InputOnChange={this.props.InputOnChange}
			 />
		</section>
	</div>
    );
    
}


}


export default MainForm



