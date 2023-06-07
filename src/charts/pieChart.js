const labels = ["Basic Tees", "Hoodies", "Short Pants"];

export const PieData = {
  options: {
    labels: false,
    plugins: {
      legend: {
        position: "right",
        align: "space-around",
        labels: {
          usePointStyle: true,
          pointRadius: 2,
        },
      },
    },
  },
  data: {
    labels,
    datasets: [
      {
        label: "Votes",
        data: labels.map(() => Math.floor(Math.random() * 30) + 1),
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 0,
      },
    ],
  },
};
