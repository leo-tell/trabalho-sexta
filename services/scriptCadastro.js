const cadastroForm = document.getElementById('cadastroForm');

cadastroForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (!nome || !email || !senha || !confirmarSenha) {
        alert('Preencha todos os campos obrigatórios.');
        return;
    }

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    alert(`Cadastro realizado com sucesso! Nome: ${nome}, Email: ${email}`);
    window.location.href = 'login.html';
});
