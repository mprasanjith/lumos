export default function handler(req, res) {
  res.status(200).json([
    { name: "Dataset 1", file: "data1.csv" },
    { name: "Dataset 2", file: "data2.csv" },
    { name: "Dataset 3", file: "data3.csv" },
    { name: "Dataset 4", file: "data4.csv" },
    { name: "Dataset 5", file: "data5.csv" },
    { name: "Dataset 6", file: "data6.csv" },
  ]);
}
