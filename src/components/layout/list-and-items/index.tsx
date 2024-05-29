import { SmallPeopleListItem } from "./people"
import { SmallProductListItem } from "./products"
import RegularList from "./regular-list"

const people = [
    {
        name: "Jon doe",
        age: 44,
        hairColor: 'gray',
        hobbies: ['swimming', 'trading', 'gaming']
    },
    {
        name: "Hunter",
        age: 34,
        hairColor: 'green',
        hobbies: ['trading', 'swimming', 'gaming']
    }
]

const products = [
    {
        name: 'Tv',
        price: '$1000',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit accusantium amet atque voluptates, facilis repellat explicabo laboriosam sit ratione veritatis totam quis neque voluptatum eaque iste inventore hic nisi debitis.",
        rating: 4.5
    },
    {
        name: 'Laptop',
        price: '$4066',
        description: "atque voluptates, facilis repellat explicab oamet consectetur, adipisicing elit. Impedit accusantium amet ratione veritatis totam quis neque voluptatum laboriosam sit  Lorem ipsum dolor sit  eaque iste inventore hic nisi debitis.",
        rating: 3.5
    }
]
const ListAndItems = () => {
    return (
        <>
         <RegularList items={people} renderItems={(item) => <SmallPeopleListItem person={item} />} />
         <RegularList items={products} renderItems={(item) => <SmallProductListItem product={item} />} />
        </>
       
    )
}

export default ListAndItems