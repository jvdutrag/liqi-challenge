import * as ethUtil from 'ethereumjs-util'

export class AccountService {
    public getByPublicKey(publicKey: string): string {
        if (!publicKey) {
            throw new Error('Public key is required')
        }

        const address = ethUtil.publicToAddress(Buffer.from(publicKey, 'hex')).toString('hex')
        return `0x${address}`
    }
}