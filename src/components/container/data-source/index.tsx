import React, { PropsWithChildren, useEffect, useState } from 'react';
type DataSourceProps<T> = {
    getDataFunc: () => T;
    resourceName: string;
}
// export const DataSource:FC<PropsWithChildren<DataSourceProps<T>>> = ({ getDataFunc = () => {}, resourceName, children }) => {

export const DataSource = <T extends {}>({
    getDataFunc,
    resourceName,
    children
}: PropsWithChildren<DataSourceProps<T>>) => {
    const [state, setState] = useState<T | null>(null);

    useEffect(() => {
        (async () => {
            const data = await getDataFunc();
            setState(data);
        })();
    }, [getDataFunc]);

    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: state });
                }

                return child;
            })}
        </>
    );
}