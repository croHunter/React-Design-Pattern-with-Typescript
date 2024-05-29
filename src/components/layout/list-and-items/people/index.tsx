import { FC } from "react";

export const SmallPeopleListItem: FC<{
    person: {
        name: string;
        age: number;
        hairColor: string;
        hobbies: string[];
    }
}> = ({ person }) => {
    const { name, age } = person
    return (
        <div>Name: {name}, Age: {age}</div>
    )
}

export const LargePeopleListItem: FC<{ person: { name: string; age: number; hairColor: string; hobbies: string[] } }> = ({ person }) => {
    const { name, age, hairColor, hobbies } = person
    return (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor} </p>
            <ul>
                {hobbies.map((hobby) => {
                    return <li key={hobby}>{hobby}</li>
                })}
            </ul>
        </>
    )
}
