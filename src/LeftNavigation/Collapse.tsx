import styled from '@emotion/styled';
import {colors} from '@panda-design/components';
import {IconCollapse} from '../icons';

const CollapseContainer = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-top: 1px solid ${colors['gray-4']};
`;

interface IconProps {
    collapsed?: boolean;
}

const StyledIconCollapse = styled(IconCollapse)<IconProps>`
    transform: ${props => (props.collapsed ? 'rotate(180deg)' : 'unset')};
`;

interface Props {
    collapsed: boolean;
    onClick: () => void;
}

const Collapse = ({collapsed, onClick}: Props) => {
    return (
        <CollapseContainer
            onClick={onClick}
        >
            <StyledIconCollapse collapsed={collapsed} />
        </CollapseContainer>
    );
};

export default Collapse;
