
function clima() {
    const key = '56d9afe18bea47feb638f299b4fe3409';
    const city = document.getElementById('city').value;
    const ApiUrl = `http://api.weatherbit.io/v2.0/current?city=${city}&key=${key}&include=minutely&lang=pt&units=M`;

    fetch(ApiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro na solicitação da API');
            }
            return response.json();
        })
        .then((data) => {
            const DadosWeather = data.data[0];
            const temperatura = DadosWeather.temp;
            const descricao = DadosWeather.weather.description;
            const humidade = DadosWeather.rh;

            document.getElementById('temperatura').innerText = `Temperatura: ${temperatura}°C`;
            document.getElementById('descricao').innerText = `Condições: ${descricao}`;
            document.getElementById('humidade').innerText = `Umidade: ${humidade}%`;
        })
        .catch(error => {
            console.error('Erro ao buscar dados da API:', error);
            document.getElementById('erro').innerText = `Erro ao buscar dados da API. Verifique se o nome da cidade está correto. Ou limite de uso extrapolado, tente novamente em (300 minutos)`;
        });
};

function Limpar() {
    document.getElementById('erro').innerHTML = ``;
    document.getElementById('temperatura').innerHTML = `Temperatura:`;
    document.getElementById('humidade').innerHTML = `Umidade:`;
    document.getElementById('descricao').innerHTML = `Condições:`;
};
