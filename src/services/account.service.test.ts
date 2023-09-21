import { AccountService } from './account.service'

describe('AccountService', () => {
    let accountService: AccountService
    
    beforeAll(() => {
        accountService = new AccountService()
    })

    it('should generate an Ethereum address from a valid public key', () => {
        const publicKey = '6ce4d193703c268ae99151c58558d49798b41edebdeca82b3b0e2565461fbfa4162bfa79d4ccb1cd8d5dc2e816e0dff58cfe7d399d1017019fe2db22a1544cda'
        const address = accountService.getByPublicKey(publicKey)
        
        expect(address).toMatch(/^0x[a-fA-F0-9]{40}$/)
    })

    it('should throw an error when the public key is not provided', () => {
        expect(() => {
            accountService.getByPublicKey('')
        }).toThrow('Public key is required')
    })
})
