document.getElementById('contact__form__id').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nome = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("subject").value.trim();
  const mensagem = document.getElementById("message").value.trim();
  const validaEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (nome === "" || email === "" || assunto === "" || mensagem === "") {
    
    Swal.fire({
      title: "Verifique suas informações!",
      text: "Provavelmente existe um campo vazio.",
      icon: "warning",
      confirmButtonText: 'OK',
      customClass: {
      confirmButton: 'custom-confirm-button',
    }});

  } else if (!validaEmail.test(email)) {
    
    Swal.fire({
      title: "Formato de email inválido!",
      text: "Por favor, utilize um email válido.",
      icon: "error",
      confirmButtonText: 'OK',
      customClass: {
      confirmButton: 'custom-confirm-button',
    }});
    
  } else {
    
    Swal.fire({
      title: "Mensagem enviada!",
      text: "Obrigado pelo contato! Te darei uma resposta em breve.",
      icon: "success",
      confirmButtonText: 'OK',
      customClass: {
      confirmButton: 'custom-confirm-button',
    }}).then(() => {
      document.getElementById('contact__form__id').submit();
      
      // Limpa os campos após o envio da mensagem
      document.getElementById("contact__form__id").reset();
    })
    
  }


});

