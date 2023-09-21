
# Liqi Challenge
Desenvolvida a aplicação em duas etapas.

A primeira etapa foi a criação de uma API para gerar pares de chaves com o algoritmo Elliptic Curve Digital Signature (ECDSA) compatíveis com contas Ethereum e gerar endereço de contas EOA (External Owned Account). Foi também criado os testes unitários utilizando a biblioteca Jest.

Já a segunda etapa envolveu a criação de uma estrutura na AWS utilizando o Serverless Framework para construir uma função Lambda ativada com uma mensagem na fila SQS para consumir o código da API anteriormente criada e gerar uma transação na rede Ethereum utilizando um node da [Chainstack](https://chainstack.com/).

## Executando a aplicação
É extremamente recomendado rodar a aplicação de forma conteinerizada pois o Docker foi pré-configurado nesse projeto através do arquivo Dockerfile. Basta executar os seguintes comandos na pasta raiz do projeto:

```bash
  docker build -t liqui-challenge .
```

```bash
  docker run -p 3000:3000 -it liqui-challenge
```

## Testes
Os testes estão junto com o código fonte. Em um projeto maior eu preferia criar uma pasta separada para os testes, mas como o projeto é pequeno, achei melhor deixar tudo junto.

```bash
  npm run test
```
