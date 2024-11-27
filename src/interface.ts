//interfaz de la respuesta de la api
export interface ICripto {
  data:   Data;
  msg:    string;
  status: string;
}

//interfaz de la data de la respuesta de la api
export interface Data {
  prediccion_adicional: PrediccionAdicional;
  resultados:           Array<number[]>;
}

//interfaz de la prediccion adicional de la respuesta de la api
export interface PrediccionAdicional {
  fecha: string;
  valor: number;
}
