export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      title: "Person 1",
      coordinate: { lat: "56.879", lng: "14.8059" },
      file: "data1.csv",
      json: "data1.json"
    },
    {
      id: 2,
      title: "Person 2",
      coordinate: { lat: "56.8553783", lng: "14.8253766" },
      file: "data2.csv",
      json: "data2.json"
    },
    {
      id: 3,
      title: "Person 3",
      coordinate: { lat: "57.1681313", lng: "14.5731228" },
      file: "data3.csv",
      json: "data3.json"
    },
    {
      id: 4,
      title: "Person 4",
      coordinate: { lat: "56.9011057", lng: "14.5296401" },
      file: "data4.csv",
      json: "data4.json"
    },
    {
      id: 5,
      title: "Person 5",
      coordinate: { lat: "56.8921815", lng: "14.7380181" },
      file: "data5.csv",
      json: "data5.json"
    },
    {
      id: 6,
      title: "Person 6",
      coordinate: { lat: "56.9125867", lng: "14.7287334" },
      file: "data6.csv",
      json: "data6.json"
    },
  ]);
}
