import { input } from '@inquirer/prompts'
import { createId } from '@paralleldrive/cuid2'

import { showMessage } from '../utils'
import { goals } from '../db'

export async function createGoal() {
  const goal = await input({
    message: 'Digite o título da meta a ser criada:',
  })

  if (goal.length === 0) {
    showMessage('O título da meta não pode ser vazio!')
    return
  }

  goals.push({
    id: createId(),
    value: goal,
    checked: false,
  })

  showMessage('Meta criada com sucesso!')
  return
}
