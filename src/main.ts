import { select } from '@inquirer/prompts'

import { showMessage } from './utils'

async function start() {
  showMessage('Bem vindo(a) ao app de metas!')

  const options = await select({
    message: 'Menu:',
    choices: [
      {
        name: 'Criar uma nova meta',
        value: 'criar',
      },
      {
        name: 'Listar metas',
        value: 'listar',
      },
      {
        name: 'Listar metas completadas',
        value: 'completar',
      },
      {
        name: 'Listar metas em aberto',
        value: 'aberto',
      },
      {
        name: 'Deletar meta(s)',
        value: 'deletar',
      },
      {
        name: 'Sair',
        value: 'sair',
      },
    ],
  })

  while (true) {
    switch (options) {
      case 'criar':
        break

      case 'listar':
        break

      case 'completar':
        break

      case 'aberto':
        break

      case 'deletar':
        break

      case 'sair':
        showMessage('Obrigado por utilizar o nosso app, até a próxima!')
        return
    }
  }
}

start()
