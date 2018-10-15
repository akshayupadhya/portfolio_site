import {Component} from 'react'
import './oneScroll.scss'
export default class OneScroll extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const className = this.props.className
		return (
			<div className={`OneScroll ${className ? className : ""}`} >
				{this.props.children}
			</div>
		)	
	}
	}