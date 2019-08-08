/*funcion Persona(nombre,edad){
    this.nombre = nombre
    this.edad = edad
    Persona.prototype.saludo = function(){}
}
function Emplelado(){
    Persona.call(this.....)
}

*/
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludo() {
    //hay que bindear
  }
}

class Empleado extends Persona {
  constructor(sueldo, nombre, edad) {
    super(nombre, edad);
    this.sueldo = sueldo;
  }
  trabajar() {}
}
