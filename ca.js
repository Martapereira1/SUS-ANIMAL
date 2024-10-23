function validarFormulario() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    
    if (!email.includes('@')) {
        alert('Por favor, insira um e-mail válido.');
        return false; // Impede o envio do formulário
    }

    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return false; // Impede o envio do formulário
    }

    // Se tudo estiver correto, mostra uma mensagem de boas-vindas
    alert('Bem-vindo ao SUS Animal! Cadastro realizado com sucesso!'); 
    return true; // Permite o envio do formulário
}