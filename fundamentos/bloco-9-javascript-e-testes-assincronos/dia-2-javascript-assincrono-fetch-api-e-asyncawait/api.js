// pratica ex 2;
const functionApi = async () => {
  const Api_Url = 'https://api.coincap.io/v2/assets';
  
  const moedasApi = await fetch(Api_Url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

    return moedasApi;
};

  const functionPegaApi = async () => {
    const moedaFunction = await functionApi();
    
    const moedasList = document.getElementById('moedaContainer');

    moedaFunction.filter((curr) => curr.rank <= 10)
    .forEach((result) => {
      const moedasLi = document.createElement('li');
      const moedaValor = Number(result.priceUsd);

      moedasLi.innerText = `${result.name} (${result.symbol}): ${moedaValor.toFixed(2)}`;
      moedasList.appendChild(moedasLi);
    });
  }


window.onload = () => functionPegaApi();

