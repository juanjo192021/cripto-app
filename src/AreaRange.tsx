import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more'; // Ruta ajustada

// Inicializar el módulo
HighchartsMore(Highcharts);

interface Props {
  data: [number, number, number][];
}

export const AreaRange = ({ data }: Props) => {
  const options = {
    chart: {
      type: 'arearange',
      zooming: {
        type: 'x',
      },
      scrollablePlotArea: {
        minWidth: 600,
        scrollPositionX: 1,
      },
    },
    title: {
      text: 'Predicción vs Realidad del Cierre de Criptomonedas',
      align: 'left',
    },
    subtitle: {
      text: 'Comparación entre valores predichos y reales',
      align: 'left',
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Valores',
      },
    },
    tooltip: {
      shared: true,
      valueDecimals: 2,
      xDateFormat: '%A, %b %e %Y',
    },
    legend: {
      enabled: true,
    },
    series: [
      {
        type: 'arearange',
        name: 'Rango (Predicho vs Real)',
        data: data, // Todos los puntos
        color: 'rgba(0, 150, 200, 0.3)',
        zIndex: 0,
      },
      {
        type: 'line',
        name: 'Predicción',
        data: data.map(([timestamp, predicted]) => [timestamp, predicted]),
        color: '#ff0000',
        zIndex: 1,
      },
      {
        type: 'line',
        name: 'Real',
        data: data.map(([timestamp, , real]) => [timestamp, real]),
        color: '#0000ff',
        zIndex: 1,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

