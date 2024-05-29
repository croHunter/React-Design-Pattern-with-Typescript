import { FC } from "react"
type SmallPropsType = {
    product: {
        name: string,
        price: string,
        description: string,
        rating: number,
    }
}
export const SmallProductListItem: FC<SmallPropsType> = ({ product }) => {
    const { name,
        price,
        description,
        rating, } = product
    return (
        <div>
            <div>Name: {name}</div>
            <div>Price: {price}</div>
            <div>Description: {description}</div>
            <div>Rating: {rating}</div>
        </div>
    )
}

export const LargeProductListItem = () => {
    return (
        <div>LargePeopleListItem</div>
    )
}
