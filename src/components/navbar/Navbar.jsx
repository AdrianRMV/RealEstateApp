import { useState } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);

    const user = true;
    return (
        <nav>
            <div className="left">
                <Link to="/" className="logo">
                    <img src="/logo.png" alt="" />
                    <span>ARV RealEstate</span>
                </Link>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Contact</Link>
                <Link to="/">Agents</Link>
            </div>
            <div className="right">
                {user ? (
                    <div className="user">
                        <img
                            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                        <span>John Doe</span>
                        <a className="profile">
                            <div className="notification">3</div>
                            <span>Profile</span>
                        </a>
                    </div>
                ) : (
                    <>
                        <a href="/">Sign in</a>
                        <a href="/" className="register">
                            Sign up
                        </a>
                    </>
                )}
                <div className="menuIcon">
                    <img
                        src="/menu.png"
                        alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />
                </div>
                <div className={open ? 'menu active' : 'menu'}>
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                    <a href="/">Agents</a>
                    <a href="/">Sign in</a>
                    <a href="/">Sign up</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
