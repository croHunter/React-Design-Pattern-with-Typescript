import { FC } from "react";

export interface StepPropsType<T> { goToNext?: (value: T) => void }

export interface StepOnePropType {
	name: string
}
export interface StepTwoPropType {
	age: number
}
export interface StepThreePropType {
	address: string
}
export interface StepDataType {
	name?: string;
	age?: number;
	address?: string;
}
// export type StepDataType = StepOnePropType | StepTwoPropType | StepThreePropType
export const StepOne: FC<StepPropsType<StepOnePropType>> = ({ goToNext }) => (
	<>
		<h1>Step 1</h1>
		<button onClick={() => {
			if (goToNext) {
				goToNext({ name: "Sujan" })
			}
		}}>Next</button>
	</>
);
export const StepTwo: FC<StepPropsType<StepTwoPropType>> = ({ goToNext }) => (
	<>
		<h1>Step 2</h1>
		<button onClick={() => {
			if (goToNext) {
				goToNext({ age: 26 })
			}

		}}>Next</button>
	</>
);
export const StepThree: FC<StepPropsType<StepThreePropType>> = ({ goToNext }) => (
	<>
		<h1>Step 3</h1>
		<button onClick={() => {
			if (goToNext) {
				goToNext({ address: "Nepal" })
			}
		}}>Next</button>
	</>
);