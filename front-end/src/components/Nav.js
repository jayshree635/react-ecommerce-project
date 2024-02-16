import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Marquee from './marquee/marquee';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate('/Signup')
    }

    return (
        <div style={{ backgroundColor: 'rgb(54, 73, 83)' }}>
            {
                auth ?
                    <ul className='nav-ul'>
                        <img alt='logo'
                            className='logo'
                            src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/attachment_62981463-e1497633416573.png?auto=format&q=60&fit=max&w=930' />
                        <li><Link to="/">Products</Link></li>
                        <li><Link to="/add">Add Products</Link></li>
                        <li><Link to="/update">Update Products</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link onClick={logout} to="/Signup">Logout({JSON?.parse(auth)?.data?.userName})</Link></li>
                        {/* <li>
                        <Link onClick={logout} to="/Signup">
                            Logout ({auth && auth.data && auth.data.userName})
                        </Link>
                    </li> */}

                    </ul>
                    :
                    <ul className='nav-right'>
                        {/* <Marquee /> */}
                        <li className=''><Link to="/Signup">Signup</Link></li>
                        <li className='nav-right'> <Link to="/Login">Login</Link></li>
                    </ul>
            }

            {/* <li>
                    {auth ? (
                        <li className="conditional-part">
                            <Link onClick={logout} to="/Signup">Logout</Link>
                        </li>
                    ) : (
                        <div><li><Link to="/Signup">Signup</Link></li>
                            <li> <Link to="/Login">Login</Link></li>

                        </div>
                    )}
                </li> */}
        </div>
    )
}

export default Nav