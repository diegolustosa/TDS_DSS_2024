## npm init -y 
Isso serve para iniciar o package.json

## npm install express
Biblioteca que permite o acesso ao HTTP

## npm install body-parser
Faz a serialização do json. Converte o json para object e vice-versa.

## Criar arquivo Index.js
arquivo principal

# Comando de atalho para inicializar
Antes instale o nodemon -D, antes, instale -D para instalar nas dependências de desenvolvedor.
"start": "node index.js" no script do package.json

# Criar pasta nova Routes, padrão MVC
pasta revisao_api > node_modules / index.js / package-lock.json / package.json > routes / index.routes.js / pessoa.router.js

# Começa arrumando o index, depois a pasta Routes !! daí a pasta da controller

revisao_api --
              ->

                index.js

                routes -
                        -> index.routes.js
                        -> pessoa.router.js

                controller - 
                            -> pessoa.controller.js
                            -> profissional.controller.js
                            -> aluno.controller.js