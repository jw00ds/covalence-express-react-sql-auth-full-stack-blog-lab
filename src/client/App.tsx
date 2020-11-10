import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Nav from './components/Nav';
import PrivateRoute from './components/PrivateRoute';
import HomeFeed from './views/HomeFeed';
import Details from './views/Details';
import CreateReview from './views/CreateReview';
import CreateTag from './views/CreateTag';
import Admin from './views/Admin';
import Register from './views/Register';
import Login from './views/Login';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<HomeFeed />
				</Route>
				<PrivateRoute exact path='/reviews/:id'>
					<Details />
				</PrivateRoute>
				<PrivateRoute exact path='/createreview'>
					<CreateReview />
				</PrivateRoute>
				<PrivateRoute exact path='/createtag'>
					<CreateTag />
				</PrivateRoute>
				<PrivateRoute exact path='/admin/:id'>
					<Admin />
				</PrivateRoute>
				<Route exact path='/register'>
					<Register />
				</Route>
				<Route exact path='/login'>
					<Login />
				</Route>
				<Redirect from='*' to='/' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;