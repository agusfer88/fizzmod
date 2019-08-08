//SuperClass
function Persona(nombre, edad) {
  //Atributos de configuracion de propiedades de objetos:
  //value - writable - configurable - enumerable
  //Object.defineProperty()
  //Object.defineProperties()
  //Object.create()

  //this.nombre = nombre;
  Object.defineProperty(this, "nombre", {
    value: nombre,
    writable: false
  });

  this.edad = edad;
  this.saludar = function() {
    console.log(`Hola soy ${this.nombre}`);
  };
}
//Instancia.__proto__ = = = Class.prototype
let juan = new Persona("Juan", 30);
let ana = new Persona("ana", 30);

//Subclase

function Empleado(sueldo) {
  this.sueldo = sueldo;

  //COMPOSICIOM
  Persona.apply(this, [nombre, edad]);
  Empleado.prototype.trabajar = function() {
    console.log("trabajar como una vaca");
  };
}
//Herencia
// Subclass.prototype = Object.create(SuperClass.prototype)
// Subclass.prototype.constructor = Subclass
Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;
let pedro = new Empleado(1);
