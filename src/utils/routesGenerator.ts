import { TPath, TUserPath } from "../types/types";

export const routeGenerator = (items:TUserPath[]) => {
    const routes = items.reduce((acc: TPath[], ele) => {
        if (ele.path && ele.element) {
            acc.push({
                path: ele.path,
                element: ele.element
            });
        };
        if (ele.children) {
            ele.children.forEach(child => {
                acc.push({
                    path: child.path!,
                    element: child.element
                });
            });
        };

        return acc;
    }, []);

    return routes
}