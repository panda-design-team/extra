import {matchRoutes, useLocation} from 'react-router-dom';
import {BreadcrumbItemType} from 'antd/es/breadcrumb/Breadcrumb';
import {useMemo} from 'react';
import {RouteObject, PartialRouteMatch} from './interface';

// eslint-disable-next-line max-len
const getBreadcrumbItemsFromRoute = (routes: RouteObject[], routeMatches: PartialRouteMatch[] | null): BreadcrumbItemType[] => {
    if (!routeMatches) {
        return [];
    }
    let currentRoutes = routes;
    const items: BreadcrumbItemType[] = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < routeMatches.length; i++) {
        const routeMatch = routeMatches[i];
        const nextRoute = currentRoutes.find(route => route.path === routeMatch.route.path);
        if (!nextRoute) {
            return items;
        }
        if (nextRoute?.breadcrumbProps) {
            items.push(nextRoute.breadcrumbProps);
        }
        else if (nextRoute?.breadcrumb) {
            items.push({title: nextRoute.breadcrumb});
        }
        if (nextRoute?.children) {
            currentRoutes = nextRoute?.children;
        }
        else {
            return items;
        }
    }
    return items;
};

export const useRouteBreadcrumbItems = (routes: RouteObject[]) => {
    const location = useLocation();
    return useMemo(
        () => {
            const routeMatches = matchRoutes(routes, location);
            const items = getBreadcrumbItemsFromRoute(routes, routeMatches);
            return items;
        },
        [location, routes]
    );
};
