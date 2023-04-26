function agregaralfomulario(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let selector = document.getElementById("selector").value;
    let nota = document.getElementById("nota").value;
const respuesta = document.getElementById("respuesta")
respuesta.innerHTML = ("")
if(nombre == ""){
alert("debe llenar todos los campos")
document.getElementById("nombre").focus();return}
else
if(apellido == ""){
  alert("debe llenar todos los campos")
  document.getElementById("apellido").focus();return }
else
if(telefono== ""){
  alert("debe llenar todos los campos")
  document.getElementById("telefono").focus(); return}
else
if(selector == ""){
  alert("debe llenar todos los campos")
  document.getElementById("selector").focus(); return}
  else
  if(nota == ""){
    alert("debe llenar todos los campos")
    document.getElementById("nota").focus();
  return }

var consulta = [" Hola señor(a)"," ",nombre ," ",apellido," ", "nos comunicaremos atraves de este numero","  ",telefono," ",".unos de nuestros profesionales atendera su caso de tipo" ," ",selector," ", "gracias por preferirnos y tomaremos en cuenta esto:" ," ",nota];

for(let i = 0; i < consulta.length;
  i++)


respuesta.innerHTML += (consulta[i])



document.getElementById("nombre").value = ""
document.getElementById("apellido").value=""
document.getElementById("telefono").value=""
document.getElementById("selector").value=""
document.getElementById("nota").value=""



} 





 
 

  



