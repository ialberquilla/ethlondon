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
    src:"https://bafkreihd3t3ycowal76otma3to6j7gr4bhb2d4gu2imlhvrgu575ozbtea.ipfs.nftstorage.link/",
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
    images: ["https://bafkreihd3t3ycowal76otma3to6j7gr4bhb2d4gu2imlhvrgu575ozbtea.ipfs.nftstorage.link/"],
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
