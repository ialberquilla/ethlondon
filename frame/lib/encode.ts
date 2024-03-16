import { ethers } from 'ethers';
import Stake from '../app/_contracts/stake'

export function encode(args: any[]): string {
  const iface = new ethers.utils.Interface(Stake);
  const data = iface.encodeFunctionData('stake', args);
  return data;
}
