//! navbar component

import React from 'react';

const Navbar = () => {
    return(
        <> //fragment tag
            <Navlink to="/">
                <h1>Logo</h1>
            </Navlink>
            <Bars />
            <NavMenu>
                <Navlink to="/">
                    
                </Navlink>
            </NavMenu>
        </>
    )
};

export default Navbar;
