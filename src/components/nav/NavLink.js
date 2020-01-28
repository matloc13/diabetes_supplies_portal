import React from 'react';
import { Link } from '@reach/router';
import './../../scss/variable.scss'
const NavLink = ( props ) => {
    return (
        <Link
            {...props}
            getProps={({ isCurrent }) => {
                return {
                    style: {
                        color: isCurrent ? 'rgb(240, 226, 204)' : 'rgb(194, 226, 198)',
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