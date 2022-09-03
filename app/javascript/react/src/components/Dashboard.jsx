import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Dashboard = () => {
	return(
		<div className="container">
			<h1> Welcome to the rails7 with react js</h1>
			<p>This is a beginning of Journey</p>
		</div>

	)
}

document.addEventListener('DOMContentLoaded', ()=>{
	ReactDOM.render(<Dashboard />,document.getElementById('dashboard'))
})

export default Dashboard;