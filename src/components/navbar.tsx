import React from 'react';

interface NavBarProps {
    list: string[]
}

const NavBar:React.FC<NavBarProps> = ({list}) => {
    
    return (
        <div>
            <nav>
                <ul>
                    {list.map((item, index) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;