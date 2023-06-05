const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const LineData = {
  options: {
    tension: 0.4,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Dummy Chart",
      },
    },
  },

  data: {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 1000) + 1),
        borderColor: "rgb(235, 162, 53)",
        backgroundColor: "rgba(235, 162, 53, 0.5)",
      },
    ],
  },
};
