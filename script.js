"use strict";

const form = document.getElementById('appointmentForm');


form.addEventListener('submit', (event) => {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    if (!name || !email || !message) {
        alert('Por favor completa todos los campos.');
        return;
    }

    alert(`Cita agendada con éxito:\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);

    form.reset();
});