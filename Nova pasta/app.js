document.getElementById('buscarDados').addEventListener('click', buscarDadosAPI);


function buscarDadosAPI() {

    fetch('https://b3c5-177-91-39-198.ngrok-free.app/api/user', { method: "GET", headers: { "ngrok-skip-browser-warning": true } })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            response.json().then(resp => {

                console.log('Dados recebidos:', resp);
                const exibirDados = document.getElementById('exibirDados');
                exibirDados.innerHTML = `
                     <h3>Nome: ${resp.name}</h3>
                     <h3>Idade: ${resp.age}</h3>
                     <h3>Sobre mim: ${resp.aboutme}</h3>
                    `;

            });
        })
}