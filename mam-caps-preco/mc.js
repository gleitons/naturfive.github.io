function fGratis() {
    document.getElementById('freteGratis').innerHTML = `<h2 style="background-color: rgb(197, 51, 136); color: white; width: 80%; margin: auto; font-size: 16px; padding: 15px; border-radius: 12px;">EU QUERO MAM CAPS COM FRETE GRÁTIS</h2>`
    setTimeout("fGratis1()",100);
}
function fGratis1() {
    document.getElementById('freteGratis').innerHTML = `<h2 style="background-color: rgb(216, 115, 0); color: white; width: 90%; margin: auto; font-size: 18px; padding: 15px; border-radius: 12px;">EU QUERO MAM CAPS COM FRETE GRÁTIS</h2>`
    setTimeout("fGratis()", 100);
}

function verficadorFMC() {
    const qTempo = document.getElementById('qTempo');
    const infoqTempo = qTempo.options[qTempo.selectedIndex].value;
    console.log(infoqTempo)
    if(infoqTempo == 0) {
        alert('Por favor, preencha todas as informações')
    } else {
        document.getElementById('formCalc').innerHTML = `<h2 style="text-align: center; min-height: 250px; align-items: center; align-content: center; padding-top: 30%;">CALCULANDO...</h2>`
        location.href = "https://ev.braip.com/ref?pv=pro0xgq8&af=afi6jj3pl";
       
    }
    
}