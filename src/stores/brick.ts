import type { Brick } from '@/types/materials'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useBrickStore = defineStore('brick', () => {
  const bricks = ref<Brick[]>([])
  const selectedBrick = ref<Brick | null>(null)
  const fetchAll = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/v1/bricks')
    if (response.ok) {
      const json = await response.json()
      bricks.value = json['data']
    }
  }
  const show = async (id: number) => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/v1/bricks/' + id)
    if (response.ok) {
      const json = await response.json()
      selectedBrick.value = json['data']
    }
    return response
  }
  return {
    fetchAll,
    bricks,
    selectedBrick,
    show,
  }
})
