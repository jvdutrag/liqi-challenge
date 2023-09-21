import { SQSHandler } from 'aws-lambda'

import { KeyService, AccountService, TransactionService } from '../services'

const keyService = new KeyService()
const accountService = new AccountService()
const transactionService = new TransactionService(process.env.NODE_URL)

interface Transaction {
    to: string
    value: string
}

export const handler: SQSHandler = async (_event): Promise<void> => {
    try {
        for (const message of _event.Records) {
            const body = JSON.parse(message.body) as Transaction

            if (!body.to || !body.value) {
                throw new Error('Invalid message body')
            }

            const [privateKey, publicKey] = keyService.generateKeyPair()

            const accountAddress = accountService.getByPublicKey(publicKey)

            const signedTransaction = await transactionService.sign(accountAddress, body.to, body.value, privateKey)

            const transaction = await transactionService.send(signedTransaction)

            const result = {
                message: 'Transaction sent successfully',
                hash: transaction.transactionHash
            }

            console.log(JSON.stringify(result))
        }
    } catch (error) {
        console.log(`Failed to send transaction!`)
        console.log(error)
    }
}
