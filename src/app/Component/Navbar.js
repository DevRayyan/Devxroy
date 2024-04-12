'use client'
import Link from 'next/link';

import { useEffect, useRef, useState } from 'react';
const Navbar = () => {
    const [isNavActive, setIsNavActive] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    const searchBoxRef = useRef(null);
    const searchBoxInputRef = useRef(null);
    const searchDropdownRef = useRef(null);

    const toggleNav = () => {
        setIsNavActive(prevState => !prevState);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            closeAll();
        } else if (e.ctrlKey && e.key === "/") {
            openSearchBox();
        } else if (e.ctrlKey && e.key === "ArrowUp") {
            openNav()
        }
    };

    const handleClickOutside = (event) => {
        if (
            searchDropdownRef.current &&
            !searchDropdownRef.current.contains(event.target) &&
            searchBoxRef.current &&
            !searchBoxRef.current.contains(event.target)
        ) {
            closeSearchBox();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const openSearchBox = () => {

        setActiveTab(1)
        setIsNavActive(false);
        setIsSearchActive(true);
        searchBoxRef.current.focus();
        searchBoxInputRef.current.focus();
    };
    const openNav = () => {
        setIsSearchActive(false);
        setIsNavActive(true);
    };

    const closeSearchBox = () => {
        setIsSearchActive(false);
        searchBoxRef.current.blur();
        searchBoxInputRef.current.blur();
    };

    const closeAll = () => {
        setIsNavActive(false);
        closeSearchBox();
    };


    useEffect(() => {
        const handleSearchBoxKeyDown = (e) => {
            if (isSearchActive && e.ctrlKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
                e.preventDefault();
                const tabs = Array.from(searchDropdownRef.current.querySelectorAll('.search-nav-tabs'));
                const currentIndex = tabs.findIndex(tab => tab.classList.contains('active'));
                let nextIndex = currentIndex + (e.key === "ArrowLeft" ? -1 : 1);
                if (nextIndex < 0) nextIndex = tabs.length - 1;
                if (nextIndex >= tabs.length) nextIndex = 0;
                setActiveTab(nextIndex + 1);
            }
        };

        searchBoxInputRef.current.addEventListener('keydown', handleSearchBoxKeyDown);

    }, [isSearchActive]);


    return (
        <nav id="hero-nav">
            <ul className="hero-nav-ul flex flex-col sm:flex-row justify-between ">
                <li className="nav-socials-container invisible lg:visible lg:flex">
                    <div className="nav-socials">
                        {/* <Link href="/"><i className="fa-brands fa-twitter"></i></Link> */}
                        {/* <Link href="/"><i className="fa-brands fa-facebook-f"></i></Link> */}
                        <Link href="/"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="/"><i className="fa-brands fa-github"></i></Link>
                        <Link href="/"><i className="fa-brands fa-linkedin"></i></Link>
                    </div>
                    <p>Social Conectivity Via.</p>
                </li>
                <li className="nav-logo absolute left-1/2 sm:left-7 text-center sm:text-left lg:text-center lg:left-1/2 top-1/2 transform  -translate-x-1/2 sm:-translate-x-0 lg:-translate-x-1/2 -translate-y-1/2">
                    <h1>Dev<span>X</span>roy</h1>
                    <p>The potential is unstoppable.</p>
                </li>
                <li className="nav-right-wrapper pt-20 sm:pt-3">
                    <div className={`search-container  ${isNavActive ? 'active' : ''}`} style={{ marginRight: isNavActive ? 'clamp(40px, 3.1vw, 3.1vw)' : '0', transition: 'margin 0s' }}>
                        <div ref={searchBoxRef} className={`search-toggler ${isSearchActive ? 'active' : ''}`} >
                            <input onClick={openSearchBox} id="search-box" ref={searchBoxInputRef} type="text" placeholder="Ctrl + / to focus" />
                            <button className='mr-2 sm:mr-auto'><i className="fa-regular fa-magnifying-glass "></i></button>
                        </div>
                        <div className="search-results" ref={searchDropdownRef}>
                            <div className="search-switcher">
                                <button onClick={() => setActiveTab(1)} className={activeTab === 1 ? 'active' : ''}>All results<span>7</span></button>
                                <button onClick={() => setActiveTab(2)} className={activeTab === 2 ? 'active' : ''}>Projects<span>3</span></button>
                                <button onClick={() => setActiveTab(3)} className={activeTab === 3 ? 'active' : ''}>Pages<span>4</span></button>
                                <div id="line"></div>
                            </div>
                            <div className="search-nav-tabs-container">
                                <ul className={`search-nav-tabs ${activeTab === 1 ? 'active' : ''}`} id="tab1">
                                    <li className="proj-tab"><Link href="/showcase"><i className="fa-regular fa-folder"></i> E-COMMERCE PROJECTs</Link></li>
                                    <li className="proj-tab"><Link href="/showcase"><i className="fa-regular fa-folder"></i> FRONTEND PROJECTs</Link></li>
                                    <li className="proj-tab"><Link href="/showcase"><i className="fa-regular fa-folder"></i> WEB/LinkPP DESIGNING</Link></li>
                                    <li className="pages-tab"><Link href="/"><i className="fa-regular fa-file"></i> Home</Link></li>
                                    <li className="pages-tab"><Link href="/"><i className="fa-regular fa-file"></i> About Us</Link></li>
                                    <li className="pages-tab"><Link href="/showcase"><i className="fa-regular fa-file"></i> Showcase</Link></li>
                                    <li className="pages-tab"><Link href="/"><i className="fa-regular fa-file"></i> Contact Us</Link></li>
                                </ul>
                                <ul className={`search-nav-tabs ${activeTab === 2 ? 'active' : ''}`} id="tab2">
                                    <li className="proj-tab"><Link href="/showcase"><i className="fa-regular fa-folder"></i> E-Commerce Projects</Link></li>
                                    <li className="proj-tab"><Link href="/showcase"><i className="fa-regular fa-folder"></i> Frontend Projects</Link></li>
                                    <li className="proj-tab"><Link href="/showcase"><i className="fa-regular fa-folder"></i> Web/App Designing</Link></li>
                                </ul>
                                <ul className={`search-nav-tabs ${activeTab === 3 ? 'active' : ''}`} id="tab3">
                                    <li className="pages-tab"><Link href="/"><i className="fa-regular fa-file"></i> Home</Link></li>
                                    <li className="pages-tab"><Link href="/"><i className="fa-regular fa-file"></i> About Us</Link></li>
                                    <li className="pages-tab"><Link href="/showcase"><i className="fa-regular fa-file"></i> Showcase</Link></li>
                                    <li className="pages-tab"><Link href="/"><i className="fa-regular fa-file"></i> Contact Us</Link></li>
                                </ul>
                            </div>
                            {/* <div className="search-nav-footer"> */}
                            {/* <div>
                                    <i className="fa-solid fa-arrow-left"></i> + Ctrl + <i className="fa-solid fa-arrow-right"></i>
                                </div> */}
                            {/* <div>Search results found: <span>02</span></div> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="nav-toggler">
                        <div className={`nav-collapsed ${isNavActive ? 'active' : ''}`}>
                            <div className="inner-nav">
                                <div className="inner-nav-head">Navigation Links</div>
                                <div className="inner-nav-text">
                                    <h1>Navigation Bar Opening Controls.</h1>
                                    <p>Simply press these keys to easily open the navigation bar And easily closed with escape (esc) key.</p>
                                    <div className="inner-nav-keys">
                                        <div className="keys">
                                            <div>Open</div>
                                            <span>ctrl</span>
                                            <span><i className="fa-solid fa-arrow-up"></i></span>
                                        </div>
                                        <span className="divider"></span>
                                        <div className="keys">
                                            <div>Close</div>
                                            <span>esc</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`inner-nav-content ${isNavActive ? 'animate' : ''}`}>
                                    <Link href={'/'} className="inner-nav-item" style={{ '--delay': '.1s' }}>
                                        <div className="img-shades"></div>
                                        <img height="150%" src="./img/hero-bg.png" alt="home page" />
                                        <span>Home</span>
                                    </Link>
                                    <Link href={'/showcase'} className="inner-nav-item" style={{ '--delay': '.2s' }}>
                                        <div className="img-shades"></div>
                                        <img height="100%" src="./img/about-transformed.jpeg" alt="showcase page" />
                                        <span>Showcase</span>
                                    </Link>
                                    <div className="inner-nav-item" style={{ '--delay': '.3s' }}>
                                        <div className="img-shades"></div>
                                        <img height="100%" src="./img/content-w.webp" alt="article page" />
                                        <span>Articles</span>
                                    </div>
                                    <div className="inner-nav-item" style={{ '--delay': '.4s' }}>
                                        <div className="img-shades"></div>
                                        <img height="100%" src="./img/proj.png" alt="showcase page" />
                                        <span>Showcase</span>
                                    </div>
                                    <div className="inner-nav-item " style={{ '--delay': '.5s' }}>
                                        <div className="img-shades"></div>
                                        <img height="100%" src="./img/achieve.jpeg" alt="achievement page" />
                                        <span>Achievements</span>
                                    </div>
                                    <div className="inner-nav-item" style={{ '--delay': '.6s' }}>
                                        <div className="img-shades"></div>
                                        <img height="100%" src="./img/web-developers.jpg" alt="about page" />
                                        <span>Skill Specs</span>
                                    </div>
                                    <div className="inner-nav-item" style={{ '--delay': '.7s' }}>
                                        <div className="img-shades"></div>
                                        <img height="100%" src="./img/contactus.jpg" alt="contact page" />
                                        <span>Contact Me</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={toggleNav}><i className="fa-solid fa-grid-2"></i></button>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar