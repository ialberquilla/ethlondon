import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Support',
    },
  ],
  image: {
    src:"https://bafkreid2vop4cc6477aihn6mhn7mfky36j6rcwmaljka3jskgi3egcdua4.ipfs.nftstorage.link/",
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/details`,
});

export const metadata: Metadata = {
  title: 'Support your team frame',
  description: 'LFG',
  openGraph: {
    title: 'Support your team frame',
    description: 'Support your team frame',
    images: ["https://bafkreid2vop4cc6477aihn6mhn7mfky36j6rcwmaljka3jskgi3egcdua4.ipfs.nftstorage.link/"],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Heyyyyyyyyyyyyyy</h1>
    </>
  );
}
