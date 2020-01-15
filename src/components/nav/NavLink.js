import React from 'react';
import { Link } from '@reach/router';
const NavLink = ( props ) => {
    return (
        <Link
            {...props}
            getProps={({ isCurrent }) => {
                return {
                    style: {
                        color: isCurrent ? 'rgb()' : 'green',
                        fontWeight: isCurrent ? 900 : 300,
                        textDecoration: 'none',
                        padding: isCurrent ? '4%' : '2%'
                    }
                }
            }}
            className="nav-link"
        />
    )
}
export default NavLink;