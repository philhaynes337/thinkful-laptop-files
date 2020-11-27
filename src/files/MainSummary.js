import React, { Component } from 'react';
import Option from './Option';
import Total from './Total';




class MainSummary extends Component {

     render() {



return (

	<div>

			<Option
				featureHash={this.props.featureHash}
          		feature={this.props.feature}
          		selectedOption={this.props.selectedOption}
          		Cost={this.props.Cost} 
          	/>

            <Total
              Total={this.props.Total}
             />
		
	</div>
    );
    
}


}


export default MainSummary