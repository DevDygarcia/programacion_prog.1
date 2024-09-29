// document.getElementById("btn").addEventListener("click", function(e) {

//     e.preventDefault()
   
//     const base = parseFloat (document.getElementById("base").value)
//     const altura = parseFloat (document.getElementById("altura").value)
    
      
//     if (isNaN(base) || isNaN(altura)){
//         alert("Faltan valores o valores no ingresados")
//     }
    
//     const n1 = Number(base)
//     const n2 = Number(altura)
//     const area = (n1 * n2) / 2;
    
//     document.getElementById("resultado").innerText=`El área del triángulo es: ${area}`;

//     console.log("El area del triangulo es: " + area )

// });

document.getElementById("btn1").addEventListener("click", function(e) {

    e.preventDefault()
   
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const fecha = parseFloat(document.getElementById("fecha").value)

  
      
    // if (isNaN(nombre) || isNaN(apellido) ||isNaN(fecha)){
    //     alert("Faltan valores o valores no ingresados")
    // }
     
    const edad = 2024 - fecha;
    
        document.getElementById("resultado2").innerText=`El área del triángulo es: ${nombre} ${apellido} ${edad}`;
 
    console.log(nombre + apellido + edad)

});