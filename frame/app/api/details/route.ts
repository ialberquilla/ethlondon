import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { createEmbededWallet, createUser, getAllUsers } from '../../../lib/dynamic';


async function getResponse(req: NextRequest): Promise<NextResponse> {
  const body = await req.text();
  const frameRequest = JSON.parse(body);

  console.log({ frameRequest })

  const users = await getAllUsers();

  console.log({ users })

  let user 
  user = users.users.find((user: any) => user.alias === String(frameRequest.untrustedData.fid));

  if(!user) {
    user = await createUser(String(frameRequest.untrustedData.fid), `test@${frameRequest.untrustedData.fid}.com`);
  }

  const hasWallet = user.wallets.length > 0;
  let wallet 

  if(!hasWallet) {
    wallet = await createEmbededWallet(user.id);
  }else{
    wallet = user.wallets[0];
  }



  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'tx',
          label: 'Add funds to your wallet',
          target: `${NEXT_PUBLIC_URL}/api/tx`,
          postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
        },
        {
          action: 'tx',
          label: 'Stake',
          target: `${NEXT_PUBLIC_URL}/api/tx`,
          postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
        },
      ],
      image: {
        src: `https://bafkreied55f7skfo65d4yxg6ec5w2x7556mp4sifgdap7wlnunbjzf2zsa.ipfs.nftstorage.link/`,
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';