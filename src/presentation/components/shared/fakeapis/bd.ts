import { Artist, Rrss } from "./apiIntefaces";

// Sample event data
export const events = [
  {
    id: 1,
    images:
      "https://cdn.joinnus.com/wp-content/uploads/2024/09/06074157/vivo-1000x600.jpg",
    location: "Parque Central, Ciudad",
    date: "15 de Noviembre de 2024",
    name: "Festival 50 años - Hip Hop",
    description:
      "Somos un diverso y entusiasta colectivo de jóvenes amantes del hip-hop provenientes de distintos barrios de la ciudad, unidos por la pasión compartida por esta cultura y música que nos representa.",
    price: 30,
    originalPrice: 50,
  },
  {
    id: 2,
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf4m3pnBa22i5cSaB8RNGWQzEnxO1V1YuuAQ&s",
    location: "Teatro Municipal, Ciudad",
    date: "01 de Diciembre de 2024",
    name: "Festival 50 años - Hip Hop",
    description:
      "Somos un diverso y entusiasta colectivo de jóvenes amantes del hip-hop provenientes de distintos barrios de la ciudad, unidos por la pasión compartida por esta cultura y música que nos representa.",
    price: 25,
    originalPrice: 40,
  },
  {
    id: 3,
    images:
      "https://s3-us-west-2.amazonaws.com/lasaga-blog/media/images/EDC_Portada_1.original.jpg",
    location: "Club XYZ, Ciudad",
    date: "20 de Noviembre de 2024",
    name: "Festival 50 años - Hip Hop",
    description:
      "Somos un diverso y entusiasta colectivo de jóvenes amantes del hip-hop provenientes de distintos barrios de la ciudad, unidos por la pasión compartida por esta cultura y música que nos representa.",
    price: 20,
    originalPrice: 35,
  },
  {
    id: 4,
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCNLq6k1GIPNGZIOeU9LrrdEpsXCQM7hO2Q&s",
    location: "Auditorio Nacional, Ciudad",
    date: "28 de Octubre de 2024",
    name: "Festival 50 años - Hip Hop",
    description:
      "Somos un diverso y entusiasta colectivo de jóvenes amantes del hip-hop provenientes de distintos barrios de la ciudad, unidos por la pasión compartida por esta cultura y música que nos representa.",
    price: 15,
    originalPrice: 30,
  },
  {
    id: 5,
    images:
      "https://tucuatro.com/camburpinton/wp-content/uploads/sites/5/2022/12/festival-latin-america.jpg",
    location: "Estadio Deportivo, Ciudad",
    date: "10 de Noviembre de 2024",
    name: "Festival 50 años - Hip Hop",
    description:
      "Somos un diverso y entusiasta colectivo de jóvenes amantes del hip-hop provenientes de distintos barrios de la ciudad, unidos por la pasión compartida por esta cultura y música que nos representa.",
    price: 35,
    originalPrice: 60,
  },
];

export const blogs = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Break Dance: El arte que libera la mente",
    subtitle: "Subtítulo del Evento 1",
    url: "https://google.com",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/28232674/pexels-photo-28232674/free-photo-of-postal-de-violin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Break Dance: El arte que libera la mente",
    subtitle: "Subtítulo del Evento 2",
    url: "https://twitch.com",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/28136905/pexels-photo-28136905/free-photo-of-ha-giang-12-2023.jpeg",
    title: "Break Dance: El arte que libera la mente",
    subtitle: "Subtítulo del Evento 3",
    url: "https://chatgpt.com",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1319479588/es/foto/los-m%C3%BAsicos-tocaban-m%C3%BAsica-rock-en-el-escenario-hab%C3%ADa-un-p%C3%BAblico-lleno-de-gente-viendo-el.jpg?s=1024x1024&w=is&k=20&c=LpKLeEvCSIIKDbKRp1pP1zv003Ta_Lndd7B9OnN8m0Q=",
    title: "Break Dance: El arte que libera la mente",
    subtitle: "Subtítulo del Evento 4",
    url: "https://youtube.com",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/11368512/pexels-photo-11368512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Break Dance: El arte que libera la mente",
    subtitle: "Subtítulo del Evento 5",
    url: "https://twitter.com",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/7772399/pexels-photo-7772399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Break Dance: El arte que libera la mente",
    subtitle: "Subtítulo del Evento 6",
    url: "https://facebook.com",
  },
];

export const slides = [
  {
    title: "Lorem Inputs",
    description:
      "Descripción de la categoría 1. Lorem ipsum dolor sit amet.Descripción de la categoría 1. Lorem ipsum dol Descripción de la categoría 1. Lorem ipsum dol",
    imageUrl: "https://e.rpp-noticias.io/xlarge/2024/05/09/473047_1579589.webp",
  },
  {
    title: "Categoria 2",
    description:
      "Descripción de la categoría 2. Consectetur adipiscing elit.Descripción de la categoría 2. Consectetur adipiscin",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJi1kSQ-2ilYEcz3Lj7N8kmZHoSneAl1Tuhw&s",
  },
  {
    title: "Categoria 3",
    description:
      "Descripción de la categoría 3. Sed do eiusmod tempor incididunt.Descripción de la categoría 2. Consectetur adipiscin",
    imageUrl:
      "https://uvn-brightspot.s3.amazonaws.com/assets/vixes/btg/musica.batanga.com/files/5-cosas-que-los-musicos-independientes-deberian-aprender-de-Taylor-Swift-2.jpg",
  },
  {
    title: "Categoria 4",
    description:
      "Descripción de la categoría 4. Ut labore et dolore magna aliqua.Descripción de la categoría 2. Consectetur adipiscin",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-lam4R1PrGPnSnxsYVvY2QVcRNWxlg2HPQ&s",
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    url: "./wos.png",
    alias: "Wos",
    name: "Valentin Oliva",
    description: "Aliqua nulla Lorem ex commodo enim ad aute ex sit veniam do ex cupidatat. Id irure nulla eu aliquip anim deserunt fugiat nostrud laborum.",
  },
  {
    id: 2,
    url: "./jaze.png",
    alias: "Jaze",
    name: "Juan Carlos Iwasaki La Puente",
    description: "Aliqua nulla Lorem ex commodo enim ad aute ex sit veniam do ex cupidatat. Id irure nulla eu aliquip anim deserunt fugiat nostrud laborum.",
  },
  {
    id: 3,
    url: "./pLondra.png",
    alias: "Paulo Londra",
    name: "Paulo Ezequiel Londra",
    description: "Aliqua nulla Lorem ex commodo enim ad aute ex sit veniam do ex cupidatat. Id irure nulla eu aliquip anim deserunt fugiat nostrud laborum.",
  },
  {
    id: 4,
    url: "./nekroos.png",
    alias: "Nekroos",
    name: "Cristopher García Orbegoso",
    description: "Aliqua nulla Lorem ex commodo enim ad aute ex sit veniam do ex cupidatat. Id irure nulla eu aliquip anim deserunt fugiat nostrud laborum.",
  },
]

export const rrss: Rrss[] = [
  {
    id: 1,
    svg: "./facebook.svg"
  },
  {
    id: 2,
    svg: "./ig.svg"
  },
  {
    id: 3,
    svg: "./yt.svg"
  }
]