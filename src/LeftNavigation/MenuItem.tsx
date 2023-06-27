import styled from '@emotion/styled';
import {colors} from '@panda-design/components';
import {useLocation, useNavigate} from 'react-router-dom';
import {useCallback, useMemo} from 'react';
import {Tooltip} from 'antd';
import {LeftNavigationMenuItem} from './interface';

interface ContainerProps {
    collapsed: boolean;
    isActive: boolean;
}

const backgroundActive = colors['gray-4'];

const Container = styled.div<ContainerProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => (props.collapsed ? '56px' : '40px')};
    overflow: hidden;
    white-space: nowrap;
    cursor: pointer;

    color: ${props => (props.isActive ? colors.black : colors['gray-8'])};
    background-color: ${props => (props.isActive ? backgroundActive : 'unset')};
    :hover {
        color: ${colors.black};
        background-color: ${backgroundActive};
    }
`;

interface StyleProps {
    collapsed: boolean;
}

// 使用绝对定位获得更优的动画效果，unset 可能导致闪烁，需要再调整
const IconContainer = styled.div<StyleProps>`
    position: absolute;
    left: ${props => (props.collapsed ? '15px' : '15px')};
    top: 8px;
    //transition: all 0.3s;
`;

const TitleContainer = styled.div<StyleProps>`
    position: absolute;
    top: ${props => (props.collapsed ? '30px' : '9px')};
    // TODO 计算 left 位置
    left: ${props => (props.collapsed ? 'unset' : '40px')};
    font-size: ${props => (props.collapsed ? '12px' : '14px')};
    transition: top 0.3s, left 0.3s, font-size 0.3s;
`;

interface Props {
    collapsed: boolean;
    level: 1 | 2;
    item: LeftNavigationMenuItem;
}

const MenuItem = ({collapsed, item}: Props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {
        to,
        icon,
        title,
        shortTitle,
        className,
        style,
        onClick,
        tooltip,
    } = item;
    const isActive = item.isActive ?? location.pathname === to;

    const handleClick = useCallback(
        () => {
            if (to) {
                navigate(to);
            }
            onClick?.();
        },
        [navigate, onClick, to]
    );

    const tooltipTitle = useMemo(
        () => {
            if (tooltip) {
                return tooltip;
            }
            if (collapsed && shortTitle !== title) {
                return title;
            }
        },
        [collapsed, shortTitle, title, tooltip]
    );

    return (
        <Tooltip placement="right" title={tooltipTitle}>
            <Container
                collapsed={collapsed}
                isActive={isActive}
                className={className as any}
                style={style as any}
                onClick={handleClick}
            >
                <IconContainer collapsed={collapsed}>{icon}</IconContainer>
                <TitleContainer collapsed={collapsed}>{collapsed ? shortTitle : title}</TitleContainer>
            </Container>
        </Tooltip>
    );
};

export default MenuItem;
