import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';


async function getResponse(req: NextRequest): Promise<NextResponse> {

  const imageURL = `${NEXT_PUBLIC_URL}/api/current`;

  console.log({ imageURL })

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'link',
          label: 'Add funds to your wallet',
          target: `http://localhost:3000/api/wallet`,
        },
        {
          label: 'Stake',
          postUrl: `${NEXT_PUBLIC_URL}/api/stake`,
        },
      ],
      image: {
        src: imageURL,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/stake`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
