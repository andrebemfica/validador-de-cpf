function validaCpf(cpf) {
    if (cpf.length != 11) {
        return false;
    } else {
        let numeros = cpf.substring(0, 9);
        let digitos = cpf.substring(9);

        let soma = 0;
        for (let i = 10; i > 1; i--){
            soma += numeros.charAt(10 - i) * i;
        }

        console.log(soma);

        let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        if(resultado != digitos.charAt(0)) {
            return false;
        }

        console.log(resultado);

        soma = 0;
        numeros = cpf.substring(0, 10);

        for (let k = 11; k > 1; k--){
            soma += numeros.charAt(11 - k) * k;
        }

        console.log(soma);

        resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

        console.log(resultado);

        if(resultado != digitos.charAt(1)) {
            return false;
        }

        return true;
    }
}

function validacao() {
    document.getElementById('cpf_ok').style.display = 'none';
    document.getElementById('cpf_invalido').style.display = 'none';

    let cpf = document.getElementById('cpf_digitado').value;

    let resultadoValidacao = validaCpf(cpf);

    if (resultadoValidacao) {
        document.getElementById('cpf_ok').style.display = 'block';
    } else {
        document.getElementById('cpf_invalido').style.display = 'block';
    }
}