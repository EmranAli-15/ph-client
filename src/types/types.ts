import { ReactNode } from "react";

export type TAdminSidebar = {
    key: string;
    label: ReactNode;
    children?: TAdminSidebar[]
};

export type TUserPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TUserPath[];
};

export type TPath = {
    path: string,
    element: ReactNode
};