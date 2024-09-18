import { select } from '@inquirer/prompts'

async function start() {
  const options = await select({
    message: 'Menu:',
    choices: [
      {
        name: 'Cadastrar meta',
        value: 'cadastrar',
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
      case 'cadastrar':
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
        console.log('Até a próxima!')
        return
    }
  }
}

start()
