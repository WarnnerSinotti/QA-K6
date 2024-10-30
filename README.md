# 🎉 Bem-vindo ao Projeto de Testes de Performance! 💻

Neste projeto, exploramos o desempenho e a resiliência da API, investigando até onde ela pode chegar e garantindo que esteja pronta para lidar com situações de alta carga. A missão é identificar pontos críticos, detectar gargalos e garantir que o sistema ofereça uma experiência robusta aos usuários.

O poderoso framework **k6** para realizar testes de carga e stress, capaz de analisar os limites de desempenho e capturando detalhes sobre o comportamento dos endpoints.

---

## 🚀 Framework k6

O **k6** é uma ferramenta de código aberto, leve e poderosa para testes de performance. Ideal para simular cargas realistas e obter insights precisos, o k6 nos permite realizar diferentes tipos de testes de carga para identificar e mitigar problemas antes que eles impactem os usuários.

### Tipos de Testes Realizados

-   **🧪 Teste de Carga (Load Test):** Avalia como o sistema responde a uma quantidade específica de usuários simulados, garantindo que ele suporte um volume esperado sem degradação.
-   **⚙️ Teste de Stress (Stress Test):** Leva o sistema ao limite, aumentando gradualmente a carga até identificar o ponto de falha. Esse teste é útil para entender a capacidade máxima da API e o comportamento sob pressão intensa.

-   **⚡ Teste de Pico (Spike Test):** Avalia a resiliência do sistema em picos repentinos de tráfego. Simula um aumento súbito e breve no volume de requisições para verificar a capacidade de resposta e recuperação do sistema.

-   **🔄 Teste de Resistência (Soak Test):** Mantém o sistema sob carga por um longo período para identificar possíveis vazamentos de memória ou degradação de desempenho ao longo do tempo.

Esses testes ajudam a garantir que nossa aplicação esteja pronta para oferecer uma experiência consistente e confiável, independentemente das demandas de uso.

---

## 📦 Configuração do Projeto

### Pré-Requisitos

-   **Node.js**: Para rodar o projeto, é necessário ter o [Node.js](https://nodejs.org/en/) (de preferência, a versão LTS).
-   **Git**: Utilizamos o [Git](https://git-scm.com/) para controle de versão. Recomendamos o uso do [GitHub Desktop](https://desktop.github.com/).
-   **Editor de Código**: Recomendamos o uso do [Visual Studio Code](https://code.visualstudio.com/) (VS Code) para edição de código, com as extensões sugeridas abaixo.

### 1. Instalação do K6

Siga os passos para instalar o k6 de acordo com o sistema operacional no link: [K6 Framework](https://grafana.com/docs/k6/latest/set-up/install-k6/).

---

### 2. Extensões Recomendadas para o VS Code 🔌

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
-   [Git Extension Pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.git-extension-pack)
-   [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

---

### 3. Instalação das Dependências 📥

Na **branch `develop`**, execute:

```bash
# Escolha o que se aplique ao seu caso
yarn install
# ou
npm install
# ou
pnpm install
```

---

### 4. Executando o Projeto ▶️

Crie um arquivo `.env` com base no `env.example` e solicite ao time os valores corretos.

Para iniciar o projeto, execute:

```bash
npm run test
```

Se tudo estiver correto, o projeto executará um teste simples no terminal 🚀.

---

# 🗂️ Estrutura de Pastas do Projeto

Este projeto esta estuturado as pastas da seguinte forma:


-   **📄 Data**: Contém arquivos JSON e outros dados para testes em massa, garantindo que os testes sejam executados com dados consistentes e variados.

-   **📜 Functions**: Armazena funções auxiliares para serem chamadas durante os testes, ajudando a otimizar o código e a modularizar as operações mais frequentes.

-   **📝 Reports**: Diretório de relatórios de testes, onde serão salvos os resultados das execuções, permitindo o monitoramento e análise dos resultados dos testes.

-   **🗒️ Tests**: Contém scripts e arquivos específicos dos testes, incluindo automações e validações, para garantir que o comportamento esperado da aplicação esteja sendo validado corretamente.

-   **🧰 Utils**: Armazena recursos e funções comuns a todo o projeto, como variáveis compartilhadas e funções de geração de dados (exemplo: `faker.js`), permitindo uma maior reutilização e consistência nos testes.


## Execução dos Testes

Os testes podem ser executados de duas maneiras:

### 1. Executar um Script Diretamente

Para executar um teste diretamente, você pode clicar no script desejado na interface do seu editor. Por exemplo, se você clicar no script de `test`, será executado um teste que realiza um método GET na API pública de teste.

### 2. Executar um Script definindo o caminho no terminal

Você pode executar um script de teste especificando o caminho para o arquivo com o seguinte comando:

```bash
k6 run tests/exemplo-test.js
```

## 📊 Relatórios em HTML e JSON

Após cada execução de teste K6, relatórios detalhados são gerados automaticamente na pasta `reports` em dois formatos:

-   **HTML**: Esse relatório fornece uma visão abrangente dos testes, exportada diretamente do web dashboard do K6. É ideal para análises visuais e pode ser facilmente compartilhado entre equipes para revisão detalhada.
-   **JSON**: Este arquivo JSON contém um resumo das principais métricas em um formato estruturado, adequado para processamento adicional, como geração de gráficos personalizados ou integração com ferramentas de análise.

### 📈 Visualização em Tempo Real

Durante a execução dos testes, é possível monitorar o progresso em tempo real pelo **web dashboard**, acessível em [http://127.0.0.1:5665/](http://127.0.0.1:5665/). O dashboard exibe métricas como taxas de erro, tempo de resposta e uso de recursos, permitindo identificar gargalos e falhas conforme os testes são executados.

## 📚 Documentação e Entendimento K6

A documentação do K6 fornece orientações detalhadas sobre como utilizar a ferramenta para realizar testes de carga e performance. Ela inclui informações sobre a instalação, configuração, execução de testes e interpretação dos resultados.

[Acesse a documentação completa](documentacao/README.md)

## 📜 Licença

- Este projeto é público, com o objetivo de compartilhar conhecimento e promover estudos. 
- O uso do projeto é de responsabilidade do usuário. 
- Todos os recursos utilizados são gratuitos e adequados para uso livre.


### 💻  QA Enginner

- Desenvolvido por **Warnner**