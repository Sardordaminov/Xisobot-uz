import React from 'react'
import { useRoutes } from 'react-router-dom';
import { Home, Error, Login, Dashboard, Mentors } from './pages'

// export const Routes = () => {
//     const token = localStorage.getItem("access");
//     const isAuthorized = React.useMemo(() => Boolean(token), [token]);
//     const PrivateRoute = [
//         {   
//             children: [
//                 { path: "/dashboard", element: <Dashboard /> },
//                 { path: "/mentors", element: <Mentors /> },
//                 { path: "/*", element: <Error /> },
//             ],
//         },
//     ];
//     const PublicRoute = [
//         {
//             children: [
//                 { path: "/", element: <Home /> },
//                 { path: "/login", element: <Login /> },
//                 { path: "/*", element: <Error /> },
//             ],
//         },
//     ];
//     return useRoutes(isAuthorized ? (PublicRoute) : (PrivateRoute));
// }
export const Routes = () => {
    const token = localStorage.getItem("access");
    const isAuthorized = React.useMemo(() => Boolean(token), [token]);
    const PrivateRoute = [
        {
            children: [
                { path: "/", element: <Dashboard /> },
                { path: "/mentors", element: <Mentors /> },
                { path: "/*", element: <Error /> },
            ],
        },
    ];

    const PublicRoute = [
        {
            children: [
                { path: "/", element: <Home /> },
                { path: "/login", element: <Login /> },
                { path: "/*", element: <Error /> },
            ],
        },
    ];

    return useRoutes(isAuthorized ? PrivateRoute : PublicRoute);
};
