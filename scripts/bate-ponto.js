// calcular bate ponto
function calcularHoras(){
console.log("calculando")
        let entrada = document.getElementById('input-time-1').value;
        let pausa = document.getElementById('input-time-2').value;
        let retorno = document.getElementById('input-time-3').value;
        let saida = document.getElementById('input-time-4').value;
        let horas = Math.floor(duracaoEmHoras(entrada,pausa,retorno,saida) / 60);
        console.log("horas trabalhadas")
        console.log(horas)
        //document.querySelector("[name='resultado']").innerHTML = horas;
        document.getElementById('result').innerHTML = horas.toString();



}

function criaItem2(){
const fruits = ["Banana", "Orange", "Mango"];

// Create a document fragment:
const dFrag = document.createDocumentFragment();

// Add li elements to the fragment:
for (let x in fruits) {
  const li = document.createElement('li');
  li.textContent = fruits[x];
  dFrag.appendChild(li);
}

// Add fragment to a list:
document.getElementById('lista').appendChild(dFrag);
}
function criaItem(){
//
// Criando o terceiro elemento
//
var novoElem  = document.getElementById('lista');
var texto     = document.createTextNode('terceiro item');
novoElem.appendChild(texto);

const h1 = document.createElement("h1");
const textNode = document.createTextNode("Hello World");
h1.appendChild(textNode);
//
// Recuperando a lista
//
var lista = document.getElementsByTagName('lista')[0];

//
// Recuperando os itens
//
var itens = document.getElementById('li');

//
// Inserindo com insertBefore()
//
//lista.insertBefore(novoElem, itens[0]);
        console.log("criando item")
}

function converterParaMinutos(horario) {
    // divide a string em duas partes, separado por dois-pontos, e transforma em número
    let [hora, minuto] = horario.split(':').map(v => parseInt(v));
    if (!minuto) { // para o caso de não ter os minutos
        minuto = 0;
    }
    return minuto + (hora * 60);
}

// calcula a duração total em minutos
function duracaoEmHoras(entrada1, saida1, entrada2, saida2) {
    return (converterParaMinutos(saida1) - converterParaMinutos(entrada1)) + (converterParaMinutos(saida2) - converterParaMinutos(entrada2));
}



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

/**
let signaturePad = null;

window.addEventListener('load', async () => {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let nome = document.getElementById('nome').value;
        let passport = document.getElementById('passport').value;
        let telefonepaciente = document.getElementById('idade').value;
        let medicoresponsavel = document.getElementById('medicoresponsavel').value;
        let telefone = document.getElementById('passaportmedico').value;
        let resultado = document.getElementById('resultado').innerText;
        generatePDF( nome, passport, telefonepaciente, medicoresponsavel, telefone, resultado);
    })

});

async function generatePDF( nome, passport, telefonepaciente, medicoresponsavel, telefone, resultado) {
    const image = await loadImage("Beta3.png");
    const signatureImage = signaturePad.toDataURL();

    const pdf = new jsPDF('p', 'pt', 'letter');

    pdf.addImage(image, 'PNG', 0, 0, 565, 792);
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

    pdf.save("Resultado " + nome + ".pdf");

}
**/