/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6fyd80LhbFL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function TeamDashboard() {
    return (
        <div className="flex-1 p-8">
          <div className="mb-6">
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" scope="col">
                    Team
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                    Total staked
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                    Total Earned
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                    Total Burned
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">PSG</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2000000</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2000</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">2569</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Arsenal</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1600000</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1600</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1540</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Manchester</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1200000</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1258</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1566</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Roma</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1130000</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1123</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1066</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">Atletico de Madrid</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1100000</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">1020</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">998</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
  }
  
  