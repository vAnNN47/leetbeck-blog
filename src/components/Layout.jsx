import { Link, Outlet } from "react-router-dom";
import './Layout.css';

export const Layout = () => {
    return (
        <div className="layout">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    );
};
