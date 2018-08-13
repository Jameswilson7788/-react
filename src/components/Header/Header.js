import React from 'react'

class Header extends React.Component {
    render () {
        return (
            <div className="header">
                <img src={logo} alt="" />
                <ul>
                    <li>
                        <a href="/shop">商店街</a>
                    </li>
                    <li>
                        <a href="/review">購買紀錄</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header