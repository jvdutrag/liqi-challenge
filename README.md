
# Liqi Challenge
Desenvolvida API Rest com Express em TypeScript para gerar pares de chaves com o algoritmo Elliptic Curve Digital Signature (ECDSA) compatíveis com contas Ethereum e gerar endereço de contas EOA (External Owned Account) com base na chave gerada.

O desafio foi resolvido em duas etapas: a primeira foi a criação da API e dos testes unitários e a segunda foi a construção da arquitetura serverless na Amazon Web Services (AWS).

Os testes unitários foram feitos com a biblioteca Jest e os testes de integração com Supertest.

## Executando a aplicação
É extremamente recomendado rodar a aplicação de forma conteinerizada pois o Docker foi pré-configurado nesse projeto através do arquivo Dockerfile. Basta executar os seguintes comandos na pasta raiz do projeto:

```bash
  docker build -t liqui-challenge .
```

```bash
  docker run -p 3000:3000 -it liqui-challenge
```

## Testes
Os testes estão dentro da pasta ``test`` e foram criados utilizando a biblioteca chamada ``jest``.

Para executar todos os testes de uma única vez basta digitar na linha de comando:

```bash
  npm run test
```
