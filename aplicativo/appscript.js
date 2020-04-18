function formataMoeda(numero){
    return numero.toFixed(2).replace(".", ",")
  
  }
  
  function calculaCorrida(){
  
    valortotal = (2 + (inputDistancia.value * 1.4) + (inputTempo.value * 0.26))
  botaoCalcular.innerHTML = ("Valor da corrida: R$ " +formataMoeda(valortotal))
  }