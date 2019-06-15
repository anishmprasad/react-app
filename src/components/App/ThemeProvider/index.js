import React from 'react';

export default function ThemeProvider(props) {
	if (!props.children) return null;
	const childrenWithProps = React.Children.map(props.children, child => React.cloneElement(child, { ...props }));

	return <div className={props.className}>{childrenWithProps}</div>;
}

// import React from 'react';

// // React.createContext accepts a defaultValue as the first param
// const MyContext = React.createContext();

// export default class ThemeProvider extends React.Component {
// 	render() {
// 		console.log(this.props);
// 		return <MyContext.Provider {...this.props}>{this.props.children}</MyContext.Provider>;
// 	}
// }
