$(document).ready(function () {
    const productos = [
        {
            id: 1,
            nombre: "REPÚBLICA DE WAIRES. Claudio Larrea",
            descripcion: "A través de una serie de fotografías directas y sin manipulación, Larrea mezcla la realidad con elementos de ficción, evocando una ciudad melancólica, detenida en el tiempo.",
            precio: 35000.00,
            imagen: "img/productos/repwaires.jpg"
        },
        {
            id: 2,
            nombre: "El arte contemporáneo y, por lo tanto, la fotografía",
            descripcion: "El análisis de obras del arte contemporáneo y, por tanto de la fotografía, será una de las entradas en la problemática permitiendo también una mejor aproximación a la temática.",
            precio: 7000.00,
            imagen: "img/productos/elartecontemp.jpg"
        },
        {
            id: 3,
            nombre: "Arder con lo real",
            descripcion: "Arder con lo real conjuga el recorrido preciso de lectura que Fortuny hace de paisajes, superficies y artefactos con una especie de fluir de la conciencia.",
            precio: 18000.00,
            imagen: "img/productos/arderconloreal.jpg"
        },
        {
            id: 4,
            nombre: "Fotografía, escritura e imaginario",
            descripcion: "Este coloquio internacional abordará las posibles relaciones entre fotografía-escritura desde el punto de vista de la recreación a partir de lo existente.",
            precio: 7000.00,
            imagen: "img/productos/fotoescrima.jpg"
        },
        {
            id: 5,
            nombre: "Fronteras, memorias, artes y archivos",
            descripcion: "Analiza el rol de los archivos y las artes en la construcción y reinterpretación de la memoria.",
            precio: 1500.00,
            imagen: "img/productos/frontmem.jpg"
        },
        {
            id: 6,
            nombre: "Viajeros a la sombra de Darwin",
            descripcion: "A través del análisis de los viajeros, sus estrategias de documentación, permite comprender el lugar político de la imagen en la historia territorial de la Patagonia.",
            precio: 18000.00,
            imagen: "img/productos/sombradarwin.jpg"
        },
        {
            id: 7,
            nombre: "Duermevela",
            descripcion: "Leer fue siempre mi otra pasión. Pero así como las fotos eran mías, los textos eran de los otros, de los escritores.",
            precio: 18000.00,
            imagen: "img/productos/duermevela.jpg"
        },
        {
            id: 8,
            nombre: "Salamone",
            descripcion: "Documenta el legado arquitectónico del ingeniero Salamone en varios pueblos de la provincia de Buenos Aires entre 1998 y 2001.",
            precio: 65000.00,
            imagen: "img/productos/salamone.jpg"
        },
        {
            id: 9,
            nombre: "Ubi Sunt",
            descripcion: "Ubi sunt es un proyecto fotográfico donde archivos de diversas procedencias son atravesados por imágenes del artista.",
            precio: 24000.00,
            imagen: "img/productos/ubisunt.jpg"
        }
    ];

    const catalogo = $("#catalogo"); 
    productos.forEach(producto => {
        const productCard = `
            <div class="col mb-4">
                <div class="sc-product-item card h-100 shadow-sm">
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img-top img-fluid" data-name="product_image">
                    <div class="card-body">
                        <h5 class="card-title" data-name="product_name">${producto.nombre}</h5>
                        <p class="card-text" data-name="product_desc">${producto.descripcion}</p>
                        <p class="card-text"><strong>Precio: $<span data-name="product_price">${producto.precio}</span></strong></p>
                        <input type="hidden" name="product_id" value="${producto.id}">
                        <button class="sc-add-to-cart btn btn-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        `;
        catalogo.append(productCard); 
    });
    
    } );

    renderizarProductos();
