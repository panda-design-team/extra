import styled from '@emotion/styled';
import useMergedState from 'rc-util/lib/hooks/useMergedState';
import {useCallback} from 'react';
import {colors} from '@panda-design/components';
import {LeftNavigationProps} from './interface';
import Logo from './Logo';
import MenuList from './MenuList';
import Collapse from './Collapse';

interface ContainerProps {
    collapsed: boolean;
}

const Container = styled.div<ContainerProps>`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: var(--devops-left-navigator-top, 48px);
    left: 0;
    bottom: 0;
    width: ${props => (props.collapsed
        ? 'var(--devops-left-navigator-width-collapsed, 50px)'
        : 'var(--devops-left-navigator-width-expanded, 160px)'
    )};
    background-color: ${colors['gray-2']};
    border-right: 1px solid ${colors['gray-4']};
    overflow: hidden;
    transition: width 0.3s;

    svg {
        font-size: 20px;
    }
`;

const WidthPlaceholder = styled.div<ContainerProps>`
    flex-shrink: 0;
    width: ${props => (props.collapsed
        ? 'var(--devops-left-navigator-width-collapsed, 50px)'
        : 'var(--devops-left-navigator-width-expanded, 160px)'
    )};
    transition: width 0.3s;
`;

// keep file，后续开发新版侧边栏
const LeftNavigation = ({
    icon,
    title,
    className,
    style,
    items,
    enableCollapse = true,
    defaultCollapsed,
    collapsed,
    onCollapse,
}: LeftNavigationProps) => {
    const [innerCollapsed, setInnerCollapsed] = useMergedState(false, {
        value: collapsed,
        defaultValue: defaultCollapsed,
    });
    const handleClick = useCallback(
        () => {
            if (enableCollapse) {
                const nextCollapsed = !innerCollapsed;
                onCollapse?.(nextCollapsed);
                setInnerCollapsed(nextCollapsed);
            }
        },
        [enableCollapse, innerCollapsed, onCollapse, setInnerCollapsed]
    );
    return (
        <>
            <Container
                collapsed={innerCollapsed}
                className={className}
                style={style}
            >
                <Logo collapsed={innerCollapsed} icon={icon} title={title} />
                <MenuList collapsed={innerCollapsed} level={1} items={items} />
                <Collapse collapsed={innerCollapsed} onClick={handleClick} />
            </Container>
            <WidthPlaceholder collapsed={innerCollapsed} />
        </>
    );
};

export default LeftNavigation;
