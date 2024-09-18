## Sobre o projeto

Dependendo da maneira como você importa os icones do fontawesome, o bundle gerado no build pode ter apenas o icone usado ou ter todos os icones da lib. Este é um projeto para visualizar essa diferença

## Para testar

1. Rode

```bash
npm i
npm run build
```

2. Abra o `dist/report.html`, e veja que a lib do fontawesome(o free-solid-svg-icons), ""pesa"" mais ou menos 1MB
3. Abra o `src/App.js`, comente a linha 3 e descomente a linha 4. Estamos mudando a maneira como importamos o icone
4. Rode novamente o comando `npm run build`
5. Abra novamente o `dist/report.html` e veja que a lib do fontawesome esta pesando pouco mais de 100KB
