import { FC } from "react";

export interface StepPropsType<T> { goToNext?: (value: T) => void }

export interface StepOnePropType {
	name: string
}
export interface StepTwoPropType {
	age: number
}
export interface StepThreePropType {
}
export interface StepFourPropType {
	address: string
}

export interface StepDataType {
	name?: string;
	age?: number;
	address?: string;
}
// export interface StepDataType extends StepOnePropType ,StepTwoPropType ,StepThreePropType,StepFourPropType{}
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
				goToNext({ age: 200 })
			}

		}}>Next</button>
	</>
);


export const StepThree: FC<StepPropsType<StepThreePropType>> = ({ goToNext }) => (
	<>
		<h1>Step 3</h1>
		<p>Congratulations! You qualify for our senior discount</p>
		<button onClick={() => {
			if (goToNext) {
				goToNext({})
			}
		}}>Next</button>
	</>
);
export const StepFour: FC<StepPropsType<StepThreePropType>> = ({ goToNext }) => (
	<>
		<h1>Step 4</h1>
		<button onClick={() => {
			if (goToNext) {
				goToNext({ address: "Nepal" })
			}
		}}>Next</button>
	</>
);