

export const navLinks = [
  {
    name: "Colectivos",
    path: "",
    subLinks: [
      {
        name: "Todos",
        path: "/colectivos",
      },
      {
        name: "Rap",
        path: "",
        subLinks: [
          { name: "Plaza de Reyes", path: "/colectivos/rap/plaza-de-reyes" },
          { name: "Soporte Alterno", path: "/colectivos/rap/soporte-alterno" },
          { name: "Rap style", path: "/colectivos/rap/rap-style" },
          { name: "Raptonda", path: "/colectivos/rap/raptonda" },
          { name: "Somos de Calle", path: "/colectivos/rap/somos-de-calle" },
        ],
      },
      {
        name: "Beat Box",
        path: "",
        subLinks: [
          {
            name: "Tierra de Bboys And Bgirl",
            path: "/colectivos/beat-box/tierra-de-bboys-and-bgirl",
          },
          { name: "Rapsodia", path: "/colectivos/beat-box/rapsodia" },
        ],
      },
      {
        name: "Break Dance",
        path: "",
        subLinks: [
          { name: "Raptonda", path: "/colectivos/break-dance/raptonda" },
          { name: "Jotitas", path: "/colectivos/break-dance/jotitas" },
          { name: "SomosAte", path: "/colectivos/break-dance/somosate" },
        ],
      },
    ],
  },
  {
    name: "Categorias",
    path: "",
    subLinks: [
      {
        name: "Todos",
        path: "/category",
      },
      {
        name: "Rap",
        path: "",
        subLinks: [
          { name: "Batallas", path: "/category/rap/batallas" },
          { name: "Freestyle", path: "/category/rap/freestyle" },
        ],
      },
      {
        name: "Beat Box",
        path: "/beat-box",
      },
      {
        name: "Break Dance",
        path: "/break-dance",
      },
    ],
  },

  {
    name: "Destacados",
    path: "/featured",
  },
 

];
