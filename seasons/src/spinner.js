import React from 'react';

const Spinner = (props) => {
	return (
		<div className="ui active dimmer">
			<div className="ui big text loader">{props.message}</div>
		</div>

		);
};




// below this shows the alternative if the props message doesn't show.
Spinner.defaultProps = {
	message: "Loading...."
}


export default Spinner;