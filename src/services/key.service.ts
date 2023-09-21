import * as crypto from 'crypto'
import * as ethUtil from 'ethereumjs-util'

export class KeyService {
    public generateKeyPair(): [string, string] {
        const privateKeyBytes = crypto.randomBytes(32)
        const privateKey = privateKeyBytes.toString('hex')

        const publicKey = ethUtil.privateToPublic(privateKeyBytes).toString('hex')

        return [privateKey, publicKey]
    }
}
