export class clases {
    //las variables no tienen tipo al declararlas en js
    nombre
    // es quien recibe los parametros que se envian a la clase
    constructor(nombre) {
        this.nombre = nombre
        console.log("Hola ", nombre);
    }

    despedida(nombre) {
        console.log(`adios${nombre}`)
    }
}

//herencia
class padre {
    casa() {
        console.log("tengo una casa")
    }
}

//herencia con super: es una manera de usar las variables del padre desde el hijo
export class superPadre {
    nombre = "pepito"

}

export class superHijo extends superPadre {
    constructor(nombre) {
        super(nombre)
    }
    metodo() {
        console.log("super hijo ", this.nombre)
    }
}


//la clase hijo es una extencion del padre, lo cual sa acceso a los metodos del padre
export class hijo extends padre {

}

// polimorfismo
export class animal {
    haceRuido() {
        console.log("grune")
    }
}

export class perro extends animal {
    haceRuido() {
        console.log("ladra")
    }
}

export class gato extends animal {
    haceRuido() {
        console.log("maulla")
    }
}

//callBack
export class emisor {
    imprimir() {
        console.log("metodo del emisor")
    }
}

export class receptor {
    callback
    constructor(callback) {
        this.callback = callback
    }

    imprimirCallback() {
        this.callback.imprimir()
    }
}

