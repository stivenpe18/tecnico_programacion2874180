let sumatoriagatos = 0
let sumatoriaperros = 0
let edades_gatos= 0
let edades_perros= 0
while(true) {
let Mascota = prompt("digite el animal: (perro o gato)")
if (Mascota ==="0"){
    break;
} else if (Mascota ==="perro"){
    sumatoriaperros = sumatoriaperros + 1
let edadp = parseInt(prompt("digite la edad del perro"))
    edades_perros=edades_perros+edadp
    } else if (Mascota == "gato") {
        sumatoriagatos++
let edadg = parseInt(prompt("digite la edad del gato"))
    edades_gatos=edades_gatos+edadg
    }
}
document.write("la cantidad de perros es: " + sumatoriaperros+"<br/>")
document.write("la cantidad de gato es: " + sumatoriagatos+"<br/>")
document.write("la sumatoria de todas las edades de los perros es: +" + edades_perros + "<br/>")
document.write("la sumatoria de todas las edades de los gatos es: +" + edades_gatos + "<br/>")

