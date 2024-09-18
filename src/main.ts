import { select } from '@inquirer/prompts'

import { showMessage } from './utils'
import { createGoal } from './features/create-goal'
import { getListGoals } from './features/get-list-goals'

async function start() {
  showMessage('Bem vindo(a) ao app de metas!')

  while (true) {
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

    switch (options) {
      case 'criar':
        await createGoal()
        break

      case 'listar':
        await getListGoals()
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
