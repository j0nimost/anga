import { Pie, PieChart, Cell } from "recharts"

const data = [
    { name: "Group A", value: 2 },
    { name: "Group B", value: 2 },
    { name: "Group C", value: 1 },
    { name: "Group D", value: 6 },

]

// const Colors = ["#00C49F", "#FFBB28", "#FF8042"]


const UVChart = ({uvMeasure}) => {

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
                 {(() => {
                        if (uvMeasure <= 2){
                            return (
                                <Cell fill="#00C49F" />
                            )
                        }
                        else if(uvMeasure <= 5)
                        {
                            return(
                                <>
                                    <Cell fill="#00C49F" />
                                    <Cell fill="#FFBB28" />
                                </>
                               
                            )
                        }
                        else if(uvMeasure <= 7)
                        {
                            return(
                                <>
                                    <Cell fill="#00C49F" />
                                    <Cell fill="#FFBB28" />
                                    <Cell fill="#fc8c03" />
                                </>
                            )
                        }
                        
                        return (
                            <>
                                <Cell fill="#00C49F" />
                                <Cell fill="#FFBB28" />
                                <Cell fill="#fc8c03" />
                                <Cell fill="#fc1c03" />
                            </>
                        )
                })()}
                {/* <Cell fill="#00C49F" />
                <Cell fill="#FFBB28" />
                <Cell fill="#fc8c03" />
                <Cell fill="#fc1c03" /> */}
            </Pie>
        </PieChart>
    )
}

export default UVChart