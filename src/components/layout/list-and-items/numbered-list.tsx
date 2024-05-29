import { ReactNode, Fragment } from "react";

interface PropsType<T> {
    items: T[];
    renderItems: (item: T) => ReactNode
}
const RegularList = <T extends {}>({
    items,
    renderItems,
}: PropsType<T>) => {
    return (
        <>
            {
                items.map((item, i) => {
                    return <Fragment key={i}>
                        	<h3>{i + 1}</h3>
                        {renderItems(item)}
                        </Fragment>
                    // return <ItemComponent key={i} person={item} />
                })
            }
        </>
    )
}

export default RegularList