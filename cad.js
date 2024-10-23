
    function enviarFormulario() {
        // Aqui você pode adicionar qualquer lógica para enviar os dados para o servidor, se necessário.
        
        // Limpar o formulário
        document.getElementById('formVoluntario').reset();

        // Mostrar a mensagem de sucesso
        document.getElementById('mensagemSucesso').style.display = 'block';
        return false; // Previne o envio real do formulário
    }