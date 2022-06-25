
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
        generatePDF( nome, passport, telefonepaciente, medicoresponsavel, telefone, resultado);
    })

});

async function generatePDF( nome, passport, telefonepaciente, medicoresponsavel, telefone, resultado) {
    const image = await loadImage("Sangue.jpg");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 612, 800);
    pdf.addImage(signatureImage, 'PNG', 200, 720, 300, 60);

    const data = new Date();
    pdf.setFontSize(15);
    var dataFormatada = ("0" + data.getDate()).substr(-2) + "/"
    + ("0" + (data.getMonth() + 1)).substr(-2) + "/" + data.getFullYear();
    pdf.text(dataFormatada, 175, 315);

    pdf.setFontSize(15);
    pdf.text(nome, 175, 233);
    pdf.text(passport, 175, 260);
    pdf.text(telefonepaciente, 175, 290);
    pdf.text(medicoresponsavel, 175, 643);
    pdf.text(telefone, 175, 673);
    pdf.text(resultado, 175, 345);

    const dataMed = new Date();
    pdf.setFontSize(15);
    var dataFormatada = ("0" + dataMed.getDate()).substr(-2) + "/"
    + ("0" + (dataMed.getMonth() + 1)).substr(-2) + "/" + dataMed.getFullYear();
    pdf.text(dataFormatada, 175, 703);


    pdf.setFillColor(0,0,0);

    pdf.save("Resultado "+nome+".pdf");

}

// TESTE GRAVIDEZ
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function testeHemograma() {

    let resultado = getRandomInt(0, 900)

    if (resultado >= 800) {
        document.getElementById("resultado").innerHTML = "Tipo Sanguíneo (A+)";

    } else if (resultado >= 600 && resultado < 700) {
        document.getElementById("resultado").innerHTML = "Tipo Sanguíneo (A-)";

    } else if (resultado >= 500 && resultado < 600) {
        document.getElementById("resultado").innerHTML = "Tipo Sanguíneo (B+)";

    } else if (resultado >= 400 && resultado < 500) {
        document.getElementById("resultado").innerHTML = "Tipo Sanguíneo (B-)";

    } else if (resultado >= 300 && resultado < 400) {
        document.getElementById("resultado").innerHTML = "Tipo Sanguíneo (AB+)";

    } else if (resultado >= 200 && resultado < 300) {
        document.getElementById("resultado").innerHTML = "Tipo Sanguíneo (AB-)";

    } else if (resultado >= 100 && resultado < 200) {
        document.getElementById("resultado").innerHTML = "Tipo Sanguíneo (O+)";

    } else {
        document.getElementById("resultado").innerHTML = "Tipo Sanguíneo (O-)";
    }
}

