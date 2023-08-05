//Seu JavaScript de validação aqui
document.addEventListener('DOMContentLoaded', () => {
    const camposDoFormulario = document.querySelectorAll('[required]');
    const formulario = document.querySelector('[data-formulario]');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        let formValido = true;

        camposDoFormulario.forEach((campo) => {
            const valorCampo = campo.value.trim();

            if (!valorCampo) {
                mostrarErro(campo, 'Campo obrigatório');
                formValido = false;
            } else {
                esconderErro(campo);
            }
        });

        const nomeUsuario = formulario.elements['nome'].value.trim();
        if (nomeUsuario.length < 3) {
            mostrarErro(formulario.elements['nome'], 'Nome de usuário muito curto (mínimo 3 caracteres)');
            formValido = false;
        }

        if (formValido) {
            // Aqui você pode enviar o formulário ou executar outras ações quando o formulário é válido.
            // Por exemplo: formulario.submit();
        }
    });

    function mostrarErro(campo, mensagem) {
        const divErro = campo.nextElementSibling;

        if (divErro && divErro.classList.contains('erro-campo')) {
            divErro.textContent = mensagem;
        } else {
            const divErro = document.createElement('div');
            divErro.className = 'erro-campo';
            divErro.textContent = mensagem;
            campo.insertAdjacentElement('afterend', divErro);
        }
    }

    function esconderErro(campo) {
        const divErro = campo.nextElementSibling;

        if (divErro && divErro.classList.contains('erro-campo')) {
            divErro.remove();
        }
    }
});
