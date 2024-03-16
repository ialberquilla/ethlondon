/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZyYPihdRf2T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { getMatch, getStakeEvents } from "@/utils/blockchain"
import { ResponsiveBar } from "@nivo/bar"
import { useEffect, useState } from "react";

export default function NextMatch() {

  const [matchData, setMatchData] = useState();

  const [latestTxs, setLatestTxs] = useState([]);

  const loadData = async () => {
    const matchData = await getMatch();
    setMatchData(matchData as any);

    const txs = await getStakeEvents();

    console.log({ txs })

    console.log(txs[0])

    setLatestTxs(txs as any);
  }

  useEffect(() => {
    loadData()
  }, []);


  function BarChart(props) {
    return (
      <div {...props}>
        <ResponsiveBar
          data={[
            { name: "Manchester", count: matchData?.team1Stake || 0 },
            { name: "Real Sociedad", count: matchData?.team2Stake || 0 }
          ]}
          keys={["count"]}
          indexBy="name"
          margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
          padding={0.3}
          colors={({ data }) => (data.name === 'Manchester' ? '#2563eb' : '#FF0000')}
          axisBottom={{
            tickSize: 0,
            tickPadding: 16,
          }}
          axisLeft={{
            tickSize: 0,
            tickValues: 4,
            tickPadding: 16,
          }}
          gridYValues={4}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "12px",
                textTransform: "capitalize",
                borderRadius: "6px",
              },
            },
            grid: {
              line: {
                stroke: "#f3f4f6",
              },
            },
          }}
          tooltipLabel={({ id }) => `${id}`}
          enableLabel={false}
          role="application"
          ariaLabel="A bar chart showing data"
        />
      </div>
    )
  }

  function BarChartReserved(props) {
    return (
      <div {...props}>
        <ResponsiveBar
          data={[
            { name: "Manchester", count: 111 },
            { name: "Real Sociedad", count: 108 },
          ]}
          keys={["count"]}
          indexBy="name"
          margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
          padding={0.3}
          colors={({ data }) => (data.name === 'Manchester' ? '#2563eb' : '#FF0000')}
          axisBottom={{
            tickSize: 0,
            tickPadding: 16,
          }}
          axisLeft={{
            tickSize: 0,
            tickValues: 4,
            tickPadding: 16,
          }}
          gridYValues={4}
          theme={{
            tooltip: {
              chip: {
                borderRadius: "9999px",
              },
              container: {
                fontSize: "12px",
                textTransform: "capitalize",
                borderRadius: "6px",
              },
            },
            grid: {
              line: {
                stroke: "#f3f4f6",
              },
            },
          }}
          tooltipLabel={({ id }) => `${id}`}
          enableLabel={false}
          role="application"
          ariaLabel="A bar chart showing data"
        />
      </div>
    )
  }


  return (
    <div className="flex-1 p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Next Football Match</h1>
        <br />
        <br />
        <h2 className="text-3xl font-bold">Manchester vs Real sociedad</h2>
        <br />
        <br />
        <div className="mt-4 flex items-center justify-between">
          <div className="w-1/2 pr-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Total reseved tokens by teams</h2>
              <BarChartReserved className="w-full aspect-[16/9]" />
            </div>
          </div>
          <div className="w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Total staked USDC by supporters</h2>
              <BarChart className="w-full aspect-[16/9]" />
            </div>
          </div>
        </div>
        <div className="mt-8"></div>
        <h2 className="text-3xl font-bold mb-4">Latest Transactions</h2>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" scope="col">
                TX id
              </th>
              <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" scope="col">
                Staker
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                Team
              </th>
              <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {latestTxs.map((transaction) => (
              <tr>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                  <a href={`https://sepolia.arbiscan.io/tx/${transaction.tx}`} target="_blank" rel="noopener noreferrer">
                    Transaction
                  </a>
                </td>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{transaction.staker}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{transaction.team}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{transaction.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}




