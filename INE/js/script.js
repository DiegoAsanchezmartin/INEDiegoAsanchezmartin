let persona= {
    nombre: "Diego Aldair",
    apellidoP:"Sanchez",
    apellidoM:"Martin",
    domicilio:"Andador sucio MZ123 LT4",
    clavelec:"DIEG09923812",
    curp:"CURP SAMD951203HQRNRG01",
    estado:"ESTADO 23",
    municipio:"MUNICIPIO 004",
    seccion:"SECCION 0257",
    localidad:"LOCALIDAD 0001",
    emision:"EMISIÓN 2014",
    vigencia:"VIGENCIA 2024",
    registro:"AÑO DE REGISTRO 2014 00",
    fechaN:"03/12/1995",
    sexo:"H",
    fotos1:"assets/escudo.png",
    fotos2:"assets/inefoto.jpeg",
}


let domicilio = persona['domicilio'];
let nombre = persona['nombre'];
let apellidoP = persona['apellidoP'];
let apellidoM = persona['apellidoM'];
let clavelec = persona['clavelec'];
let curp = persona['curp'];
let estado = persona['estado'];
let municipio = persona['municipio'];
let seccion = persona['seccion'];
let local = persona['localidad'];
let emision = persona['emision'];
let vigencia = persona['vigencia'];
let registro = persona['registro'];
let fechaN = persona['fechaN'];
let sexo = persona['sexo'];
let fotos1 = persona['fotos1'];
let fotos2 = persona['fotos2'];




let foto2 = document.getElementById("fot2");
foto2.src = fotos1;
let foto = document.getElementById("fot");
foto.src = fotos2;
let foto3 = document.getElementById("fot3");
foto3.src = fotos2;
document.getElementById("domicilio").innerHTML = domicilio;
document.getElementById("papellido").innerHTML = apellidoP;
document.getElementById("sapellido").innerHTML = apellidoM;
document.getElementById("nombre").innerHTML = nombre;
document.getElementById("curp").innerHTML = curp;
document.getElementById("nacimiento").innerHTML = fechaN;
document.getElementById("sexo").innerHTML = sexo;
document.getElementById("clave").innerHTML = clavelec;
document.getElementById("registro").innerHTML = registro;
document.getElementById("estado").innerHTML = estado;
document.getElementById("municipio").innerHTML = municipio;
document.getElementById("localidad").innerHTML = local;
document.getElementById("seccion").innerHTML = seccion;
document.getElementById("emision").innerHTML = emision;
document.getElementById("vigencia").innerHTML = vigencia;