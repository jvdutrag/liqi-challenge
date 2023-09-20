import * as crypto from 'crypto'

export class AccountService {
    public getByPublicKey(publicKey: string): string {
        if (!publicKey) {
            throw new Error('Public key is required')
        }

        const publicKeyBuffer = Buffer.from(publicKey, 'hex')
        const hash = crypto.createHash('sha3-256')
        hash.update(publicKeyBuffer.subarray(1))
        const addressBuffer = hash.digest().subarray(-20)
        return `0x${addressBuffer.toString('hex')}`
    }
}