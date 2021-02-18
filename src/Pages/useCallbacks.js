import React, { useCallback, useState } from 'react';
import ButtonComp from '../Components/useCallbacksComp/ButtonComp';
import CountComp from '../Components/useCallbacksComp/CountComp';
import TitleComp from '../Components/useCallbacksComp/TitleComp';

function useCallbacks() {
	const [age, setAge] = useState(25)
	const [salary, setSalary] = useState(50000)

	const incrementAge = useCallback(() => {
		setAge(age + 1)
	}, [age])

	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	}, [salary])

	return (
		<div>
			<TitleComp />
			<CountComp text="Age" count={age} />
			<ButtonComp handleClick={incrementAge}>Increment Age</ButtonComp>
			<CountComp text="Salary" count={salary} />
			<ButtonComp handleClick={incrementSalary}>Increment Salary</ButtonComp>
		</div>
	)
}

export default useCallbacks;
