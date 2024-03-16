/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6fyd80LhbFL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function FansDashboard() {
    return (
        <div className="flex-1 p-8">
          <div className="mb-6">
          </div>
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6" scope="col">
                    Rank
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                    Handle
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                    Total staked
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                    Total Earned
                  </th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900" scope="col">
                    Rewards
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">#1</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">JDone</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">5560 USDC</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">50 USDC</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">#2</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">AMorris</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">5160 USDC</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">48 USDC</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">#3</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Melan</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">4360 USDC</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">43 USDC</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    </span>
                  </td>
                </tr>

                <tr>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">#4</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Degen</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">3560 USDC</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">35 USDC</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
  }
  
  