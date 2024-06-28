const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const errorMessage = document.getElementById('errorMessage');

    // Validação de login (substitua com sua lógica de autenticação)
    if (email === 'usuario@exemplo.com' && senha === '123456') {
        window.location.href = 'pagina-inicial.html';
    } else {
        errorMessage.textContent = 'Email e/ou senha inválidos.';
        errorMessage.style.display = 'block';
    }
});
