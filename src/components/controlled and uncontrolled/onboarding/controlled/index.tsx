import { StepDataType, StepFour, StepOne, StepThree, StepTwo } from './steps'
import { ControlledOnboardingFlow } from './controlled'
import { useState } from 'react';

const ControllableOnboarding = () => {
	const [onboardingData, setOnboardingData] = useState<StepDataType>({})

	const [currentIndex, setCurrentIndex] = useState(0);
	console.log({ currentIndex })
	const goToNext = (stepData: StepDataType) => {
		const nextIndex = currentIndex + 1
		const updatedData = { ...onboardingData, ...stepData }
		setCurrentIndex(nextIndex)
		setOnboardingData(updatedData)
	}

	return (
		<>
			<ControlledOnboardingFlow
				onFinished={(data) => {
					console.log({ data })
					alert("onboarding complete")
				}}
				currentIndex={currentIndex}
				onNext={goToNext}>
				{onboardingData?.age && onboardingData?.age >= 62 && <StepThree />}
				<StepOne />
				<StepTwo />
				<StepFour />
			</ControlledOnboardingFlow>
		</>
	)
}

export default ControllableOnboarding