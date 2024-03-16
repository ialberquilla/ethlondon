import { getMatch } from '@/lib/blockchain';
import { ImageResponse } from 'next/og';
import React from 'react';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {

    const data = [
        { name: 'Team 1', value: 50 },
        { name: 'Team 2', value: 60 },
    ];

    const maxValue = Math.max(...data.map(d => d.value));
    const scale = 100 / maxValue; // Scale the bars to fit within 100 pixels

    return new ImageResponse(
        React.createElement(
            'div',
            { style: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' } },
            React.createElement('h1', { style: { marginBottom: '200px' } }, 'Current stake status'),
            React.createElement(
                'div',
                { style: { display: 'flex', flexDirection: 'row', alignItems: 'flex-end', width: '100%', justifyContent: 'space-around' } },
                ...data.map((d, i) =>
                    React.createElement(
                        'div',
                        { key: i, style: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%' } },
                        React.createElement('div', {
                            style: {
                                display: 'flex',
                                height: `${d.value * scale}px`,
                                width: '100%',
                                backgroundColor: i === 0 ? 'blue' : 'red'
                            }
                        }),
                        React.createElement('h2', null, d.name)
                    )
                )
            )
        )
    );
}