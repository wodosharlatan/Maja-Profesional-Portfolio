import { React, useState, useEffect } from 'react';

export default function Header() {

    const [selectedTheme, setSelectedTheme] = useState(localStorage.getItem('selected-theme'));
    const [selectedIcon, setSelectedIcon] = useState(localStorage.getItem('selected-icon'));
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
        document.getElementById('theme-button').classList[selectedIcon === 'uil-moon' ? 'add' : 'remove']('uil-sun');

        const handleScroll = () => {
            const nav = document.getElementById('header');
            if (window.scrollY >= 200) {
                nav.classList.add('scroll-header');
            } else {
                nav.classList.remove('scroll-header');
            }

            scrollActive();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, [selectedTheme, selectedIcon]);

    const ChangeTheme = () => {
        document.body.classList.toggle('dark-theme');
        document.getElementById('theme-button').classList.toggle('uil-sun');
        const updatedSelectedTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const updatedSelectedIcon = document.getElementById('theme-button').classList.contains('uil-sun') ? 'uil-sun' : 'uil-moon';
        setSelectedTheme(updatedSelectedTheme);
        setSelectedIcon(updatedSelectedIcon);
        localStorage.setItem('selected-theme', updatedSelectedTheme);
        localStorage.setItem('selected-icon', updatedSelectedIcon);
    };

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };
    
    const handleClose = () => {
        setMenuOpen(false);
    };

    function scrollActive(){
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
            }
        });
    }   

    return (
        <>
            {/*==================== HEADER ====================*/}
            <header class="header" id="header">
                <nav class="nav container">
                    <a href="#" class="nav__logo">Mája</a>

                    <div class={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
                        <ul class="nav__list grid">
                            <li class="nav__item" onClick={handleClose}>
                                <a href="#home" class="nav__link active-link">
                                    <i class="uil uil-home nav__icon"></i> Domů
                                </a>
                            </li>

                            <li class="nav__item" onClick={handleClose}>
                                <a href="#about" class="nav__link">
                                    <i class="uil uil-user nav__icon"></i> O mě
                                </a>
                            </li>

                            <li class="nav__item" onClick={handleClose}>
                                <a href="#skills" class="nav__link">
                                    <i class="uil uil-file-alt nav__icon"></i> Dovednosti
                                </a>
                            </li>

                            <li class="nav__item" onClick={handleClose}>
                                <a href="#services" class="nav__link">
                                    <i class="uil uil-briefcase-alt nav__icon"></i> Služby
                                </a>
                            </li>

                            <li class="nav__item" onClick={handleClose}>
                                <a href="#portfolio" class="nav__link">
                                    <i class="uil uil-scenery nav__icon"></i>Recenze
                                </a>
                            </li>

                        </ul>
                        <i class="uil uil-times nav__close nav__icon" id="nav-close" onClick={handleClose}></i>
                    </div>

                    <div class="nav__btns">
                        {/* Theme Change Button */}
                        <i class="uil uil-moon change-theme" id="theme-button" onClick={ChangeTheme}></i>

                        <div class="nav__toggle" id="nav-toggle" onClick={handleToggle}>
                            <i class="uil uil-apps nav__icon"></i>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}