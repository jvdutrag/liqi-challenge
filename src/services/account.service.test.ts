import { AccountService } from './account.service'

describe('AccountService', () => {
    let accountService: AccountService
    
    beforeAll(() => {
        accountService = new AccountService()
    })

    it('should generate an Ethereum address from a valid public key', () => {
        const publicKey = '308184020100301006072a8648ce3d020106052b8104000a046d306b0201010420ec87829b77987289c2645a5db1c82850f268e151a2793c192956c4ede0f3ad3ca1440342000402929851092555d7fb07e14ec93635f2547d0d9a5e9e6bb08ec52f8b0d9e6c01b95eb7bb170c24b1e966a4834d9051da8f42b94131523b99e823537d4afd8d9a'
        const address = accountService.getByPublicKey(publicKey)
        
        expect(address).toMatch(/^0x[a-fA-F0-9]{40}$/)
    })

    it('should throw an error when the public key is not provided', () => {
        expect(() => {
            accountService.getByPublicKey('')
        }).toThrow('Public key is required')
    })
})
