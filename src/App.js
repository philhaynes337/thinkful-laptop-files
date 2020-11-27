import React, { Component } from 'react';
import Nav from './files/Nav';
import MainForm from './files/MainForm';
import MainSummary from './files/MainSummary';
import {features} from './files/Features';
import './files/Pick.css';
import slugify from 'slugify';
import './App.css';



const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});



class App extends Component {

 state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

   updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };


render() {


  const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));

return (
        
        <div>
        <MainForm 
          ItemName={item.name}
          ItemCost={USCurrencyFormat.format(item.cost)}
          ItemHash={itemHash}
          InputName={slugify(feature)}
          InputChecked={item.name === this.state.selected[feature].name}
          InputOnChange={e => this.updateFeature(feature, item)}
        />

        </div>
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });




     const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];


      return (
        <div>

        <MainSummary
          
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption.name}
          Cost={USCurrencyFormat.format(selectedOption.cost)}
         
         />
         </div>
      );
    });


    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );


    return (
      <>

      <Nav title='ELF Computing | Laptops' />
        <main>
        
           <div className='Laptop'> 
              <form className="main__form">
                <h2>Customize your laptop</h2>
                  {features}
              </form>
            </div>
            <div className='Laptop'>
              <section className="main__summary">
                <h2>Your cart</h2>
                  {summary}
                  <div className="summary__total">
                    <div className="summary__total__label">Total
                  </div>
                  <div className="summary__total__value">
                      <MainSummary
                        Total={USCurrencyFormat.format(total)}
                      />
                  </div>
                  </div>
              </section>
            </div>
        </main>
      </>
    );



  }

}


export default App;
