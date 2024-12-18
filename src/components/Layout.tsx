import * as React from "react"
import {Link} from "gatsby"
import Contacts from "./Contacts/Contacts";

interface LayoutProps {
    location: {
        pathname: string
    };
    title: string,
    children: React.ReactNode
}


const Layout: React.FC<LayoutProps> = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath
    let header

    if (isRootPath) {
        header = (
            <h1 className="main-heading">
                <Link to="/">{title}</Link>
            </h1>
        )
    } else {
        header = (
            <Link className="header-link-home" to="/">
                {title}
            </Link>
        )
    }

    return (
        <>
            <div className="global-wrapper" data-is-root-path={isRootPath}>
                <header className="global-header">{header}</header>
                <main>{children}</main>
            </div>
            <footer>
                <Contacts/>
                <span className="credits">© {new Date().getFullYear()}, Built with  <a
                    href="https://www.gatsbyjs.com">Gatsby</a></span>
            </footer>
        </>

    )
}

export default Layout
