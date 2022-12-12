let carrito = [];
let carro = document.getElementById("carrito");
let divAnimal = document.getElementById("divProductos");
let botonVaciar = document.getElementById("vaciar-carrito");
let divTotal = document.getElementById("total-carrito");
let contenedorTarjetas = document.querySelector(".contenedorTarjetas");
let btnAgregarCarrito = document.getElementById("boton");
divTotal.textContent = `Total: 0`;

const usuarios = [
  {
    nombre: "Franco",
    mail: "francorobles@gmail.com",
    pass: "Qwerty123",
  },
  {
    nombre: "Luciana",
    mail: "lucianadelmar@gmail.com",
    pass: "lu",
  },
  {
    nombre: "Leandro",
    mail: "ellean2020@gmail.com",
    pass: "aguanteleandro",
  },
];

const mascotas = [
  {
    nombre: "Royal Cannin",
    especie: "Gatos",
    edad: 1 - 5,
    peso: 3,
    img: "./Img/royal gatos.png",
  },
  {
    nombre: "Royal Canin ",
    especie: "Perros ",
    edad: 1,
    peso: 3,
    img: "./Img/perros.png",
  },
  {
    nombre: "royal Adulto",
    especie: "Gatos",
    edad: 5,
    peso: 10,
    img: "./Img/royal adulto.png",
  },
];

