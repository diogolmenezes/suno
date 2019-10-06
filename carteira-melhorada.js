
NodeList.prototype.map = Array.prototype.map;


recuperarColuna = () => {
    return document.querySelector('div.title').innerText.includes('Dividendos') ? 11 : 10;
}

incluirHeader = () => {
    const coluna = recuperarColuna();
    const header = document.querySelector('#table_1 > thead > tr');
    const titulo = header.insertCell(coluna);
    titulo.innerText = '% até o Teto';
}


incluirDiferencaParaOTeto = () => {
    const coluna = recuperarColuna();
    const linhas = document.querySelectorAll('#table_1 tbody tr:not(#table_15_row_13)')
    linhas.map(linha => {
        const atual = parseFloat(linha.querySelector('td.column-preo-atual').innerText.replace(',', '.'));
        const teto = parseFloat(linha.querySelector('td.column-preo-teto').innerText.replace(',', '.'));
        const potencial = 100 - ((atual / teto) * 100);
        const valor = linha.insertCell(coluna);
        valor.innerText = potencial > 0 ? `${potencial.toFixed(2)} %` : 'NEGATIVO';
    });
}

incluirHeader();
incluirDiferencaParaOTeto();