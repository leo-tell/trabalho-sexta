let pacientes = [
    { id: 1, nome: "Kiko Silva", email: "kiko@exemplo.com", telefone: "(55) 9999-9999" },
    { id: 2, nome: "Maria Gomes", email: "mariagomes@exemplo.com", telefone: "(55) 8888-8888" },
    { id: 3, nome: "Pedro Oliveira", email: "pedrooliveira@exemplo.com", telefone: "(55) 7777-7777" }
];

function buscarPacientes(filtro = '') {
    const tabelaPacientes = document.querySelector('.tabela-pacientes tbody');
    tabelaPacientes.innerHTML = '';

    const pacientesFiltrados = pacientes.filter(paciente => 
        paciente.nome.toLowerCase().includes(filtro.toLowerCase()) || 
        paciente.email.toLowerCase().includes(filtro.toLowerCase()) || 
        paciente.telefone.includes(filtro)
    );

    pacientesFiltrados.forEach(paciente => {
        const linha = tabelaPacientes.insertRow();

        const celulaNome = linha.insertCell();
        celulaNome.textContent = paciente.nome;

        const celulaEmail = linha.insertCell();
        celulaEmail.textContent = paciente.email;

        const celulaTelefone = linha.insertCell();
        celulaTelefone.textContent = paciente.telefone;

        const celulaAcoes = linha.insertCell();
        celulaAcoes.classList.add('acoes');

        const linkDetalhes = document.createElement('a');
        linkDetalhes.textContent = "Detalhes";
        linkDetalhes.setAttribute('href', `paciente.html?id=${paciente.id}`);
        celulaAcoes.appendChild(linkDetalhes);
    });
}

function abrirModalCadastro() {
    const modalCadastro = document.getElementById('modalCadastro');
    modalCadastro.style.display = 'block';
}

function fecharModalCadastro() {
    const modalCadastro = document.getElementById('modalCadastro');
    modalCadastro.style.display = 'none';
}

function salvarNovoPaciente(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;

    const novoPaciente = {
        id: Date.now(),
        nome,
        email,
        telefone
    };

    pacientes.push(novoPaciente);

    fecharModalCadastro();
    buscarPacientes();
}

window.onload = () => {
    document.getElementById('btnNovoPaciente').addEventListener('click', abrirModalCadastro);
    document.querySelector('.modal .fechar').addEventListener('click', fecharModalCadastro);
    document.getElementById('formCadastro').addEventListener('submit', salvarNovoPaciente);

    const inputBusca = document.getElementById('busca');
    inputBusca.addEventListener('input', () => {
        buscarPacientes(inputBusca.value);
    });

    buscarPacientes();
};