const catalogo = [
  {
    id: 1,
    categoria: "PERROS",
    nombre: "ROTTWEILER",
    codigo: "01",
    precio: 120000,
    imagen: "./Img/ROTTWEILER.webp",
    descripcion_corta: 'Led Smart TV 32"',
    descripcion:
      "La robusta apariencia del Rottweiler es una de las señas de identidad de esta raza. Se puede contemplar que la figura del animal es más larga que alta, en un conjunto donde la musculatura es la principal protagonista, característica que puede comprobarse fácilmente en patas, pecho, tronco y vientre.",
  },
  {
    id: 2,
    categoria: "PERROS",
    nombre: "BULL TERRIER",
    codigo: "p2",
    precio: 100000,
    imagen: "./Img/BULL-TERRIER-TUMBADO.webp",
    descripcion_corta: "Heladera side by side",
    descripcion:
      "a cabeza alargada y puntiaguda y los pequeños ojos que se ven en ella son dos rasgos únicos del Bull Terrier. También destaca el final del hocico, donde se puede contemplar una pequeña trufa de color negro. Las pequeñas orejas triangulares de esta raza siempre se muestran levantadas, permitiendo que el can siempre esté alerta de todo lo que ocurre a su alrededor.",
  },
  {
    id: 3,
    categoria: "PERROS",
    nombre: "DÓBERMAN",
    codigo: "p3",
    precio: 150000,
    imagen: "./Img/DOBERMAN.webp",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "Split PRIA EVOLUTION. Frio-calor de 3001frigorias. 4 capacidades de Frio-calor. Display. Selector de Temperaturas. Eficiencia Energetica: Refrigeracion: A / Calefaccion: C.",
  },
  {
    id: 4,
    categoria: "PERROS",
    nombre: "GOLDEN RETRIEVER",
    codigo: "p4",
    precio: 130000,
    imagen: "./Img/golden-retriever.webp",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "Con un pelaje largo, ondulado y resistente, el Golden Retriever se protege de los rayos de sol en los meses más calurosos del año y del frío en la época invernal. Un cuerpo con una gran fuerza se esconde en este pelaje que puede ir de un color crema a una tonalidad más dorada. La recta posición de la espalda, la gran cola y las ondulaciones del pelo de esta raza, la convierten en una de las más elegantes que existen.",
  },
  {
    id: 5,
    categoria: "PERROS",
    nombre: "AKITA INU",
    codigo: "p5",
    precio: 140000,
    imagen: "./Img/AKITA-INU.webp",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "Si hay algo que destaca en el físico del Akita Inu es su abundante pelaje. Este le refugia del frío invierno y le protege de los rayos del sol cuando estos empiezan a ser potentes. El pelo de esta raza es de un color rojizo con manchas blancas en: la cara, debajo de la mandíbula, el cuello, el pecho, el vientre y la cara inferior de la cola.",
  },
  {
    id: 6,
    categoria: "PERROS",
    nombre: "BOYERO DE BERNA",
    codigo: "p6",
    precio: 180000,
    imagen: "./Img/boyero-de-berna.webp",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "Tal y como se puede contemplar a simple vista, el perro Boyero de Berna es uno de los canes más grandes. La musculatura potente está presente en todas las zonas de su cuerpo, permitiéndole contar con una fuerza que pocas razas pueden igualar. Esto es evidente en el pecho, el vientre, el lomo y las propias patas del animal.",
  },
  {
    id: 7,
    categoria: "PERROS",
    nombre: "DOGO ARGENTINO",
    codigo: "p7",
    precio: 140000,
    imagen: "./Img/dogo-argentino.webp",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "Si hay algo que destaca en el físico del Akita Inu es su abundante pelaje. Este le refugia del frío invierno y le protege de los rayos del sol cuando estos empiezan a ser potentes. El pelo de esta raza es de un color rojizo con manchas blancas en: la cara, debajo de la mandíbula, el cuello, el pecho, el vientre y la cara inferior de la cola.",
  },
  {
    id: 8,
    categoria: "PERROS",
    nombre: "HUSKY SIBERIANO",
    codigo: "p8",
    precio: 130000,
    imagen: "./Img/HUSKY-SIBERIANo.webp",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "El Husky Siberiano entra en la categoría de perros medianos y destaca a simple vista por las similitudes físicas que tiene con los lobos. Este can con un pelaje fino y extenso tiene un porte elegante que pocas razas pueden igualar. El color predominante en este suele ser el negro, aunque también está aceptado el marrón. Las manchas blancas son comunes en pecho, cara, patas y vientre.",
  },
  {
    id: 9,
    categoria: "GATOS",
    nombre: "AMERICAN SHORTHAIR",
    codigo: "g1",
    precio: 80000,
    imagen: "./Img/american-shorthair.jpg",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "El gato americano de pelo corto es activo, atlético y saludable. Es de tamaño mediano, fuerte y musculoso, sin embargo, tiene una complexión ágil: el ancho tórax es soportado por unas patas de longitud mediana y patas redondas. La cola también es de tamaño mediano y tiene una base ancha. ",
  },
  {
    id: 10,
    categoria: "GATOS",
    nombre: "ANGORA TURCO",
    codigo: "g2",
    precio: 80000,
    imagen: "./Img/Angora-turco.jpeg",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "El angora turco, denominado en Turquía Ankara kedisi, llegó incluso a considerarse gato nacional, y no es de extrañar, pues este felino elegante, fuerte, de hasta 5 kg de peso cautiva a muchos con un pelaje largo que se caracteriza por su tacto sedoso. ",
  },
  {
    id: 11,
    categoria: "GATOS",
    nombre: "SIAMES",
    codigo: "g3",
    precio: 60000,
    imagen: "./Img/SIAMES.jpeg",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "A diferencia del arquetipo original, el gato thai, el gato siamés moderno tiene una constitución esbelta y una cola larga y delgada. Las piernas largas y las patas estrechas confieren elegancia a los movimientos de este gato mediano.",
  },
  {
    id: 12,
    categoria: "GATOS",
    nombre: "Cymric",
    codigo: "g4",
    precio: 100000,
    imagen: "./Img/Cymric.jpg",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "El cymric tiene el pelo suave, la cabeza redonda y una constitución compacta. Además, cuenta con unos ojos grandes y redondos, y unas orejas muy separadas. ",
  },
  {
    id: 13,
    categoria: "GATOS",
    nombre: "PERSA",
    codigo: "g5",
    precio: 80000,
    imagen: "./Img/persa.jpg",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "El gato persa destaca por su pelaje largo y suave, con un manto inferior denso. Pero no todos los gatos de pelo largo son persas, de hecho estos gatos han de cumplir numerosos requisitos adicionales para satisfacer los estándares de la raza. ",
  },
  {
    id: 10,
    categoria: "GATOS",
    nombre: "NEBELUNG",
    codigo: "g1",
    precio: 180000,
    imagen: "./Img/gato-nebelung.jpeg",
    descripcion_corta: "A/C Split frío/calor",
    descripcion:
      "El elegante gato nebelung destaca por su complexión musculosa pero grácil. Pesa entre cuatro y siete kilos, los machos tienden a ser más pesados. Esto hace que pertenezca a los gatos de tamaño mediano. Las piernas medianamente fuertes son largas y las patas son ovaladas. La cabeza es cuneiforme y las orejas son grandes y un poco puntiagudas.",
  },
];

