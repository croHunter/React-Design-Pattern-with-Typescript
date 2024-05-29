import axios from 'axios';
import { FC } from 'react';
import { UserInterface } from '../hoc/withUser';
import { useDataSource } from './useDataSource';

const serverResource = (resourceUrl: string) => async () => {
    const response = await axios.get(resourceUrl);
    return response.data;
};



export const UserInfo: FC<{ userId: string }> = ({ userId }) => {
    // const user = useResource(`/users/${userId}`);

    const user = useDataSource<UserInterface>(serverResource(`/users/${userId}`));
    if (!user) {
        return <p>Loading...</p>
    }
    const { name, age, hairColor, hobbies } = user;

    return <>
        <h3>{name}</h3>
        <p>Age: {age} years</p>
        <p>Hair Color: {hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
        </ul>
    </>

}