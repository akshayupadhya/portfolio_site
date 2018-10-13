export default (props) =>{
	const className = props.className
	return (
	<div className={`OneScroll ${className?className:""}`} style={{
		height:`100vh`,
		width:`100vw`
	}}>
	 	{props.children}
	</div>
)}