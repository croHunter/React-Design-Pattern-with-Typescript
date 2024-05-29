import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { StepDataType } from './steps';


export const ControlledOnboardingFlow: FC<PropsWithChildren<{
	onFinished: (stepData: StepDataType) => void;
	currentIndex: number;
	onNext: (stepData: StepDataType) => void;
}>> = ({ children, currentIndex, onNext, onFinished }) => {

	const arrayChildren = React.Children.toArray(children)

	console.log({ childrenLength: arrayChildren.length })

	const goToNext = (stepData: StepDataType) => {
		if (currentIndex === (arrayChildren.length - 1)) {
			onFinished(stepData)
		} else {
			onNext(stepData)
		}

	}

	const currentChild = arrayChildren[currentIndex];

	if (React.isValidElement(currentChild)) {
		return React.cloneElement(currentChild as ReactElement, { goToNext });
		// return React.cloneElement(currentChild as ReactElement<PropsType>, { goToNext });
	}

	return currentChild;
}