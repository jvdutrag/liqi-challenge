import * as crypto from 'crypto'

export class KeyService {
    public generateKeyPair(): [string, string] {
        const keyPair = crypto.generateKeyPairSync('ec', {
            namedCurve: 'secp256k1',
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem',
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem',
            },
        })

        return [keyPair.privateKey, keyPair.publicKey]
    }
}
