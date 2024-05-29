import axios from "axios";
import { FC, useEffect, useState } from "react";

export interface UserInterface { name: string; age: number; hairColor: string; hobbies: string[] }
export interface UserName{
    name: string;
}
export interface UserAge{
    age: number;
}
export interface UserHairColor{
    hairColor: string;
}

export const UserInfo: FC<{ user?: UserInterface }> = ({ user }) => {
    if (!user) {
        return <p>Loading...</p>
    }
    const { name, age, hairColor, hobbies } = user;

    return (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    ) 
}
export const withUser = <P extends object>(WrappedComponent: React.ComponentType<P>, userId: string) => {
    // return (props: { isLoading: boolean } & P) => {
    return (props: P) => {
        const [user, setUser] = useState<UserInterface | null>(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setUser(response.data);
            })();
        }, []);

        return <WrappedComponent {...props as P} user={user} />
    }
}
/*************************/
const UserInfoWithLoader = withUser(UserInfo, '234');
<UserInfoWithLoader />