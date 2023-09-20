import { AccountService } from './account.service'

describe('AccountService', () => {
    let accountService: AccountService
    let validAddressRegex: RegExp
    
    beforeAll(() => {
        accountService = new AccountService()
        validAddressRegex = /^0x[a-fA-F0-9]{40}$/
    })

    it('should generate an Ethereum address from a valid public key', () => {
        const publicKey = '04d3c1d3e46f5c26856967c77d55f14204a365811be0e88713a6165b9f789b03f98c208d2c8d22ee2b1d3a8755abefdd52b2d4a5c7e852495e15e6f07597bf3844'
        const address = accountService.getByPublicKey(publicKey)
        
        expect(address).toMatch(/^0x[a-fA-F0-9]{40}$/)
    })

    it('should generate correctly even if public key has RSA pattern string', () => {
        const publicKey = '-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEtVHz5PBmzAYxaj5xFz6R80CcsmXNYEOA\nTIH44A9MWOqkVK17us0DkfdbZguNQ1McItOjK3Mdj8F08Chi5IDRyA==\n-----END PUBLIC KEY-----\n'
        const address = accountService.getByPublicKey(publicKey)
        
        expect(address).toMatch(validAddressRegex)
    })

    it('should throw an error when the public key is not provided', () => {
        expect(() => {
            accountService.getByPublicKey('')
        }).toThrow('Public key is required')
    })
})
