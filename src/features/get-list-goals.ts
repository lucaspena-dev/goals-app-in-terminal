import { checkbox } from '@inquirer/prompts'

import { goals } from '../db'
import { showMessage } from '../utils'

export async function getListGoals() {
  if (goals.length === 0) {
    showMessage('Você ainda não criou uma meta!')
    return
  }

  const answers = await checkbox({
    message:
      'Utilize as setas do seu teclado para navegar, "Espaço" para selecionar/desmarcar uma meta e "Enter" para prosseguir para a próxima etapa.',
    choices: [...goals],
    instructions: false,
  })

  for (let i = 0; i < goals.length; i++) {
    goals[i].checked = false
  }

  if (answers.length === 0) {
    showMessage('Nenhuma meta foi selecionada!')
    return
  }

  for (const answer of answers) {
    const findGoal = goals.find(goal => {
      return goal.value === answer
    })

    if (findGoal) {
      findGoal.checked = true
    }
  }

  showMessage('Meta(s) marcada(s) com sucesso!')
  return
}
