function validarFormulario() {
    var nomeTutor = document.getElementById('nomeTutor').value;
    var dataConsulta = document.getElementById('dataConsulta').value;
    var horaConsulta = document.getElementById('horaConsulta').value;

    // Aqui você pode adicionar validações se necessário, mas vamos apenas mostrar a mensagem de confirmação
    if (nomeTutor && dataConsulta && horaConsulta) {
        var mensagemConfirmacao = document.getElementById('mensagem-confirmacao');
        mensagemConfirmacao.style.display = 'block'; // Mostra a mensagem
        mensagemConfirmacao.innerHTML = 'Consulta agendada com sucesso para ' + 
            nomeTutor + ' no dia ' + dataConsulta + ' às ' + horaConsulta + '.';
        
        // Impede que o formulário seja enviado
        return false; 
    }

    return true; // Retorna true se as validações estiverem corretas
}
