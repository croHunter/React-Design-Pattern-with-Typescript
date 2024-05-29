// A method of organizing code bases in a way that:
// * minimize mutation and state changes
// * keeps functions independent of external data
// * treats function as first-class citizens



// It's applications
// * Controlled Components
// * HOC
// * Functional Components
// * Recursive Components
// * Partial Applied Components
// * Component Composition
// import { DangerButton,BigSuccessButton } from './composition'
import { BigSuccessButton,DangerButton } from './partialy-applied'

const FunctionProgramming = () => {
  return (
    <div>
        <DangerButton text="Don't do it!" />
		<BigSuccessButton text="Yes!!!" />
    </div>
  )
}

export default FunctionProgramming