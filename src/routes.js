import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './app'
import HomePage from './components/HomePage'
import CodePage from './components/CodePage'
import LinkDumpPage from './components/LinkDumpPage'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={HomePage} />
		<route path="code" component={CodePage} />
		<route path="linkdump" component={LinkDumpPage} />
	</Route>
)
