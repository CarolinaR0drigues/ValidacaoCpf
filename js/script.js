function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var cpfInput = document.getElementById("cpf");

    // Validar nome
    if (nameInput.value.length < 2 || nameInput.value.length > 50) {
        nameInput.classList.add("invalid");
        nameInput.nextElementSibling.innerHTML = "O nome deve ter entre 2 e 50 caracteres";
        return false;
    } else {
        nameInput.classList.remove("invalid");
        nameInput.classList.add("valid");
        nameInput.nextElementSibling.innerHTML = "";
    }

    // Validar e-mail
    if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("invalid");
        emailInput.nextElementSibling.innerHTML = "Digite um e-mail válido";
        return false;
    } else {
        emailInput.classList.remove("invalid");
        emailInput.classList.add("valid");
        emailInput.nextElementSibling.innerHTML = "";
    }

    // Validar celular
    if (phoneInput.value.length !== 10 && phoneInput.value.length !== 11) {
        phoneInput.classList.add("invalid");
        phoneInput.nextElementSibling.innerHTML = "O celular deve ter 10 ou 11 dígitos";
        return false;
    } else {
        phoneInput.classList.remove("invalid");
        phoneInput.classList.add("valid");
        phoneInput.nextElementSibling.innerHTML = "";
    }

    // Validar CPF
    if (!validateCPF(cpfInput.value)) {
        cpfInput.classList.add("invalid");
        cpfInput.nextElementSibling.innerHTML = "Digite um CPF válido";
        return false;
    } else {
        cpfInput.classList.remove("invalid");
        cpfInput.classList.add("valid");
        cpfInput.nextElementSibling.innerHTML = "";
    }

    return true;
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    var sum = 0;
    for (var i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var mod = sum % 11;
    var digit1 = mod < 2 ? 0 : 11 - mod;
    if (parseInt(cpf.charAt(9)) !== digit1) {
        return false;
    }

    sum = 0;
    for (var j = 0; j < 10; j++) {
        sum += parseInt(cpf.charAt(j)) * (11 - j);
    }
    mod = sum % 11;
    var digit2 = mod < 2 ? 0 : 11 - mod;
    if (parseInt(cpf.charAt(10)) !== digit2) {
        return false;
    }

    return true;
}