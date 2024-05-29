import { StepOne, StepThree, StepTwo } from './steps'
import { UncontrolledOnboardingFlow } from './uncontorlled'
/**
This onboarding component is consider to be uncontrolled
because the app component that displaying onboarding has very little control over what its doing
eg: we cannot do "show and hide" certain steps based on the data contain in onboarding flow
 */

const UncontrollableOnboarding = () => {
	return (
		<>
			<UncontrolledOnboardingFlow onFinish={(data)=>{
				
				console.log({data})
				alert("onboarding complete")
			}}>
				<StepOne />
				<StepTwo />
				<StepThree />
			</UncontrolledOnboardingFlow>
		</>
	)
}

export default UncontrollableOnboarding