const mailLogin = document.getElementById("emailLogin"),
  passLogin = document.getElementById("passwordLogin"),
  recordar = document.getElementById("recordarme"),
  btnLogin = document.getElementById("login"),
  modalEl = document.getElementById("modalLogin"),
  modal = new bootstrap.Modal(modalEl),
  contTarjetas = document.getElementById("tarjetas"),
  toggles = document.querySelectorAll(".toggles");

function validarUsuario(usersDB, user, pass) {
  let encontrado = usersDB.find((userDB) => userDB.mail == user);

  if (typeof encontrado === "undefined") {
    return false;
  } else {
    if (encontrado.pass != pass) {
      return false;
    } else {
      return encontrado;
    }
  }
}

function guardarDatos(usuarioDB, storage) {
  const usuario = {
    name: usuarioDB.nombre,
    user: usuarioDB.mail,
    pass: usuarioDB.pass,
  };

  storage.setItem("usuario", JSON.stringify(usuario));
}

function saludar(usuario) {
  nombreUsuario.innerHTML = `Bienvenido/a, <span>${usuario.name}</span>`;
}

function borradoDatos() {
  localStorage.clear();
  sessionStorage.clear();
}

function recuperoUsuario(storage) {
  let usuarioEnStorage = JSON.parse(storage.getItem("usuario"));
  return usuarioEnStorage;
}

function estaLogueado(usuario) {
  if (usuario) {
    saludar(usuario);
    mostrarInfoMascota(mascotas);
    presentarInfo(toggles, "d-none");
  }
}

function presentarInfo(array, clase) {
  array.forEach((element) => {
    element.classList.toggle(clase);
  });
}
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();

  if (!mailLogin.value || !passLogin.value) {
    //alert (' te faltan algunos campos')
    Swal.fire("Paso algo? ", "Nos falta un campo", "question");
  } else {
    let data = validarUsuario(usuarios, mailLogin.value, passLogin.value);
    if (!data) {
      //alert ('Usuario y/o contraseña Erroneos');
      Swal.fire({
        title: "Error!",
        text: "Usuario y/o contraseña Erroneos",
        icon: "error",
        confirmButtonText: "Reintentar",
      });
    } else {
      if (recordar.checked) {
        guardarDatos(data, localStorage);
        saludar(recuperoUsuario(localStorage));
      } else {
        guardarDatos(data, sessionStorage);
        saludar(recuperoUsuario(sessionStorage));
        // Swal.fire("Bienvenid@!", "You clicked the button!", "success", );
        Swal.fire({
          title: "Bienvenid@!",
          icon: "success",
          showConfirmButton: false,
          time: 1000,
        });
      }
      modal.hide();

      mostrarInfoMascota(mascotas);
      presentarInfo(toggles, "d-none");
    }
  }
});

btnLogout.addEventListener("click", () => {
  borradoDatos();
  presentarInfo(toggles, "d-none");
});

modal.hide();

mostrarInfoMascota(mascotas);
presentarInfo(toggles, "d-none");

function mostrarInfoMascota(array) {
  contTarjetas.innerHTML = "";

  array.forEach((element) => {
    let html = `<div class="card cardMascota" id="tarjeta${element.nombre}">
                <h3 class="card-header" id="nombreMascota">${element.nombre}</h3>
                <img src="${element.img}" alt="${element.nombre}" class=" imgbtn " id="fotoMascota">
                <div class="card-body">
                    <p class="card-text" id="especieMascota">Especie: ${element.especie}</p>
                    <p class="card-text" id="edadMascota">Edad: ${element.edad} años</p>
                    <p class="card-text" id="pesoMascota">Peso: ${element.peso} kilos</p>
                </div>
            </div>`;
    contTarjetas.innerHTML += html;
  });
}

