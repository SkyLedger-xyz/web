import { BaseGoerli } from '@thirdweb-dev/chains';
import { ThirdwebSDK } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';

export class SkyLedgerSDK {
  protected readonly contractAddress: string;

  protected readonly thirdwebSDK: ThirdwebSDK;

  constructor(contractAddress: string) {
    this.contractAddress = contractAddress;

    this.thirdwebSDK = new ThirdwebSDK(BaseGoerli.chainId);
  }

  async getVerifierAddresses(): Promise<string[]> {
    const contract = await this.thirdwebSDK.getContract(this.contractAddress);
    return await contract.call('verifierAddresses', [0]);
  }

  async addVerificationAddress(address: string): Promise<any> {
    const contract = await this.thirdwebSDK.getContract(this.contractAddress);
    await contract.call('addVerificationAccount', [address]);
  }

  async removeVerificationAddress(address: string): Promise<any> {
    const contract = await this.thirdwebSDK.getContract(this.contractAddress);
    await contract.call('removeVerificationAccount', [address]);
  }

  async getAll(): Promise<any> {
    const contract = await this.thirdwebSDK.getContract(this.contractAddress);
    await contract.call('getAllLogItems', []);
  }

  async createLogItem(data: string): Promise<any> {
    await window.ethereum.request({ method: 'eth_requestAccounts' });

    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();

    const sdk = ThirdwebSDK.fromSigner(signer, BaseGoerli.chainId, {
      clientId: process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID,
    });
    const contract = await sdk.getContract(this.contractAddress);

    await contract.call('createLogItem', [data]);
  }
}
