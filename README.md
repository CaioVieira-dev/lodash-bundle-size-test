## Sobre o projeto

Dependendo da maneira como você importa o lodash, o bundle gerado no build pode ter apenas as funções usadas no projeto ou todas as função da lib. Este é um projeto para visualizar essa diferença

## Para testar

1. Rode

```bash
npm i
npm run build
```

2. Abra o `dist/report.html`, e veja que a lib do lodash, ""pesa"" 136.96 KB
3. Abra o `src/App.js`, comente a linha 1 e descomente a linha 2. Estamos mudando a maneira como importamos a função "sum"
4. Rode novamente o comando `npm run build`
5. Abra novamente o `dist/report.html` e veja que a lib do lodash está pesando 943 B
6. Abra o `src/App.js`, comente a linha 2 e descomente a linha 3. Estamos mudando mais uma vez a maneira como importamos a função "sum"
7. Rode novamente o comando `npm run build`
8. Abra novamente o `dist/report.html` e veja que a lib do lodash está pesando 926 B
9. Abra o `src/App.js`, comente a linha 3 e descomente a linha 4. Estamos mudando pela ultima vez a maneira como importamos a função "sum"
10. Rode novamente o comando `npm run build`
11. Abra novamente o `dist/report.html` e veja que a lib do lodash está pesando 476 B
