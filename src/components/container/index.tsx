import axios from 'axios'
import { DataSource } from './data-source'
import { ResourceLoader } from './resource-loader'
import { UserInfo } from './user-info'

const Container = () => {
    const getServerData = (url: string) => {
        return async () => {
            const response = await axios.get(url);
            return response.data;
        }
    }

    const getLocalStorageData = (key: string) => {
        return async () => {
            return localStorage.getItem(key)
        }
    }

    const Text = ({ message }: { message?: string }) => <h1>{message}</h1>;
    return (
        <>
            <ResourceLoader resourceUrl="/users/123" resourceName="user">
                <UserInfo />
            </ResourceLoader>

            <DataSource getDataFunc={getServerData('/users/123')} resourceName="user">
                <UserInfo />
            </DataSource>

            <DataSource getDataFunc={getLocalStorageData('message')} resourceName="message">
                <Text />
            </DataSource>
        </>
    )
}

export default Container