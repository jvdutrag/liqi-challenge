import { KeyService } from './key.service'

describe('KeyService', () => {
    let keyService: KeyService

    beforeAll(() => {
        keyService = new KeyService()
    })

    it('should generate a key pair with private and public keys', () => {
        const [privateKey, publicKey] = keyService.generateKeyPair()

        expect(privateKey).toBeDefined()
        expect(publicKey).toBeDefined()
    })
})
