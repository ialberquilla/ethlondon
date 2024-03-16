
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {

    const data = { winner: '1' }

    console.log('data', data)

    return new Response(JSON.stringify(data), {})

}