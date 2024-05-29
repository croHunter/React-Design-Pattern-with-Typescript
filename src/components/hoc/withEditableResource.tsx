import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserAge, UserHairColor, UserInterface, UserName } from './withUser';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const withEditableResource = <P,X>(WrappedComponent: React.ComponentType<P>, resourcePath: string, resourceName: string) => {
    return (props: P) => {
        const [originalData, setOriginalData] = useState<X|null>(null);
        const [data, setData] = useState<X|null>(null);
        useEffect(() => {
            (async () => {
                // const response = await axios.get(resourcePath);
                // setOriginalData(response.data);
                // setData(response.data);
                const x={name:"sujan",age:4,hairColor:"red",hobbies:["eat","sleep"]} as X
                setOriginalData(x);
                setData(x);
            })();
        }, []);

        const onChange = (changes: UserName | UserAge | UserHairColor) => {
            if(!data){
                return;
            }
            setData({ ...data, ...changes });
        }

        const onSave = async () => {
            const response = await axios.post(resourcePath, { [resourceName]: data });
            setOriginalData(response.data);
            setData(response.data);
        }

        const onReset = () => {
            setData(originalData);
        }

        const resourceProps = {
            [resourceName]: data,
            [`onChange${capitalize(resourceName)}`]: onChange,
            [`onSave${capitalize(resourceName)}`]: onSave,
            [`onReset${capitalize(resourceName)}`]: onReset,
        }

        return <WrappedComponent {...props}  {...resourceProps} />
    }
}
interface UserResourceProps {
    user: UserInterface | null;
    onChangeUser: (obj: UserName | UserAge | UserHairColor) => void;
    onSaveUser: () => void;
    onResetUser: () => void
}
export const UserInfoForm = withEditableResource<any,UserInterface>(({ user, onChangeUser, onSaveUser, onResetUser }: UserResourceProps) => {
    if (!user) {
        return <p>Loading...</p>
    }
    const { name, age, hairColor } = user

    return (
        <>
            <label>
                Name:
                <input value={name} onChange={e => onChangeUser({ name: e.target.value })} />
            </label>
            <label>
                Age:
                <input type="number" value={age} onChange={e => onChangeUser({ age: Number(e.target.value) })} />
            </label>
            <label>
                Hair Color:
                <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
            </label>
            <button onClick={onResetUser}>Reset</button>
            <button onClick={onSaveUser}>Save Changes</button>
        </>
    )
}, '/users/123', 'user');

<UserInfoForm/>
