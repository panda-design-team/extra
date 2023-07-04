import {matchRoutes, useLocation} from 'react-router-dom';
import {useMemo} from 'react';
import {DocumentTitleContext, RouteObject, PartialRouteMatch} from './interface';

// eslint-disable-next-line max-len
const getDocumentTitleFromRoute = (routes: RouteObject[], routeMatches: PartialRouteMatch[] | null, context?: DocumentTitleContext): string[] => {
    if (!routeMatches) {
        return [];
    }
    let currentRoutes = routes;
    const items: string[] = [];
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < routeMatches.length; i++) {
        const routeMatch = routeMatches[i];
        const nextRoute = currentRoutes.find(route => route.path === routeMatch.route.path);
        if (!nextRoute) {
            return items;
        }
        let documentTitle = nextRoute?.documentTitle;
        if (nextRoute?.documentTitleKey) {
            const nextDocumentTitle = context?.[nextRoute?.documentTitleKey];
            if (nextDocumentTitle) {
                documentTitle = nextDocumentTitle;
            }
        }
        if (documentTitle) {
            items.push(documentTitle);
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

export const useRouteDocumentTitle = (routes: RouteObject[], context?: DocumentTitleContext) => {
    const location = useLocation();
    return useMemo(
        () => {
            const routeMatches = matchRoutes(routes, location);
            const items = getDocumentTitleFromRoute(routes, routeMatches, context);
            return items.join('-');
        },
        [context, location, routes]
    );
};
