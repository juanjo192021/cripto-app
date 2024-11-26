export interface ICripto {
  data:   Data;
  msg:    string;
  status: string;
}

export interface Data {
  prediccion_adicional: PrediccionAdicional;
  resultados:           Array<number[]>;
}

export interface PrediccionAdicional {
  fecha: string;
  valor: number;
}
