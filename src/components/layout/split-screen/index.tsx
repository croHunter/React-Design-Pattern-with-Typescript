import { FC } from "react"
import SplitScreen from "./split-screen"


const Layout: FC = () => {
    return (<SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name={"Hunter"} />
        <RightHandComponent message="Pro hunter left the chat" />
    </SplitScreen>)
}
export default Layout

const LeftHandComponent: FC<{ name: String }> = ({ name }) => <div style={{ backgroundColor: "red" }}>left {name}</div>
const RightHandComponent: FC<{ message: string }> = ({ message }) => <div style={{ backgroundColor: "green" }}>Right {message}</div>