let contatinhos = JSON.parse(localStorage.getItem('contatinhos'));

let tableBody = document.getElementById('lista-contatinhos');

function listar() {
    tableBody.innerHTML = '';

    contatinhos.map((contato, id) => {
        tableBody.innerHTML += `
        <tr>
            <td>${contato.client[0]}</td>
            <td>${contato.client[1]}</td>
            <td>${contato.client[2]}</td>
            <td>
                <button class="btn btn-outline-warning">Editar</button>
                <button onclick="excluir(${id})" class="btn btn-outline-danger">Excluir</button>
            </td>
        </tr>
    `;
    });

}

function excluir (id) {
    if (!confirm('Voce tem certeza')) {
        return;
    }

    contatinhos.splice(id, 1);

    localStorage.setItem('contatinhos', JSON.stringify(contatinhos));

    listar();
}

listar();