function crearTarjetas(array, contenedor) {
  contenedor.innerHTML = "";
  for (const item of array) {
    let tarjeta = document.createElement("div");
    tarjeta.className = "card1 card my-5 bg-light";
    tarjeta.id = `${item.id}`;
    tarjeta.innerHTML = `
        <h4 class="card-header">${item.nombre}</h4>
        <img src="${item.imagen}" class="card-img-top imagenProducto" alt="${item.descripcion_corta}">
        <div class="card-body">
            <p class="card-text">${item.descripcion}</p>
            <span id="precio">$ ${item.precio}</span>
        </div>

        <div class="card-footer">
        <button id="btnAgregarCarrito${item.id}" class="btn btn-primary agregar-carrito"> Agregar al carrito</button>
        </div>`;

    tarjeta.querySelector(".agregar-carrito");
    tarjeta.addEventListener("click", () => agregarCarrito(item.id));
    contenedor.append(tarjeta);
  }
}

function buscar(array, criterio, input) {
  return array.filter((item) => item[criterio].includes(input));
}

crearTarjetas(catalogo, contenedorTarjetas);

let busqueda = document.querySelectorAll(".inputBusqueda");

busqueda.forEach((input) => {
  input.addEventListener("input", () => {
    let cadena = input.value.toUpperCase();
    console.log(cadena);
    crearTarjetas(buscar(catalogo, input.id, cadena), contenedorTarjetas);
  });
  input.onblur = () => {
    input.value = "";
  };
});

const agregarCarrito = (boton) => {
  const tarjeta = document.createElement("div");
  if (carrito.includes(boton)) {
    Swal.fire({
      title: "Ya esta en tu carrito",
      text: "Segui Comprando o Adopta ",
      icon: "warning",
      confirmButtonText: "Comprar :)",
    });
  } else {
    Toastify({
      text: "Agregado correctamente",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      className: "added",
      
      onClick: function () {},
    }).showToast();

    tarjeta.setAttribute("id", "animal-card");
    tarjeta.classList.add("card");
    tarjeta.style.width = "15rem";

    fetch("json/animal.json")
      .then((response) => response.json())
      .then((animal) => {
        
        var filtrado = animal.find(function (data) {
          return data.id === boton;
        });


        const divAnimalContent = `
          <div class="card-body">
           <img src="${filtrado.imagen}" class="card-img-top imagenProducto" alt="${filtrado.nombre}">
            <h5 class="card-title">${filtrado.nombre}</h5>
            <p class="card-text"><i class="fa-brands"></i> ${filtrado.precio}  </p>
            <a id="eliminar-${filtrado.id}" class="btn-eliminar"><i class="fa-solid fa-trash-can"></i></a>
           </div>`;


        tarjeta.innerHTML = divAnimalContent;
        tarjeta
          .querySelector(".btn-eliminar")
          .addEventListener("click", (e) => eliminarAnimalDelCarrito(boton, e));
        carro.append(tarjeta);
        carrito = [...carrito, boton];
      });
  }
  if (carrito.length > 0) {
    let totalCarrito = carrito.reduce(  (acc, ite) => acc + ite,0  );
    divTotal.textContent = `Total: ${totalCarrito}`;
  }

  localStorage.setItem("AnimalsAgregados", JSON.stringify(carrito));
};

const eliminarAnimalDelCarrito = (animal, e) => {
  let AnimalCard = e.target.closest("#animal-card");
  for (let c = 0; c < carrito.length; c++) {
    carrito[c] === animal && carrito.splice(c, 1);
    localStorage.setItem("AnimalsAgregados", JSON.stringify(carrito));
    AnimalCard.remove();
    let totalCarrito = carrito.reduce((acc, ite) => acc + ite.precio, 0);

    divTotal.textContent = `Total: ${totalCarrito}`;
  }

  console.log(carrito);
  console.log(carrito.length);
};

const vaciarCarrito = () => {
  botonVaciar.addEventListener("click", () => {
    carro.innerHTML = "";
    carrito.splice(0, carrito.length);
    divTotal.textContent = `Total: 0`;
    localStorage.setItem("AnimalsAgregados", "");
    console.log(carrito.length);
  });
};

const confirmarCompra = () => {
  let botonComprar = document.getElementById("confirmar-compra");
  botonComprar.addEventListener("click", (e) => {
    e.preventDefault();
    if (carrito.length == 0) {
      Swal.fire({
        title: "Cucha, anda  a elegir que comprar!",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
    } else {
      setTimeout(() => (location.href = " "), 1000);
    }
  });
};

vaciarCarrito();
confirmarCompra();
