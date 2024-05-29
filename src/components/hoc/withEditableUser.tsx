import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UserAge, UserHairColor, UserInterface, UserName } from './withUser';

export const withEditableUser = <P extends object>(WrappedComponent: React.ComponentType<P>, userId: string) => {
    return (props: P) => {
        const [originalUser, setOriginalUser] = useState<UserInterface | null>(null);
        const [user, setUser] = useState<UserInterface | null>(null);

        useEffect(() => {
            (async () => {
                const response = await axios.get(`/users/${userId}`);
                setOriginalUser(response.data);
                setUser(response.data);
            })();
        }, []);

        const onChangeUser = (changes: UserName | UserAge | UserHairColor) => {
            if (!user) {
                return
            }
            setUser({ ...user, ...changes });
        }

        const onSaveUser = async () => {
            const response = await axios.post(`/users/${userId}`, { user });
            setOriginalUser(response.data);
            setUser(response.data);
        }

        const onResetUser = () => {
            setUser(originalUser);
        }
        const resource = {
            user,
            onChangeUser,
            onSaveUser,
            onResetUser,

        }
        return <WrappedComponent {...props as P} {...resource}/>
    }
}

type UserResourcePropType = {
    user: UserInterface | null;
    onChangeUser: (obj: UserName | UserAge | UserHairColor) => void;
    onSaveUser: () => void;
    onResetUser: () => void
}
export const UserInfoForm = withEditableUser<any>(
    ({ user, onChangeUser, onSaveUser, onResetUser }: UserResourcePropType) => {
        if (!user) {
            return <p>Loading...</p>;
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
    },
    '123',
);
<UserInfoForm />