import { useRouter } from "next/router";
import { useMemo } from "react";
import useSWR from "swr";
import { Table } from "flowbite-react";
import {
  LineChart,
  Line,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import useAuthRedirect from "../../../hooks/useAuthRedirect";

const PatientData = () => {
  useAuthRedirect();

  const { data, error } = useSWR("/api/reports");
  const { query } = useRouter();

  const person = useMemo(() => {
    if (!query.id || !data) return;

    return data.find((item) => item.id == query.id);
  }, [data, query]);

  const { data: fileData, error: fileError } = useSWR(
    `/downloads/${person?.json}`
  );

  console.log({ fileData, fileError });

  if (error || !query?.id || fileError) return <div>Error</div>;
  if (!data || !person || !fileData) return <div>Loading...</div>;
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            {person.title}
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Explore patient data
          </p>
        </div>

        <div className="w-full h-96 mb-16">
          <ResponsiveContainer>
            <LineChart width={800} height={400} data={fileData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Line dot={false} type="monotone" dataKey="X" stroke="#8884d8" />
              <Line dot={false} type="monotone" dataKey="Y" stroke="#82ca9d" />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <Table>
          <Table.Head>
            <Table.HeadCell>X</Table.HeadCell>
            <Table.HeadCell>Y</Table.HeadCell>
            <Table.HeadCell>Time</Table.HeadCell>
            {Object.keys(fileData?.[0]).includes("button") && (
              <Table.HeadCell>Button</Table.HeadCell>
            )}
            {Object.keys(fileData?.[0]).includes("correct") && (
              <Table.HeadCell>Correct</Table.HeadCell>
            )}
          </Table.Head>
          <Table.Body className="divide-y">
            {fileData.map((row, key) => (
              <Table.Row
                key={key}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell>{row.X}</Table.Cell>
                <Table.Cell>{row.Y}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {row.time}
                </Table.Cell>
                {row.button != undefined && (
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {row.button}
                  </Table.Cell>
                )}
                {row.correct != undefined && (
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {row.correct}
                  </Table.Cell>
                )}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default PatientData;
