import React from 'react';
import { Link } from '@reach/router';
const NavLink = ( props ) => {
    return (
        <Link
            {...props}
            getProps={({ isCurrent }) => {
                return {
                    style: {
                        color: isCurrent ? 'rgb(135, 150, 70)' : 'rgb(12, 27, 19)',
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