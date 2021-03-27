import React from 'react'

function Header({search, searchChange}) {
    return (
        <div>
            <h1 className="header-text">Dashboard</h1>
            <input className="input-style" type='text' type='search' placeholder='What test are you looking for?' onChange={searchChange}/>
        </div>
    )
}
export default Header;