import React from 'react';

function Header() {
    return (  
        <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand " href="#">
            <img style={{ display:'inline-block' ,height:'40px',width:'40px'}} src="https://cdn-icons.flaticon.com/png/128/5973/premium/5973800.png?token=exp=1656754438~hmac=78fba9dc1d77f879fec198bd39e6f1fd" width="30" height="30" class="d-inline-block align-top" alt="" />
            &nbsp;&nbsp;&nbsp; <h2 style={{ display:'inline-block'}}>Gesti <span style={{ color: '#FF6A3D'}}>fy</span></h2>
        </a>
        </nav>
    );
}

export default Header;