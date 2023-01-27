//Array donde metemos los tres datos del ejemplo. Materia, detalle y fecha.
let jugador = [
  {
    pos: 1,
    nom: "Ángel Luis",
    nick: "byRangel",
    pj: 0,
    v: 0,
    d: 0,
    cf: 0,
    cc: 0,
    dt: 0,
    pts: 3,
  },
];

//Función para crear la tabla automaticamente, así puedo luego con una base de datos hacerlo
//autómata (O eso espero)

let crearTabla = function (lista) {
  let stringTabla =
    "<tr><th>Posición</th><th>Nombre</th><th>NICK</th><th>PJ</th><th>V</th><th>D</th><th>CF</th><th>CC</th><th>DT</th><th>PTS</th><tr>";
  for (let elem of lista) {
    let fila = "<tr> <td>";
    fila += elem.pos;
    fila += "</td>";

    fila += "<td>";
    fila += elem.nom;
    fila += "</td>";

    fila += "<td>";
    fila += elem.nick;
    fila += "</td>";

    fila += "<td>";
    fila += elem.pj;
    fila += "</td>";

    fila += "<td>";
    fila += elem.v;
    fila += "</td>";

    fila += "<td>";
    fila += elem.d;
    fila += "</td>";

    fila += "<td>";
    fila += elem.cf;
    fila += "</td>";

    fila += "<td>";
    fila += elem.cc;
    fila += "</td>";

    fila += "<td>";
    fila += elem.dt;
    fila += "</td>";

    fila += "<td>";
    fila += elem.pts;
    fila += "</td>";

    fila += "</tr>";
    stringTabla += fila;
    console.log(stringTabla);
  }
  return stringTabla;
};

//Este es el paso que da el error, a la hora de insertar e intentar enlazarlo
const tablaClasificacion = document.getElementById("tablaClasificacion");
if (tablaClasificacion) tablaClasificacion.innerHTML = crearTabla(jugador);

//window.onload = function cargaPagina;

let change = document.getElementById("lanzarrocas").style.maxWidth.toString
console.log(change)
if(Int(change) < 768){
  change.innerHTML = "Bowler"
}

