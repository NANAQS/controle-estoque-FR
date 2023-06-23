import { Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface head {
  label: string;
  data: number[];
  colors: string;
}

interface Props {
  labels: string[];
  title: string;
  heads: head[];
}

export function CustomChartLine(props: Props) {
  const dataset = props.heads.map((item) => {
    return {
      label: item.label,
      data: item.data,
      borderColor: item.colors,
      backgroundColor: item.colors,
    };
  });
  return (
    <Paper elevation={4} sx={{ margin: 2 }}>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top" as const,
            },
            title: {
              display: true,
              text: props.title,
            },
          },
        }}
        data={{
          labels: props.labels,
          datasets: [...dataset],
        }}
      />
    </Paper>
  );
}
