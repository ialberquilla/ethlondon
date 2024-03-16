/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6fyd80LhbFL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import TeamDashboard from "./views/team"
import { useState } from "react"
import FansDashboard from "./views/fans"
import NextMatch from "./views/match"


export default function Dashboard() {

    const [activeView, setActiveView] = useState(0)

    return (
        <div className="flex h-screen">
            <div className="bg-gray-900 text-white w-64 p-6 flex flex-col space-y-6">
                <div className="text-2xl font-bold">Dashboard</div>
                <nav className="flex flex-col space-y-2">
                    <Link className="hover:text-gray-400" href="#" onClick={() => setActiveView(0)}>
                        Teams
                    </Link>
                    <Link className="hover:text-gray-400" href="#" onClick={() => setActiveView(1)}>
                        Fans
                    </Link>
                    <Link className="hover:text-gray-400" href="#" onClick={() => setActiveView(2)}>
                        Next Match
                    </Link>
                </nav>
            </div>

            {activeView === 0 && (
                <TeamDashboard />
            )}

            {activeView === 1 && (
                <FansDashboard />
            )}

            {activeView === 2 && (
                <NextMatch />
            )}

        </div>
    )
}

