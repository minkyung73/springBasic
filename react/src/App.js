import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';


// Custom
import Main from './pages/Main';
import SignUP from './pages/SignUp';
import Registration from './pages/Registration';
import Order from './pages/Order';
import OrderList from './pages/OrderList';
import ProductList from './pages/ProductList';
import MemberList from './pages/MemberList';

// Css Import
import './assets/scss/app.scss';


const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>

				{/* Customs  */}
				<Route path={process.env.PUBLIC_URL + "/"} element={<Main />}/>
				<Route path={process.env.PUBLIC_URL + "/sign-up"} element={<SignUP/>}/>
				<Route path={process.env.PUBLIC_URL + "/product-registration"} element={<Registration/>}/>
				<Route path={process.env.PUBLIC_URL + "/product-order"} element={<Order/>}/>
				<Route path={process.env.PUBLIC_URL + "/order-list"} element={<OrderList />}/>
				<Route path={process.env.PUBLIC_URL + "/product-list"} element={<ProductList />}/>
				<Route path={process.env.PUBLIC_URL + "/member-list"} element={<MemberList />}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
