
// GERAR PDF

function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {

    const canvas = document.querySelector("canvas");
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;

    signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let nome = document.getElementById('nome').value;
        let passport = document.getElementById('passport').value;
        let telefonepaciente = document.getElementById('telefonepaciente').value;
        let medicoresponsavel = document.getElementById('medicoresponsavel').value;
        let telefone = document.getElementById('telefone').value;
        let resultado = document.getElementById('resultado').innerText;
        let resultado1 = document.getElementById('resultado1').innerText;
        let resultado2 = document.getElementById('resultado2').innerText;
        let resultado3 = document.getElementById('resultado3').innerText;
        let resultado4 = document.getElementById('resultado4').innerText;
        let resultado5 = document.getElementById('resultado5').innerText;
        let resultado6 = document.getElementById('resultado6').innerText;
        generatePDF( nome, passport, telefonepaciente, medicoresponsavel, telefone, resultado, resultado1, resultado2, resultado3, resultado4, resultado5, resultado6);
    })

});

async function generatePDF( nome, passport, telefonepaciente, medicoresponsavel, telefone, resultado, resultado1, resultado2, resultado3, resultado4, resultado5, resultado6) {
    const image = await loadImage("Hemograma.png");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'a4', true);

    pdf.addImage(image, 'PNG', 0, 0, 600, 850);
    pdf.addImage(signatureImage, 'PNG', 150, 720, 300, 60);

    const data = new Date();
    pdf.setFontSize(15);
    var dataFormatada = ("0" + data.getDate()).substr(-2) + "/"
    + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear();
    pdf.text(dataFormatada, 175, 240);

    pdf.setFontSize(15);
    pdf.text(nome, 175, 160);
    pdf.text(passport, 175, 190);
    pdf.text(telefonepaciente, 175, 215);
    pdf.text(medicoresponsavel, 175, 643);
    pdf.text(telefone, 175, 673);
    pdf.text(resultado, 275, 340);
    pdf.text(resultado1, 275, 370);
    pdf.text(resultado2, 275, 400);
    pdf.text(resultado3, 275, 430);
    pdf.text(resultado4, 275, 463);
    pdf.text(resultado5, 275, 495);
    pdf.text(resultado6, 275, 545);


    const dataMed = new Date();
    pdf.setFontSize(15);
    var dataFormatada = ("0" + dataMed.getDate()).substr(-2) + "/"
    + ("0" + (dataMed.getMonth() + 1)).substr(-2) + "/" + dataMed.getFullYear();
    pdf.text(dataFormatada, 175, 703);


    pdf.setFillColor(0,0,0);

    pdf.save("Resultado "+nome+".pdf");

}

// HEMOGRAMA CIRURGIA
function getHemaciasInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getHemoglobinaInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getHematocritoInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getVghInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getHgmInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getChgmInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRdwInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function testeHemograma() {

    let resultado = getHemaciasInt(4, 6)

    let resultado1 = getHemoglobinaInt(12, 16)

    let resultado2 = getHematocritoInt(38, 50)

    let resultado3 = getVghInt(80, 100)

    let resultado4 = getHgmInt(26, 34)

    let resultado5 = getChgmInt(31, 36)

    let resultado6 = getRdwInt(11, 15)

    resultado = document.getElementById("resultado").innerHTML = resultado;

    resultado1 = document.getElementById("resultado1").innerHTML = resultado1;

    resultado2 = document.getElementById("resultado2").innerHTML = resultado2;

    resultado3 = document.getElementById("resultado3").innerHTML = resultado3;

    resultado4 = document.getElementById("resultado4").innerHTML = resultado4;

    resultado5 = document.getElementById("resultado5").innerHTML = resultado5;

    resultado6 = document.getElementById("resultado6").innerHTML = resultado6;
}

