import { checkbox } from '@inquirer/prompts'

import { deleteItems, goals } from '../db'
import { showMessage } from '../utils'

export async function deleteGoals() {
  if (goals.length === 0) {
    showMessage('Você ainda não criou nenhuma meta!')
    return
  }

  const uncheckedGoals = goals.map(goal => {
    return goal
  })

  for (let i = 0; i < uncheckedGoals.length; i++) {
    uncheckedGoals[i].checked = false
  }

  const itemsToDelete = await checkbox({
    message:
      'Utilize as setas do seu teclado para navegar, "Espaço" para selecionar/desmarcar uma meta e "Enter" para prosseguir com a deleção (se a meta estiver marcada) da meta ou para voltar para o menu.',
    choices: [...uncheckedGoals],
    instructions: false,
  })

  if (itemsToDelete.length === 0) {
    showMessage('Nenhuma meta foi selecionada para a deleção!')
    return
  }

  deleteItems(itemsToDelete)

  showMessage('Meta(s) deletada(s) com sucesso!')
  return
}
