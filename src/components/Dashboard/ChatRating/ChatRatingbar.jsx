import React from "react";
import Chart from "react-apexcharts";

const ChatRatingbar = () => {
  const options = {
    chart: {
      type: "bar",
      height: 200,
      toolbar: {
        show: false, 
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 10, 
        distributed: true, 
      },
    },
    colors: ["#00B81D", "#B43A45", "#16C5F4", "#165DFF", "#D96D00"],
    dataLabels: {
      style: {
        colors: ["#fff"],
      },
    },
    xaxis: {
      labels: { show: true },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    grid: {
      show: false,
    },
    legend: {
      show: false, 
    },
  };

  const series = [
    {
      name: "Actual",
      data: [
        { x: "2021", y: 81 },
        { x: "2022", y: 51 },
        { x: "2023", y: 68 },
        { x: "2024", y: 40 },
        { x: "2025", y: 25 },
      ],
    },
  ];

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={200} />
    </div>
  );
};

export default ChatRatingbar;
