import React from "react";

export default function Footer() {
    return (
        <>
        
            {/* ==================== FOOTER ==================== */}
            <footer class="footer">
                <div class="footer__bg">
                    <div class="footer__container container grid">
                        <div>
                            <h1 class="footer__title">Tom</h1>
                            <span class="footer__subtitle">IT student</span>
                        </div>

                        <ul class="footer__links">
                            <li>
                                <a href="#services" class="footer__link">Services</a>
                            </li>
                            <li>
                                <a href="#portfolio" class="footer__link">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" class="footer__link">Contact</a>
                            </li>
                        </ul>

                        <div class="footer__socials">
                            <a href="https://www.linkedin.com/in/tomáš-bosák" target="_blank"
                                class="footer__social">
                                <i class="uil uil-linkedin-alt"></i>
                            </a>
                            <a href="https://github.com/wodosharlatan" target="_blank" class="footer__social">
                                <i class="uil uil-github-alt"></i>
                            </a>
                            <a href="https://signal.org/" target="_blank" class="footer__social">
                                <i class="uil uil-comment"></i>
                            </a>
                        </div>
                    </div>
                    <p class="footer__copy"> &#169; Tomáš Bosák </p>
                </div>
            </footer>
        </>
    );
}




