import React from 'react';

function CountComp({ text, count }) {
	console.log(`Rendering ${text}`)
	return <div>{text} - {count}</div>
}

export default React.memo(CountComp)
