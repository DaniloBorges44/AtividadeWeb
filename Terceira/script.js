function inverterTexto() {
    const Texto = document.getElementById('inputText').value.trim();
    const Palavras = Texto.split(/\s+/);
    const Sarvalap = Palavras.reverse();
    const Otxet = Sarvalap.join(' ');
  
    document.getElementById('outputText').value = Otxet;
}