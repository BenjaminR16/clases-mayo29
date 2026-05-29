import { clases, hijo, animal, gato, perro, superHijo, emisor, receptor } from './clases.js'

const consola = new clases("Benjamin")
consola.despedida("Benjamin")

const herederoHijo = new hijo()

console.log("------------------------------------------- ");
//herencia: la clase hijo tiene acceso a los metodos del padre pero no los cambia
herederoHijo.casa()


//herencia con super
const hijito = new superHijo()
hijito.metodo()

console.log("------------------------------------------- ");
//polimorfismo: aunque las clases hijas compartan el mismo metodo, pueden actuar de manera distinta 
const animales = new animal()
const perrito = new perro()
const michi = new gato()

//esto se hace cuando queremos ejecutar varias clases de un solo ciclo, basicamente se le da el mismo nombre a todas y con un array recorremos 
animales.haceRuido()
perrito.haceRuido()
michi.haceRuido()

console.log("------------------------------------------- ");
//callBack
const recibirC = new receptor(new emisor)

recibirC.imprimirCallback()