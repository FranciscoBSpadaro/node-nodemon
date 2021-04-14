# node-nodemon-sucrase-eslint
## install dependencies with yarn
## execute yarn dev
## nodemon monitora as mudanças no arquivo server.ts
## o sucrase transpila o codigo ts para js na pasta dist.
## eslint verifica o codigo por erros , usar extensao do eslint no vscode tambem e editar os settings do eslint
### comando para instalar os modulos do eslint :   yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
### yarn eslint --init  , selecionar , to check syntax , find problems , and enforce code style , java script modules , none of these, usando espao marcar node e desmarcar browser , popular , standart , javascript , yes . ele vai terminar instalando em npm , excluir o package.lock.json . e executar um novo yarn na pasta do projeto so para atualizar os modulos para o yarn.  é gerado um arquivo .eslintrc.js. alterar conforme esta no projeto atual.
### instalar prettier , ao salvar arquivos ele vai corrigir altomaticamente o codigo seguindo os parametros do eslint ,  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D  , depois so instalar a extensao do prettier , nao precisa colocar o prettier na configuraçao do eslintrc.js , na configuraçao do setting da extensão do prettier ativar a opçao require config
### modulos  yarn add express cors mongoose

esse modulos precisa do types para o ambiente de desenvolvimento caso ao contrario nao será possivel importar os modulos 

yarn add @types/express @types/cors @types/mongoose -D
### work in progress
### aula de https://www.youtube.com/watch?v=aTf8QTjw4RE
