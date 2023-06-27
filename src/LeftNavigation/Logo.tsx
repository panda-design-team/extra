import {ReactNode} from 'react';
import {colors} from '@panda-design/components';
import styled from '@emotion/styled';

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-bottom: 1px solid ${colors['gray-4']};
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.3s;
`;

// 使用绝对定位获得更优的动画效果，unset 可能导致闪烁，需要再调整
const IconContainer = styled.div`
    position: absolute;
    left: 13px;
    top: 13px;
    transition: all 0.3s;
`;

const TitleContainer = styled.div`
    position: absolute;
    top: 14px;
    left: 40px;
    font-size: 14px;
    transition: all 0.3s;
`;

interface Props {
    collapsed: boolean;
    icon: ReactNode;
    title: ReactNode;
}

const Logo = ({collapsed, icon, title}: Props) => {
    return (
        <Container>
            <IconContainer>{icon}</IconContainer>
            {!collapsed && <TitleContainer>{title}</TitleContainer>}
        </Container>
    );
};

export default Logo;
