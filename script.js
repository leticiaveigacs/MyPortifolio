// Variável para rastrear a imagem atual do slider
let count = 1;

// Define a primeira imagem (radio1) como a imagem padrão ao carregar a página
document.getElementById("radio1").checked = true;

// Função que é executada a cada 5 segundos (5000 milissegundos)
setInterval(function(){
    nextImage(); // Chama a função nextImage() para mudar para a próxima imagem
}, 5000);

// Função que avança para a próxima imagem no slider
function nextImage(){
    count++; // Incrementa o contador para passar para a próxima imagem

    // Se o contador exceder o número total de imagens (4), ele é redefinido para 1
    if (count > 10) {
        count = 1;
    }

    // Define o input de radio correspondente à nova imagem como checked
    document.getElementById("radio" + count).checked = true;
}
