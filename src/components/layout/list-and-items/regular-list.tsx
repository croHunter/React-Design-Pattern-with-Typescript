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
                    return <Fragment key={i}>{renderItems(item)}</Fragment>
                    // return <ItemComponent key={i} person={item} />
                })
            }
        </>
    )
}

export default RegularList


//JAVASCRIPT


// import { FC } from "react";
// const people = [
//     {
//         name: "Jon doe",
//         age: 44,
//         hairColor: 'gray',
//         hobbies: ['swimming', 'trading', 'gaming']
//     },
//     {
//         name: "Hunter",
//         age: 34,
//         hairColor: 'green',
//         hobbies: ['trading', 'swimming', 'gaming']
//     }
// ]


// export const SmallPeopleListItem: FC<{
//     person: {
//         name: string;
//         age: number;
//         hairColor: string;
//         hobbies: string[];
//     }
// }> = ({ person }) => {
//     const { name, age } = person
//     return (
//         <div>Name: {name}, Age: {age}</div>
//     )
// }

// export const RegularList = ({
// 	items,
// 	resourceName,
// 	itemComponent: ItemComponent,
// }) => {
// 	return (
// 		<>
// 		{items.map((item, i) => (
// 			<ItemComponent key={i} {...{ [resourceName]: item }} />
// 		))}
// 		</>
// 	)
// }


// <RegularList
// items={people}
// resourceName="person"
// itemComponent={SmallPersonListItem} /> 