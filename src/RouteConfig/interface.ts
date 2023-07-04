import {IndexRouteObject, NonIndexRouteObject} from 'react-router-dom';
import {Key, ReactNode} from 'react';
import {BreadcrumbItemType} from 'antd/es/breadcrumb/Breadcrumb';

export interface BreadcrumbMenuItem {
    key?: Key;
    title?: ReactNode;
    label?: ReactNode;
    path?: string;
    href?: string;
}

interface RouteExtra {
    breadcrumb?: ReactNode;
    breadcrumbProps?: BreadcrumbItemType;
    documentTitle?: string;
    documentTitleKey?: string;
}

interface RouteChildren {
    children?: RouteObject[];
}

// eslint-disable-next-line max-len
export type RouteObject = Omit<NonIndexRouteObject, 'children'> & RouteExtra & RouteChildren | IndexRouteObject & RouteExtra;

export type DocumentTitleContext = Record<string, string | undefined>;

export interface PartialRouteMatch {
    params: Record<string, string | undefined>;
    route: {
        path?: string;
    };
}
