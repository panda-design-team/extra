import {Divider} from 'antd';
import styled from '@emotion/styled';
import {Fragment} from 'react';
import {colors} from '@panda-design/components';
import {LeftNavigationProps} from './interface';
import MenuItem from './MenuItem';

interface ContainerProps {
    level: 1 | 2;
}

const Container = styled.div<ContainerProps>`
    flex: 1;
    padding-top: ${props => (props.level === 1 ? '6px' : '4px')};
    padding-bottom: ${props => (props.level === 1 ? '6px' : '4px')};
    background-color: ${props => (props.level === 1 ? colors['gray-2'] : colors['gray-3'])};
`;

interface Props {
    collapsed: boolean;
    level: 1 | 2;
    items: LeftNavigationProps['items'];
}

/* eslint-disable react/no-array-index-key */
const MenuList = ({level, collapsed, items}: Props) => {
    return (
        <Container level={level}>
            {items.map((item, index) => {
                if (item.type === 'divider') {
                    return <Divider key={`divider-${index}`} />;
                }
                const element = (
                    <MenuItem
                        key={`item-${item.title}-${index}`}
                        level={1}
                        collapsed={collapsed}
                        item={item}
                    />
                );
                if (item.children) {
                    return (
                        <Fragment key={`list-${item.title}-${index}`}>
                            {element}
                            <MenuList collapsed={collapsed} level={2} items={item.children} />
                        </Fragment>
                    );
                }
                return element;
            })}
        </Container>
    );
};
/* eslint-enable react/no-array-index-key */

export default MenuList;
