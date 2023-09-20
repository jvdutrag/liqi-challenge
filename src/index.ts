import express, { Express, Response } from 'express'

import { KeyService, AccountService } from './services'

const app: Express = express()

app.use(express.json())

app.get('/', (_, res: Response) => {
    return res.send({
        version: '1.0.0'
    })
})

app.get('/key/pair', (_, res: Response) => {
    const [publicKey, privateKey] = new KeyService().generateKeyPair()

    return res.send({
        publicKey,
        privateKey
    })
})

app.post('/account/get-by-public-key', (req, res: Response) => {
    const publicKey = req.body.publicKey as string

    if (!publicKey) {
        return res.status(400).send({
            message: 'Missing public key'
        })
    }

    const address = new AccountService().getByPublicKey(publicKey)

    return res.send({
        address
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started at http://localhost:3000')
})
