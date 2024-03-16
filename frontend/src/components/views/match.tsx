/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZyYPihdRf2T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ResponsiveBar } from "@nivo/bar"

export default function NextMatch() {
  return (
    <div className="flex-1 p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Next Football Match</h1>
        <br/>
        <br/>
        <h2 className="text-3xl font-bold">Manchester vs Real sociedad</h2>
        <br/>
        <br/>
        <div className="mt-4 flex items-center justify-between">
          <div className="w-1/2">
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
      </div>
    </div>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Manchester", count: 111 },
          { name: "Real Sociedad", count: 72 },
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
          { name: "Manchester", count: 110 },
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
