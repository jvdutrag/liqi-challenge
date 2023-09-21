import Web3, { TransactionReceipt } from 'web3'
import { Transaction } from 'ethereumjs-tx'

export class TransactionService {
    private web3: Web3

    constructor(nodeUrl: string) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(nodeUrl))
    }

    async sign(from: string, to: string, value: string, privateKey: string): Promise<string> {
        try {
            const nonce = await this.getNonce(from)
            const gasPrice = await this.web3.eth.getGasPrice()
            const gasLimit = 21000

            const transaction = {
                to,
                nonce: this.web3.utils.numberToHex(nonce),
                value,
                gasPrice: this.web3.utils.numberToHex(gasPrice),
                gasLimit: this.web3.utils.numberToHex(gasLimit),
                data: '0x'
            }

            const tx = new Transaction(transaction)
            tx.sign(Buffer.from(privateKey, 'hex'))

            const serializedTx = tx.serialize()
            return `0x${serializedTx.toString('hex')}`
        } catch (error) {
            console.error(`Failed to sign transaction: ${error}`)
            throw error
        }
    }

    async send(signedTx: string): Promise<TransactionReceipt> {
        try {
            const receipt = await this.web3.eth.sendSignedTransaction(signedTx)
            console.log(`Transaction sent with hash: ${receipt.transactionHash}`)
            return receipt
        } catch (error) {
            console.error(`Failed to send transaction: ${error}`)
            throw error
        }
    }

    private async getNonce(address: string): Promise<bigint> {
        try {
            const nonce = await this.web3.eth.getTransactionCount(address)
            return nonce
        } catch (error) {
            console.error(`Failed to get nonce: ${error}`)
            throw error
        }
    }
}
