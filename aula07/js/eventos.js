let emails = [];

function excluir(email) {
  let indice = emails.indexOf(email);
  emails.splice(indice);

  document.getElementById(email).remove();
}

function cadastrar() {
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;

  if (nome === '' || email === '') {
    alert('nome e email são obrigatórios');
    event.preventDefault();
    return;
  }

  if (emails.includes(email)) {
    alert('email já existe');
    event.preventDefault();
    return;
  }

  document.getElementById('tabela').innerHTML += `
    <tr id="${email}">
      <td>${nome}</td>
      <td>${email}</td>
      <td>
        <button onclick="excluir('${email}')">Excluir</button>
      </td>
    </tr>
  `;

  emails.push(email);

  event.preventDefault();
}
