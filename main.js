

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact__form__id');

  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevenindo a submissão padrão do formulário
      formValidation(); // Chame a função de validação
  });
});

function formValidation() {
  // Capturando os valores dentro do evento de submit
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  // Regex para validar o formato do e-mail
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Verificando se os campos estão preenchidos
  if (name === '' || email === '' || subject === '' || message === '') {
      console.log('Validação de campos vazios');
      swal.fire({
          icon: 'error',
          title: 'Ooops!',
          text: 'Preencha todos os campos!'
      });
  } else if (!emailPattern.test(email)) {
      console.log('Validação de e-mail inválido');
      swal.fire({
          icon: 'error',
          title: 'Oooops!',
          text: 'Por favor, insira um e-mail válido!',
      });
  } else {
      console.log('Formulário enviado');

      swal.fire({
          icon: 'success',
          title: 'Sucesso!',
          text: 'Formulário enviado com sucesso!'
      }).then(() => {
          // Submeter o formulário manualmente após o alert de sucesso
          document.getElementById('contact__form__id').submit();
      });
  }
}

