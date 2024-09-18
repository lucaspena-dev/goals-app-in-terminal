import { select } from '@inquirer/prompts'

import { goals } from '../db'
import { showMessage } from '../utils'

export async function getListOfCompletedGoals() {
  if (goals.length === 0) {
    showMessage('Você ainda não criou uma meta!')
    return
  }

  const filteredCompletedGoals = goals.filter(goal => {
    return goal.checked === true
  })

  if (filteredCompletedGoals.length === 0) {
    showMessage('Você ainda não completou nenhuma meta! :(')
    return
  }

  await select({
    message: `'Metas completadas: ${filteredCompletedGoals.length}`,
    choices: [...filteredCompletedGoals],
  })

  return
}
