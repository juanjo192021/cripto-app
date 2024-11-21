export interface ICripto {
    data: Data
    msg: string
    status: string
  }
  
  export interface Data {
    prediccion_adicional: PrediccionAdicional
    resultados: Resultado[]
  }
  
  export interface PrediccionAdicional {
    fecha: string
    valor: number
  }
  
  export interface Resultado {
    name: string
    predicho: number
    real: number
  }
  