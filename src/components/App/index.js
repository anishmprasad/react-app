import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Listing from '../Listing';
import MeetingRooms from '../MeetingRooms';

import ThemeProvider from '../App/ThemeProvider';
import ComponentOne from '../App/ComponentOne';
import ComponentTwo from '../App/ComponentTwo';

const client = new ApolloClient({
	uri: 'http://smart-meeting.herokuapp.com/graphql'
});

export default function App() {
	return (
		// <ApolloProvider client={client}>
		// 	<div className='App'>
		// 		<header className='App-header'>
		// 			{/* <img src={logo} className='App-logo' alt='logo' /> */}
		// 			Smart Meeting Organizer
		// 		</header>
		// 		<Listing />
		// 		<MeetingRooms />
		// 	</div>
		// </ApolloProvider>
		<ThemeProvider theme={'red'}>
			<ComponentOne />
			<ComponentTwo />
		</ThemeProvider>
	);
}

// import React from 'react'
// import ApolloClient from 'apollo-boost'
// import { ApolloProvider } from 'react-apollo'
// import Books from './Books'

// const client = new ApolloClient({
//   uri: 'https://r95kv5p84n.lp.gql.zone/graphql',
// })

// const App = () => (
//   <ApolloProvider client={client}>
//     <nav className="navbar">
//       <a className="navbar-brand" href="">
//         GraphQL in React - Demo application
//       </a>
//     </nav>
//     <div className="container">
//       <Books />
//     </div>
//   </ApolloProvider>
// )

// export default App
