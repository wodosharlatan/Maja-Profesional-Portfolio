import React from "react";

export default function FrontEndModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div class="services__modal">
        <div class="services__modal-content">
          <h4 class="services__modal-title">
            Doučovaní <br /> Matematiky
          </h4>
          <i onClick={onClose} class="uil uil-times services__modal-close"></i>

          <ul class="services__modal-services grid">
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>1 až 9 třída</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>Jednoduché i složité rovnice</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>Geometrie</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>Učivo střední školy</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
