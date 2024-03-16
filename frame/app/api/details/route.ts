import { getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';


async function getResponse(req: NextRequest): Promise<NextResponse> {
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
        src: `https://bafkreied55f7skfo65d4yxg6ec5w2x7556mp4sifgdap7wlnunbjzf2zsa.ipfs.nftstorage.link/`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/stake`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
