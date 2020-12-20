const criptoSelect = document.querySelector('#criptomonedas');

const obtenerCripto = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);
});




document.addEventListener('DOMContentLoaded', consultarCripto);



function consultarCripto() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then(response => response.json())
        .then(data => obtenerCripto(data.Data))
        .then(criptomonedas => selectCripto(criptomonedas));
}

function selectCripto(criptomonedas) {
    criptomonedas.forEach(cripto => {
        const { FullName, Name } = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        criptoSelect.appendChild(option);

    });
}