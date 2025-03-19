import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Label } from "recharts";

const data = [
    { name: "March 2024", value1: 0.8, value2: 0.4 },
    { name: "March 2024", value1: 0.2, value2: 0.6 },
    { name: "March 2024", value1: 0.9, value2: 0.1 },
    { name: "March 2024", value1: 0.5, value2: 0.5 },
    { name: "March 2024", value1: 0.7, value2: 0.3 },
    { name: "March 2024", value1: 1, value2: 0.2 }
];

const SentimentChart = () => {
    return (
        <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="white" />

                {/* X-Axis */}
                <XAxis dataKey="name" tick={{ fill: "white" }}>
                    <Label value="March 2024" offset={20} position="bottom" fill="white" />
                </XAxis>

                {/* Y-Axis */}
                <YAxis domain={[0, 1]} tick={{ fill: "white" }}>
                    <Label value="1" position="insideTopLeft" fill="white" />
                    <Label value="0.5" position="insideLeft" offset={-10} fill="white" />
                    <Label value="0" position="insideBottomLeft" fill="white" />
                </YAxis>

                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value1" stroke="green" strokeWidth={2} dot={{ fill: "green", r: 5 }} />
                <Line type="monotone" dataKey="value2" stroke="cyan" strokeWidth={2} dot={{ fill: "cyan", r: 5 }} />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default SentimentChart;
