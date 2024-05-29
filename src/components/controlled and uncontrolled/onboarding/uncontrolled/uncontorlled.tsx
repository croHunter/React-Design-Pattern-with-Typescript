import React, { FC, PropsWithChildren, ReactElement, useState } from 'react';
import { StepDataType } from './steps';


export const UncontrolledOnboardingFlow: FC<PropsWithChildren<{ onFinish: (data: StepDataType) => void }>> = ({ children, onFinish }) => {

	const arrayChildren = React.Children.toArray(children)

	const [onboardingData, setOnboardingData] = useState<StepDataType>({})

	const [currentIndex, setCurrentIndex] = useState(0);

	const goToNext = (stepData: StepDataType) => {
		const nextIndex = currentIndex + 1
		const updatedData = { ...onboardingData, ...stepData }
		console.log({ stepData })
		if (nextIndex < arrayChildren.length) {
			setCurrentIndex(nextIndex)
		} else {
			onFinish(updatedData)
		}
		setOnboardingData(updatedData)

	}

	const currentChild = arrayChildren[currentIndex];

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild as ReactElement, { goToNext });
		// return React.cloneElement(currentChild as ReactElement<PropsType>, { goToNext });
	}

	return currentChild;
}