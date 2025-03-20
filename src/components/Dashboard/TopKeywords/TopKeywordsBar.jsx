import React from "react";
import Chart from "react-apexcharts";

const TopKeywordsBar = () => {
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
                borderRadius: false,
                distributed: true,
            },
        },
        colors: ["#3BC1C5", "#3BC1C5", "#3BC1C5", "#3BC1C5", "#3BC1C5"],
        dataLabels: {
            style: {
                colors: ["#fff"],
            },
        },
        xaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#86909C",  // Set x-axis label color
                    fontSize: "12px",
                },
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#86909C",  // Set y-axis label color
                    fontSize: "12px",
                },
            },
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

export default TopKeywordsBar;
