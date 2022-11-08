
![Featured FilmeDom](src/assets/capa.png)

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=BLUE&style=for-the-badge)

![Badge Dependência AXIOS](http://img.shields.io/static/v1?label=DEPENDÊNCIAS&message=EM%20AXIOS&color=LIGHTGREY&style=for-the-badge)

![Badge Dependência TOSTIFY](http://img.shields.io/static/v1?label=DEPENDÊNCIAS&message=EM%20REACT-TOASTIFY&color=LIGHTGREY&style=for-the-badge)

![Badge Dependência PHOSPHOR](http://img.shields.io/static/v1?label=DEPENDÊNCIAS&message=EM%20PHOSPHOR-REACT&color=ORANGE&style=for-the-badge)

![Badge Dependência ROUTER DOM](http://img.shields.io/static/v1?label=DEPENDÊNCIAS&message=EM%20REACT-ROUTER-DOM&color=ORANGE&style=for-the-badge)


## Descrição do projeto
  **Refatoração**
-``API Fetch : Este projeto tem o objetivo de desenvolver habilidades de refatoração e adquirir conhecimento gradualmente de tecnologias atuais no mercado. Começando com consumo de api com fetch e api get em diversas páginas``
- ``API Axios : refatorando para consumo via axios com utilização de um arquivo único através de um slug e funções exportadas.``
-``CRUD : CRUD no localStorage``
- ``Redux`: Refatorar usando Redux alterando o fluxo de estado de componentes e dados da aplicação unidirecional.``
- ``CSS for SASS: Refatorar o CSS para Sass``

**Automação**
- ``Automação - Automação CI / CD: Github Actions``
- ``Heroku: Deploy no Heroku``
- ``Azure': Deploy no Azure``
- ``Github Pages: View Github Pages``
   
## 🔨Funcionalidades
  ![Filme Dom gif](src/assets/FilmeDom-8-November-2022.gif)
  
   - ``Funcionalidade 1 - Pegar filme da API do Tmdb.org`` - ``Funcionalidade 2 - Adicionar filme via id``
   - ``Funcionalidade 3 - Atualizar filme (não permiti que filmes já dicionados sejam duplicados)``
   - ``Funcionalidade 4 - Deletar filme``
   - ``Funcionalidade 5 - Mostra informações do filme via id``
   - ``Funcionalidade 6 - Reproduz o trailler do filme em outra página``
   - ``Funcionalidade 7 - Caroussel dos filmes`` 
   - ``Funcionalidade 8 - Atualização do Featured em timeout``
   - ``Funcionalidade 9- Todas as funcionalidades mostram visualmente sucesso ou falha da requisição.``

## ✔️ Técnicas e Tecnologias utilizadas
**Instalar o vite**
    - ``npm create vite@latest``

**Instalar react-router-dom**
    - ``npm i react-router-dom``

**Instalar o axios**
   - ``npm i axios``

**Instalar o Toastify**
    - ``npm install --save react-toastify``

**Instalar o phosphor-react**
  - ``npm install --save phosphor-react``

**Criar página no github pages com github actions**
  Veja na pasta [.github/workflows/ filmeDom.yml](https://github.com/haileicristina/filmeDom/tree/main/.github/workflows)
  - ``Crie uma branch nova chamada gh-pages``
  - ``Se você for usar o  deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY}} crie uma key SSH pública e privada``
    -- ``Insira a chave pública acessando Settings / Deploy Key``
    -- ``Insira a chave privada acessando Settings / Secrets``
  - ``Vá em Settings / Pages e em Branch selecione a branch gh-pages e save``
  - ``No package.json insira a homepage``
    {
      "name": "filmedom",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "homepage": "https://haileicristina.github.io/filmeDom/",
  ...
  }
  - ``deploy sua aplicação com os comandos padrão``
    -- ``git add .``
    -- ``git commit -m 'digite seu commit'``
    -- ``git push``
    Obs: caso seu arquivo yml tenha sido alterado e esteja diferente no seu repo local(PC) use o git pull origin main,e se houver algum conflito faça um git fetch.

**Github pages link**
[index](index.html)
[https://haileicristina.github.io/filmeDom/](https://haileicristina.github.io/filmeDom/)

## 📁 Acesso ao projeto
Acesse os arquivos do projeto [aqui](https://github.com/haileicristina/filmeDom)

