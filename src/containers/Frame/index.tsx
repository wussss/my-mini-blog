import React from 'react';

import Header from './Header';

import Main from './Main';

const Frame: React.FC = ({ children }) => {
	return (
		<div className="App">
			<Header />
			<Main> {children} </Main>
		</div>
	);
};

export default Frame;
