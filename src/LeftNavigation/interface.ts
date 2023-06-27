import {ReactNode, CSSProperties} from 'react';
import {To, NavLinkProps} from 'react-router-dom';

export interface LeftNavigationDividerItem {
    type: 'divider';
}

export interface LeftNavigationMenuItem {
    type?: undefined;
    // 图标必选
    icon: ReactNode;
    // 展开时的标题
    title: string;
    // 收起时的标题，如果不填，则与 title 相同
    shortTitle?: string;
    // 添加额外的 tooltip，展开和收起时都会展示。如果不填，那么在收起时，会智能的选择 title 来提示
    tooltip?: ReactNode;
    // 点击时，前往的页面地址。如果不填，则没有效果
    to?: To;
    // 当 to 的自动判断不满足时，可以手动指定是否处于激活态
    isActive?: boolean;
    // 点击触发，与 to 同时存在时，同时触发
    onClick?: () => void;
    // 类似 react-router 可以定义是否 isActive 两种 className
    className?: NavLinkProps['className'];
    // 类似 react-router 可以定义是否 isActive 两种 style
    style?: NavLinkProps['style'];
    // 二级菜单，最多支持二级
    children?: Array<LeftNavigationMenuItem | LeftNavigationDividerItem>;
}

export interface LeftNavigationProps {
    // Logo 必选
    icon: ReactNode;
    // 项目标题必选
    title: ReactNode;
    // 菜单配置，必选
    items: Array<LeftNavigationMenuItem | LeftNavigationDividerItem>;
    // 折叠相关
    // 是否开启折叠功能，关闭时，不显示折叠按钮。默认开启
    enableCollapse?: boolean;
    // 是否折叠的受控状态，不传时不受控
    collapsed?: boolean;
    // 不受控时，可以给一个默认状态
    defaultCollapsed?: boolean;
    // 折叠的 callback
    onCollapse?: (value: boolean) => void;
    // external icon 相关
    // 一个函数用来判断是否需要显示 external icon，默认检查是否是一个带协议的地址，一般不需要覆盖
    isExternal?: (to: To) => boolean;
    // 覆盖 external icon，如果要关闭这个功能，可以传 null
    externalIcon?: ReactNode;
    // className
    className?: string;
    // style
    style?: CSSProperties;
}
