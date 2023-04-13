import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const Statistic = () => {
  const assignmentMarks = [
    { name: "Assignment 1", value: 60 },
    { name: "Assignment 2", value: 60 },
    { name: "Assignment 3", value: 58 },
    { name: "Assignment 4", value: 60 },
    { name: "Assignment 5", value: 60 },
    { name: "Assignment 6", value: 52 },
    { name: "Assignment 7", value: 60 },
  ];
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
  ];

  // pie chart
  return (
    <div className="flex items-center justify-center">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={assignmentMarks}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {assignmentMarks.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistic;
