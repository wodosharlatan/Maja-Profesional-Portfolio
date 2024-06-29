import React from "react";

export default function Footer() {
    return (
        <>

            {/* ==================== FOOTER ==================== */}
            <footer class="footer">
                <div class="footer__bg">
                    <div class="footer__container container grid">
                        <div>
                            <h1 class="footer__title">Mája</h1>
                            <span class="footer__subtitle">Učitelka</span>
                        </div>

                        <ul class="footer__links">
                            <li>
                                <a href="#" class="footer__link">Domů</a>
                            </li>
                            <li>
                                <a href="#services" class="footer__link">Služby</a>
                            </li>
                            <li>
                                <a href="#portfolio" class="footer__link">Recenze</a>
                            </li>

                        </ul>

                        <div class="footer__socials">
                            <a href="https://wa.me/420739708473?text=Na%20tuto%20zprávu%20neodpovídejte%2C%20je%20automaticky%20generovaná."
                                target="_blank"
                                class="footer__social">
                                <i class="uil uil-whatsapp"></i>
                            </a>


                            <a href="tel:+420739708473"
                                target="_blank"
                                class="footer__social"
                            >
                                <i class="uil uil-phone-alt"></i>
                            </a>
                        </div>
                    </div>
                    <p class="footer__copy">
                        <a className="footer__social" target="_blank" href="https://bosic.xyz">&#169; Tomáš Bosák</a>
                    </p>
                </div>
            </footer>
        </>
    );
}