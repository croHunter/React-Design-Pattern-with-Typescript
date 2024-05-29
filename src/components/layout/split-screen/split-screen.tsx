import { FC, PropsWithChildren, Children } from "react"
import styled from "styled-components";

interface Props {
    weight: number;
}

const Pane = styled.div<Props>`
    flex: ${(props) => props.weight};

`;
const Container = styled.div`
display: flex;

    
`;

const SplitScreen: FC<PropsWithChildren<{ leftWeight: number; rightWeight: number }>> = ({ children, leftWeight = 1, rightWeight = 1 }) => {
    const [left, right] = Children.toArray(children);
    return <Container>
        <Pane weight={leftWeight}>
            {left}
        </Pane>
        <Pane weight={rightWeight}>
            {right}
        </Pane>
    </Container>
}
export default SplitScreen


