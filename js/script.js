/**
 * @nickboy code & media - Todos os direitos reservados.
 * Este arquivo é parte de um projeto proprietário. Não é permitido modificar ou redistribuir
 * sem autorização prévia.
 */

/**
 * @nickboy code & media - Todos os direitos reservados.
 */

const csInterface = new CSInterface();

document.addEventListener("DOMContentLoaded", function () {
    const scriptText = document.getElementById("scriptText");
    const lockBtn = document.getElementById("lockBtn");
    const loadBtn = document.getElementById("loadBtn");
    let isEditable = false;

    // Função para alternar o bloqueio de edição
    lockBtn.addEventListener("click", function () {
        isEditable = !isEditable;
        scriptText.readOnly = !isEditable;
        lockBtn.textContent = isEditable ? "🔓" : "🔒";
    });

    // Função para carregar o conteúdo do arquivo .txt
    loadBtn.addEventListener("click", function () {
        // Chamando a função do ExtendScript para abrir o diálogo e pegar o caminho do arquivo
        csInterface.evalScript('openFileDialog()', function (filePath) {
            if (filePath) {
                // Quando o arquivo for selecionado, lemos o conteúdo
                csInterface.evalScript(`readFile("${filePath.replace(/\\/g, "\\\\")}")`, function (content) {
                    if (content) {
                        // Preenche a caixa de texto com o conteúdo do arquivo
                        scriptText.value = content;
                    } else {
                        alert("Erro: Arquivo não encontrado.");
                    }
                });
            } else {
                alert("Nenhum arquivo foi selecionado.");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const aboutBtn = document.getElementById("aboutBtn");
    const aboutModal = document.getElementById("aboutModal");
    const closeModal = document.getElementById("closeModal");

    // Abrir o modal ao clicar no botão de exclamação
    aboutBtn.addEventListener("click", function () {
        aboutModal.style.display = "flex";
    });

    // Fechar o modal ao clicar no "x"
    closeModal.addEventListener("click", function () {
        aboutModal.style.display = "none";
    });

    // Fechar o modal ao clicar fora do conteúdo
    window.addEventListener("click", function (event) {
        if (event.target === aboutModal) {
            aboutModal.style.display = "none";
        }
    });
});
