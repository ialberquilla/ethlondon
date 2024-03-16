import { ethers } from 'ethers';
import Stake from '../app/_contracts/stake'
import ERC20 from '../app/_contracts/erc20'

export function encode(args: any[]): string {
  const iface = new ethers.utils.Interface(Stake);
  const data = iface.encodeFunctionData('stake', args);
  return data;
}

export const encodeApprove = (args: any[]): string => {
  const iface = new ethers.utils.Interface(ERC20);
  const data = iface.encodeFunctionData('approve', args);
  return data;
}
