import React from 'react';


function Nav(props) {

	return (
		 <div className='App'>
        	<header>
          		<h1>{props.title}</h1>
        	</header>
        </div>
		);
}

export default Nav;