document.getElementById('cep').addEventListener('blur', function () {
  let cep = document.getElementById('cep').value;

  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(endereco => {
      document.getElementById('street').value = endereco.logradouro;
      document.getElementById('city').value = endereco.localidade;
      document.getElementById('uf').value = endereco.uf;
      document.getElementById('district').value = endereco.bairro;
      document.getElementById('number').focus();
    });

  //Como era feito na epoca das cavernas...
  // let request = new XMLHttpRequest();
  // request.open('get', `https://viacep.com.br/ws/${cep}/json`);
  // request.onload = function () {
  //     console.log(request.response);
  // };
  // request.send();
});
