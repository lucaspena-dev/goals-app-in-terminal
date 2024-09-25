import { select } from '@inquirer/prompts'

import { goals } from '../db'
import { showMessage } from '../utils'

export async function getListOfOpenedGoals() {
  if (goals.length === 0) {
    showMessage('Você ainda não criou nenhuma meta!')
    return
  }

  const filteredOpenedGoals = goals.filter(goal => {
    return goal.checked === false
  })

  if (filteredOpenedGoals.length === 0) {
    showMessage('Você não possuí metas em aberto! :D')
    return
  }

  await select({
    message: `Metas em aberto: ${filteredOpenedGoals.length}`,
    choices: [...filteredOpenedGoals],
  })

  return
}
