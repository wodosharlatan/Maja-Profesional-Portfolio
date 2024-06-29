import React from "react";

export default function BackEndModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div class="services__modal">
        <div class="services__modal-content">
          <h4 class="services__modal-title">
          Doučovaní <br /> Informatiky
          </h4>
          <i onClick={onClose} class="uil uil-times services__modal-close"></i>

          <ul class="services__modal-services grid">
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>Práce s windows</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>Jednoduché i pokročilé prezentace</p>
            </li>
            <li class="services__modal-service">
              <i class="uil uil-check-circle services__modal-icon"></i>
              <p>Excel, Wor d i Powerpoint</p>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
}
