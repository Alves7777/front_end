function validar() {
  if (document.getElementById('nome').value === '') {
    // alert('Nome é obrigatório');
    document.getElementById('nome').style.border = '1px solid red';
    document.getElementById('nome').placeholder = 'Nome é obrigatório';

    event.preventDefault();
  }


}

function limparErro() {
  document.getElementById('nome').style.border = '1px solid #DDD';
  document.getElementById('nome').placeholder = 'Nome';
}

document.getElementById('nome').addEventListener('keypress', limparErro);


















function teste() {
  document.getElementById('erro').style.display = 'block';
}

function fecharErro() {
  document.getElementById('erro').style.display = 'none';
}
