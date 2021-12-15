import ReactEcharts from "echarts-for-react";
import { theme } from "../../styles/theme";

interface ChartModel {
  xAxisValues: any[];
  yAxisValues?: any[];
  coinValues: any[];
  currencyValues: any[];
}

const Chart = ({
  xAxisValues,
  yAxisValues,
  coinValues,
  currencyValues,
}: ChartModel) => {
  const chartOptions = {
    tooltip: {
      show: false,
      trigger: "axis",
    },
    grid: {
      show: false,
      backgroundColor: "#E7E8F3",
    },
    xAxis: {
      show: true,
      type: "category",
      data: xAxisValues,
      axisLabel: {
        show: true,
        color: theme.chartLabel,
        fontSize: 12,
        fontWeight: "bold",
        formatter: function (value: string, index: number) {
          const [, month, day] = value.split(" ");
          return `${day} ${month}`;
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: Math.max(...coinValues) + 50,
      axisLabel: {
        show: true,
        color: theme.chartLabel,
        fontSize: 12,
        fontWeight: "bold",
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: [theme.gray],
        },
      },
    },
    series: [
      {
        data: coinValues,
        type: "bar",
        itemStyle: {
          color: theme.primary,
          borderColor: theme.primary,
          borderWidth: 2,
          borderRadius: 4,
        },
      },
      {
        connectNulls: true,
        data: currencyValues,
        type: "bar",
        itemStyle: {
          color: "white",
          borderColor: theme.primary,
          borderWidth: 2,
          borderRadius: 4,
        },
      },
    ],
  };
  return (
    <ReactEcharts
      option={chartOptions}
      style={{ width: "100%", height: "300px" }}
    />
  );
};

export default Chart;
