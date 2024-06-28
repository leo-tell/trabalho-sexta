document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'pagina-inicial.html';
});

document.getElementById('addConsultaBtn').addEventListener('click', function() {
    const consultaDiv = document.createElement('div');
    consultaDiv.className = 'consulta';
    consultaDiv.innerHTML = `
        <p>Data: <input type="date" name="data"></p>
        <p>Hora: <input type="time" name="hora"></p>
        <p>Paciente: <input type="text" name="paciente"></p>
        <p>WhatsApp: <input type="text" name="whatsapp"></p>
        <p>Email: <input type="email" name="email"></p>
        <button class="salvar">Salvar</button>
        <button class="cancelar">Cancelar</button>
    `;
    document.getElementById('consultas').appendChild(consultaDiv);

    const saveButton = consultaDiv.querySelector('.salvar');
    saveButton.addEventListener('click', function() {
        const data = consultaDiv.querySelector('input[name="data"]').value;
        const hora = consultaDiv.querySelector('input[name="hora"]').value;
        const paciente = consultaDiv.querySelector('input[name="paciente"]').value;
        const whatsapp = consultaDiv.querySelector('input[name="whatsapp"]').value;
        const email = consultaDiv.querySelector('input[name="email"]').value;

        consultaDiv.innerHTML = `
            <p>Data: ${data}</p>
            <p>Hora: ${hora}</p>
            <p>Paciente: ${paciente}</p>
            <p>WhatsApp: <a href="https://wa.me/${whatsapp}" target="_blank">${whatsapp}</a></p>
            <p>Email: <a href="mailto:${email}">${email}</a></p>
            <button class="editar">Editar</button>
            <button class="excluir">Excluir</button>
        `;

        adicionarEventosConsulta(consultaDiv);
    });

    const cancelButton = consultaDiv.querySelector('.cancelar');
    cancelButton.addEventListener('click', function() {
        consultaDiv.remove();
    });
});

function adicionarEventosConsulta(consultaDiv) {
    const editButton = consultaDiv.querySelector('.editar');
    const deleteButton = consultaDiv.querySelector('.excluir');

    editButton.addEventListener('click', function() {
        const data = consultaDiv.querySelector('p:nth-of-type(1)').innerText.split(': ')[1];
        const hora = consultaDiv.querySelector('p:nth-of-type(2)').innerText.split(': ')[1];
        const paciente = consultaDiv.querySelector('p:nth-of-type(3)').innerText.split(': ')[1];
        const whatsapp = consultaDiv.querySelector('p:nth-of-type(4)').innerText.split(': ')[1];
        const email = consultaDiv.querySelector('p:nth-of-type(5)').innerText.split(': ')[1];

        consultaDiv.innerHTML = `
            <p>Data: <input type="date" name="data" value="${data}"></p>
            <p>Hora: <input type="time" name="hora" value="${hora}"></p>
            <p>Paciente: <input type="text" name="paciente" value="${paciente}"></p>
            <p>WhatsApp: <input type="text" name="whatsapp" value="${whatsapp}"></p>
            <p>Email: <input type="email" name="email" value="${email}"></p>
            <button class="salvar">Salvar</button>
            <button class="cancelar">Cancelar</button>
        `;

        const saveButton = consultaDiv.querySelector('.salvar');
        saveButton.addEventListener('click', function() {
            const novaData = consultaDiv.querySelector('input[name="data"]').value;
            const novaHora = consultaDiv.querySelector('input[name="hora"]').value;
            const novoPaciente = consultaDiv.querySelector('input[name="paciente"]').value;
            const novoWhatsapp = consultaDiv.querySelector('input[name="whatsapp"]').value;
            const novoEmail = consultaDiv.querySelector('input[name="email"]').value;

            consultaDiv.innerHTML = `
                <p>Data: ${novaData}</p>
                <p>Hora: ${novaHora}</p>
                <p>Paciente: ${novoPaciente}</p>
                <p>WhatsApp: <a href="https://wa.me/${novoWhatsapp}" target="_blank">${novoWhatsapp}</a></p>
                <p>Email: <a href="mailto:${novoEmail}">${novoEmail}</a></p>
                <button class="editar">Editar</button>
                <button class="excluir">Excluir</button>
            `;

            adicionarEventosConsulta(consultaDiv);
        });

        const cancelButton = consultaDiv.querySelector('.cancelar');
        cancelButton.addEventListener('click', function() {
            consultaDiv.innerHTML = `
                <p>Data: ${data}</p>
                <p>Hora: ${hora}</p>
                <p>Paciente: ${paciente}</p>
                <p>WhatsApp: <a href="https://wa.me/${whatsapp}" target="_blank">${whatsapp}</a></p>
                <p>Email: <a href="mailto:${email}">${email}</a></p>
                <button class="editar">Editar</button>
                <button class="excluir">Excluir</button>
            `;

            adicionarEventosConsulta(consultaDiv);
        });
    });

    deleteButton.addEventListener('click', function() {
        consultaDiv.remove();
    });
}

document.querySelectorAll('.consulta').forEach(adicionarEventosConsulta);
