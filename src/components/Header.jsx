import React from "react";
import './Header.css';

export default({black}) =>{
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/736x/b2/a0/29/b2a029a6c2757e9d3a09265e3d07d49d.jpg" alt="Usuário"/>
                </a>
            </div>
        </header>
    );
}