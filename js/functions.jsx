/**
 * @nickboy code & media - Todos os direitos reservados.
 * Este arquivo é parte de um projeto proprietário. Não é permitido modificar ou redistribuir
 * sem autorização prévia.
 */

/**
 * @nickboy code & media - Todos os direitos reservados.
 */

// Função para abrir o diálogo de arquivo
function openFileDialog() {
    var txtFilter = "*.txt";
    var file = File.openDialog("Selecione um arquivo .txt", txtFilter, false);
    if (file) {
        $.writeln("Arquivo selecionado: " + file.fsName); // Verifica o caminho do arquivo
        return file.fsName;
    }
    return null;
}


// Função para ler o conteúdo do arquivo .txt
function readFile(filePath) {
    var file = File(filePath);
    if (file.exists) {  // Verifica se o arquivo existe
        if (file.open("r")) {
            var content = file.read();
            file.close();
            return content;
        } else {
            return "Erro ao abrir o arquivo: Não foi possível abrir para leitura.";
        }
    } else {
        return "Erro: Arquivo não encontrado.";
    }
}


