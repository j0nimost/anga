import { Pie, PieChart, Cell } from "recharts"
import { Typography } from "@mui/material"

const data = [
    { name: "Group A", value: 2 },
    { name: "Group B", value: 5 },
    { name: "Group C", value: 8 }
]

const Colors = ["#00C49F", "#FFBB28", "#FF8042"]

const UVChart = () => {

    return (
        <PieChart width={250} height={100}>
            <Pie startAngle={180}
             endAngle={0}
             innerRadius={60}
             outerRadius={80}
             data={data}
             dataKey="value"
             labelLine={false}
             blendStroke
             isAnimationActive={true}
             cy={"87%"}
             >
                 {/* Hide specific color depending on prop value */}
                <Cell fill="#00C49F" />
                 <Cell fill="#FFBB28" />
                <Cell fill="#FF8042"/>
            </Pie>
        </PieChart>
    )
}

export default UVChart