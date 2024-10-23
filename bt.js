function enviar() {
    const nome = document.querySelector('input[name="nome"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensagem = document.querySelector('textarea[name="mensagem"]').value;

    // Alerta para testar se os dados estão sendo coletados
    alert(`Nome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}\nMensagem enviada!`);
}
