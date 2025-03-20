import React from "react";
import Chart from "react-apexcharts";

const CustomerQueriesBar = () => {
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
        colors: ["#656EF8", "#656EF8", "#656EF8", "#656EF8", "#656EF8"],
        dataLabels: {
            style: {
                colors: ["#86909C"],  // ✅ Set data label text color
                fontSize: "12px",     // ✅ Set text size
            },
        },
        xaxis: {
            labels: { 
                show: true,
                style: { 
                    colors: "#86909C", // ✅ X-axis text color
                    fontSize: "12px",   // ✅ X-axis text size
                },
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: { 
                style: { 
                    colors: "#86909C", // ✅ Y-axis text color
                    fontSize: "12px",   // ✅ Y-axis text size
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

export default CustomerQueriesBar;
