
# Liqi Challenge
Desenvolvida API Rest com Express em TypeScript para gerar pares de chaves com o algoritmo Elliptic Curve Digital Signature (ECDSA) compatíveis com contas Ethereum e gerar endereço de contas EOA (External Owned Account) com base na chave gerada.

O desafio foi resolvido em duas etapas: a primeira foi a criação da API e dos testes unitários e a segunda foi a construção da arquitetura serverless na Amazon Web Services (AWS).

Os testes unitários foram feitos com a biblioteca Jest.

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
