import { NavLink } from "react-router-dom";
import { TAdminSidebar, TUserPath } from "../types/types";

export const sidebarGenerator = (items: TUserPath[], role: string) => {
    const sidebar = items.reduce((acc: TAdminSidebar[], ele) => {
        if (ele.name && ele.path) {
            acc.push({
                key: ele.name,
                label: <NavLink to={`/${role}/${ele.path}`}>{ele.name}</NavLink>
            })
        };
    
        if (ele.children) {
            acc.push({
                key: ele.name,
                label: ele.name,
                children: ele.children.map(child => ({
                    key: child.name,
                    label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
                }))
            })
        }
    
        return acc;
    }, [])
    return sidebar
};