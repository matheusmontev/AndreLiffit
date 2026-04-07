/**
 * ==========================================
 * LISTA DE USUÁRIOS
 * ==========================================
 * COMO ATUALIZAR ESTE ARQUIVO:
 * 1. Acesse o Painel de Gerenciamento (admin.html).
 * 2. Adicione ou remova os usuários através da interface visual.
 * 3. Clique em "Gerar Código Atualizado".
 * 4. Copie o bloco de código gerado.
 * 5. Cole substituindo TODO o conteúdo deste arquivo.
 * 6. Salve o arquivo e recarregue a página de login.
 * ==========================================
 */
function fazerLogin() {
    const usuarioDigitado = document
        .getElementById("usuario")
        .value
        .trim()
        .toLowerCase();

    const senhaDigitada = document
        .getElementById("senha")
        .value
        .trim();

    const usuarioEncontrado = LISTA_DE_USUARIOS.find(user =>
        user.usuario.toLowerCase() === usuarioDigitado &&
        user.senha === senhaDigitada
    );

    if (usuarioEncontrado) {
        window.location.href = usuarioEncontrado.link_de_redirecionamento;
    } else {
        alert("Usuário ou senha incorretos!");
    }
}
