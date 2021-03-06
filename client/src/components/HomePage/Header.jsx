import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import {
    Container,
    Navbar,
    NavbarBrand,
    NavLink,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import './button.css';
import { useStore } from '../../contextAPI/store/Provider';
import { clear } from '../../contextAPI/actions/LoginAction';
const Header = props => {
    const [dropdownOpen, setOpen] = useState(false);
    const toggle = () => setOpen(!dropdownOpen);
    const [{ isLogged, user }, dispatch] = useStore('');
    function onLogout() {
        dispatch(clear());
    }
    return (
        <header>
            <Navbar color="dark" dark>
                <Container>
                    <NavbarBrand
                        href="/"
                        className="d-flex align-items-center mr-auto"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2"
                        />
                        <a className="navbar-brand" href="/">
                            <img
                                src="https://i.ibb.co/GQVfRg9/Sandwich2-removebg-preview.png"
                                width="50"
                                height="35"
                                className="d-inline-block align-top"
                                alt=""
                                loading="lazy"
                            />
                        </a>
                        <NavLink
                            style={{ color: 'white' }}
                            tag={RouterNavLink}
                            to="/"
                        >
                            {' '}
                            Home{' '}
                        </NavLink>
                        <NavLink
                            style={{ color: 'white' }}
                            tag={RouterNavLink}
                            to="/allrecipespage"
                        >
                            {' '}
                            All Recipes{' '}
                        </NavLink>
                    </NavbarBrand>

                    {isLogged ? (
                        <div className="d-flex align-items-right">
                            <ButtonDropdown
                                isOpen={dropdownOpen}
                                toggle={toggle}
                            >
                                <DropdownToggle caret>
                                    <strong>
                                        {user.name.concat(' ', user.surname)}
                                    </strong>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <a href="/favorites">
                                            <img
                                                src="https://i.ibb.co/rZx71rL/heart.png"
                                                width="20"
                                                height="20"
                                                alt="login"
                                            />{' '}
                                            Favorite Recipes
                                        </a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="/profile" >
                                            <img
                                                src="https://i.ibb.co/zXmyW74/logo.png"
                                                width="20"
                                                height="20"
                                                alt="login"
                                            />{' '}
                                            Profile
                                        </a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                            <Button
                                className="mybutton"
                                color="danger"
                                tag={RouterNavLink}
                                onClick={onLogout}
                                to="/"
                            >
                                <strong> Logout </strong>
                            </Button>
                        </div>
                    ) : (
                        <div className="d-flex align-items-right">
                            <Button
                                className="mybutton"
                                color="success"
                                tag={RouterNavLink}
                                to="/login"
                            >
                                <strong> Login </strong>
                            </Button>
                            <Button
                                className="mybutton"
                                color="success"
                                tag={RouterNavLink}
                                to="/signup"
                            >
                                <strong> SignUp </strong>
                            </Button>
                        </div>
                    )}
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
