// use NODE_ENV to not have to change config based on where it's deployed
export const NEXT_PUBLIC_URL =
  process.env.NODE_ENV == 'development' ? 'https://022d-213-152-241-52.ngrok-free.app' : '';
export const STAKE_ADDRESS = '0xcD3D5E4E498BAb2e0832257569c3Fd4AE439dD6f';
export const POOL_CONTRACT_ADDR = '0x4403B0F5cad1fbDe2a51117E01A153e4e825d094';
export const DYNAMIC_ENV_ID = '5988cdc2-0b71-4277-aba5-e0ecc7cab136';
export const DYNAMIC_API_KEY = process.env.NEXT_PUBLIC_DYNAMIC_API_KEY;
export const PIMLICO_API_KEY = process.env.NEXT_PUBLIC_PIMLICO_API_KEY;
export const STAKE_CONTRACT = process.env.STAKE_CONTRACT || '0x45dDAD031EA68009E42f8515029a34804B63C57D';
export const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY || '';
