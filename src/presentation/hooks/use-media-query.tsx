import * as React from "react";

export default function useMediaQuery(query: string) {
  const [value, setValue] = React.useState(() => {
    // Inicializa el estado basado en la consulta actual
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false; // Valor por defecto en el servidor
  });

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    // Función de manejo de cambios
    const onChange = (event: MediaQueryListEvent) => {
      setValue(event.matches);
    };

    // Configura el listener
    mediaQueryList.addEventListener("change", onChange);

    // Cleanup al desmontar
    return () => {
      mediaQueryList.removeEventListener("change", onChange);
    };
  }, [query]);

  return value;
}
