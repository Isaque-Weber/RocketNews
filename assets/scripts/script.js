function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const form = document.querySelector('#form');

function sendEmail(e) {
    e.preventDefault();
    const email = document.querySelector('#e-mail');

    if (isEmail(email.value)) {
        alert(`Recebemos seu e-mail ${email.value} em nosso banco de dados`);
    } else {
        alert('O e-mail não é válido!');
    }
}

form.addEventListener('submit', sendEmail);