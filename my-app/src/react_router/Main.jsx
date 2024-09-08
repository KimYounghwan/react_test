import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	return (
		<>
			<h3> 메인페이지</h3>
			<ul>
			<Link to="/product/1?search=productName&q=demo#test"><li>1번상품</li></Link>
			<Link to="/product/2"><li>2번상품</li></Link>
				<Link to="/pro/3"><li>3번상품</li></Link>
			</ul>
		</>
	);
};

export default Main;
