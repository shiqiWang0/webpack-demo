import React from 'react'
import { Outlet } from "react-router";
import PageNotFound from "../pages/noFound.jsx"
import Page1 from "../pages/page1.jsx"
import Page2 from "../pages/page2.jsx"
import { Link } from 'react-router-dom'

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/page1">page1</Link>
                    </li>
                    <li>
                        <Link to="/page2">page2</Link>
                    </li>
                    <li>
                        <Link to="/nothing-here">noFound</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </div>
    );
}

export default function getRouters() {
    const routes = [
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: 'page1',
                    element: <Page1></Page1>,
                }, {
                    path: 'page2',
                    element: <Page2></Page2>,
                },
                {
                    path: '*',
                    element: <PageNotFound></PageNotFound>,
                }
            ]
        },

    ]
    return routes;
}
