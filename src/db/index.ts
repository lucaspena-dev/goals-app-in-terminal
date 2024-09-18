import fs from 'node:fs/promises'

type Goal = {
  value: string
  checked: boolean
}

export let goals: Goal[] = []

export async function loadingGoals() {
  try {
    const data = await fs.readFile('./src/db/goals.json', 'utf-8')
    goals = JSON.parse(data)

    return
  } catch (error) {
    goals = []

    return
  }
}

export async function saveGoal() {
  await fs.writeFile('./src/db/goals.json', JSON.stringify(goals, null, 1))
  return
}

export function deleteItems(itemsToDelete: string[]) {
  itemsToDelete.forEach(item => {
    goals = goals.filter(goal => {
      return goal.value !== item
    })
  })

  return
}
