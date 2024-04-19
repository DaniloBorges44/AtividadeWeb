function calcularDiferencaData() {
  try {
      const dataStr = prompt("Digite a data no formato dd/mm/aaaa: ");
      const [dia, mes, ano] = dataStr.split('/').map(Number);
      const dataEscolhida = new Date(ano, mes - 1, dia);
      const dataAtual = new Date();

      if (dataEscolhida < dataAtual) {
          alert("Data de nascimento inválida. A data deve ser anterior à data atual.");
          return;
      }

      const diferenca = dataEscolhida - dataAtual;
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const anos = Math.floor(dias / 365);
      const meses = Math.floor((dias % 365) / 30);

      alert(`Faltam ${anos} anos, ${meses} meses e ${dias} dias para a data digitada.`);
  } catch (error) {
      alert("Formato de data incorreto. Use o formato dd/mm/aaaa.");
  }
}

calcularDiferencaData();

function definirAparencia() {
  const agora = new Date();
  const hora = agora.getHours();

  if (hora >= 6 && hora < 12) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
  } else if (hora >= 12 && hora < 18) {
      document.body.style.backgroundColor = "yellow";
      document.body.style.color = "black";
  } else if (hora >= 18 && hora < 24) {
      document.body.style.backgroundColor = "darkgray";
      document.body.style.color = "white";
  } else {
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
  }
}

definirAparencia();