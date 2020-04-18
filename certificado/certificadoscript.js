function gerar(){
    for(i=1;i<=1000000;i=i+1){
      html=emitirCertificado(inputNome.value)
    }
    
    listaLink=[
      "https://codepen.io/adelino-py/pen/WNvqGLJ",
      "https://codepen.io/adelino-py/pen/BaNeBeB",
      "https://codepen.io/adelino-py/pen/abOgRbb",
      "https://codepen.io/adelino-py/pen/ExjzrZy",
      "https://codepen.io/adelino-py/pen/VwLJKEj",
      "https://codepen.io/adelino-py/pen/xxwGrWb",
      "https://codepen.io/adelino-py/pen/ZEbzEVL",
      "https://codepen.io/adelino-py/pen/vYOoemx"      
      
    ]
    
    listaAula=[
      "Cálculo de batidas do coração",
      "Calculadora de aplicativo de transporte",
      "Pokébola",
      "Meu Currículo",
      "Cálculo de IMC",
      "Botão de curtidas infinito",
      "Aplicativo de Transporte",
      "Ficha Médica"
    ]
    j=7
    lista=""
    while(j>=0){
      link=listaLink[j]
      aula=listaAula[j]
      lista=`<li><a href=${link}>${aula}</li>`+lista
      j=j-1
    }
  
    document.body.innerHTML=
        `${html}
          <ol>
              ${lista}
          </ol> `
    //print();
  }