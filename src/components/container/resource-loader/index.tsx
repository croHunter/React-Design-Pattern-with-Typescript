import React, { useState, useEffect, FC, PropsWithChildren } from 'react';
import axios from 'axios';

export const ResourceLoader: FC<PropsWithChildren<{ resourceUrl: string, resourceName: string }>> = ({ resourceUrl, resourceName, children }) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setState(response.data);
        })();
    }, [resourceUrl]);

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