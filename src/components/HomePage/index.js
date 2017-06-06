import React from 'react'
import { Link } from 'react-router'
import ReactSpan from './ReactSpan'
import ES6Span from './ES6Span'
import computerGif from '../../assets/img/computer5.gif'

class HomePage extends React.Component {
	render() {
		return (
			<div className="flex flex-column flex-row-l items-center">
				<div id="title-box" className="order-1 order-0-l">
					<p className="lh-copy">hiya, my name is tom hughes and i'm a web developer based in london, uk. i specialize in javascript and like using new technologies like <ReactSpan /> and <ES6Span />. in fact, this website is built using both.</p>
					<p className="lh-copy">as well as writing maintainable code, i'm pretty good at design and also make 3d animations in my spare time.</p>
					<p className="lh-copy"><strong>currently:</strong> freelance (aka <a href="mailto:ok@tomhuhges.com" className="link underline-hover">hire me</a>)</p>
					<p className="lh-copy"><strong>previously:</strong> lead developer and designer at springwise</p>
					<p className="lh-copy"><a href="mailto:ok@tomhuhges.com" className="link underline-hover">ok@tomhuhges.com</a> ~ <a href="tel:+447725577327" className="link underline-hover">+44 772 5577 327</a></p>
				</div>
				<img id="computer" className="order-0 order-1-l" src={computerGif} />
			</div>
		)
	}
}

export default HomePage
