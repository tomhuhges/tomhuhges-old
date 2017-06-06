import React from 'react'
import pitchit from '../../assets/img/pitchit.png'
import springwise from '../../assets/img/springwise.png'
import caret from '../../assets/img/caret.png'
import todooblr from '../../assets/img/todooblr.png'
import tomhuhgesbot from '../../assets/img/tomhuhgesbot.png'

class CodePage extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className="content">
				<h1>Code</h1>
				<p>client biz</p>
				<section id="client" className="flex-l justify-between">
					<article className="pa4 pt1 mb5 bg-white w-475-l">
						<h2>Pitch it!</h2>
						<p>Wordpress ~ HTML5 ~ CSS3</p>
						<p>Sep 2016</p>
						<p>a wordpress site for a nonprofit pairing young creatives with industry mentors</p>
						<img src={pitchit} />
					</article>
					<article className="pa4 pt1 mb5 bg-white w-475-l">
						<h2>Springwise</h2>
						<p>PHP ~ jQuery ~ SCSS ~ Git ~ AWS ~ Sketch</p>
						<p>Jan 2015 - August 2016</p>
						<p>dev + design for innovation news platform with 500,000 visitors/month</p>
						<img src={springwise} />
						<p></p>
					</article>
				</section>
				<p>personal biz</p>
				<section id="personal" className="flex-l justify-between">
				<article className="pa4 pt1 mb5 bg-white w-30-l">
						<h2>Caret</h2>
						<p>React ~ Redux ~ Mocha ~ Webpack</p>
						<p>Dec 2016</p>
						<p>a sexy markdown notepad for the browser</p>
						<img src={caret} />
					</article>
					<article className="pa4 pt1 mb5 bg-white w-30-l">
						<h2>Todooblr</h2>
						<p>vanilla ES2015</p>
						<p>Nov 2016</p>
						<p>a stupid gamified todo app</p>
						<img src={todooblr} />
					</article>
					<article className="pa4 pt1 mb5 bg-white w-30-l">
						<h2>tomhuhgesbot</h2>
						<p>JS Chrome Extension</p>
						<p>Dec 2015</p>
						<p>twitter bot that tweets everything i search for</p>
						<img src={tomhuhgesbot} />
					</article>
				</section>
			</div>
		)
	}
}

export default CodePage
