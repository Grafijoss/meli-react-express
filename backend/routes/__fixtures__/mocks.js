const mockItemsByQuery = {
  categories: [
    'Celulares y Teléfonos',
    'Celulares y Smartphones'
  ],
  items: [
    {
      id: 'MLA1113718634',
      title: 'Motorola Edge 20 Lite 128 Gb  Gris 6 Gb Ram',
      price: {
        currency: 'ARS',
        amount: 69999,
        decimals: 0
      },
      picture: 'http://http2.mlstatic.com/D_833619-MLA48233725917_112021-I.jpg',
      condition: 'new',
      free_shipping: true
    },
    {
      id: 'MLA1128874385',
      title: ' Moto G71 128 Gb  Neptune Green 6 Gb Ram',
      price: {
        currency: 'ARS',
        amount: 59999,
        decimals: 0
      },
      picture: 'http://http2.mlstatic.com/D_867710-MLA49272373785_032022-I.jpg',
      condition: 'new',
      free_shipping: true
    },
    {
      id: 'MLA1133776737',
      title: ' Moto G41 128 Gb  Negro Ónix 4 Gb Ram',
      price: {
        currency: 'ARS',
        amount: 43999,
        decimals: 0
      },
      picture: 'http://http2.mlstatic.com/D_711274-MLA49535290493_032022-I.jpg',
      condition: 'new',
      free_shipping: true
    }
  ]
}

const mockItemDetailById = {
  id: 'MLA1108287343',
  title: 'Apple iPad (9ª Generación) 10.2  Wi-fi 64gb - Gris Espacial',
  price: {
    currency: 'ARS',
    amount: 70090,
    decimals: 0
  },
  picture: 'http://http2.mlstatic.com/D_902389-MLA47871010532_102021-O.jpg',
  condition: 'new',
  free_shipping: true,
  sold_quantity: 250,
  categoryId: 'MLA82085'
}

const mockItemDescriptionById = 'Lleno de potencia, muy fácil de usar y versátil. El nuevo iPad viene con una espectacular pantalla Retina de 10.2 pulgadas, el potente chip A13 Bionic y una cámara frontal ultra gran angular con Encuadre Centrado. Además, es compatible con el Apple Pencil y el Smart Keyboard.(1)\nCon el iPad, harás de todo como si nada. Y por menos de lo que imaginas.\n\nAvisos legales\nLas apps están disponibles en el App Store. La disponibilidad de títulos está sujeta a cambios. \n(1) Los accesorios se venden por separado. La compatibilidad varía según la generación. \n(2) La duración de la batería varía según el uso y la configuración.'

const mockCategoriesById = [
  'Computación',
  'Tablets y Accesorios',
  'Tablets'
]

module.exports = {
  mockItemsByQuery,
  mockItemDetailById,
  mockItemDescriptionById,
  mockCategoriesById
}
