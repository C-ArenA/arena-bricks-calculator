import type { Brick } from '@/types/materials'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export const useProducedBrickStore = defineStore('producedBrick', () => {
  const router = useRouter()
  const producedBricks = ref<Brick[]>([])
  const fetchAll = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/v1/produced-bricks')
    if (response.ok) {
      const json = await response.json()
      producedBricks.value = json['data']
    } else {
      producedBricks.value = []
      router.push('/')
    }
  }
  const destroy = async (brick: Brick) => {
    return await fetch(import.meta.env.VITE_API_URL + '/v1/produced-bricks/' + brick.id, {
      method: 'DELETE',
    })
  }
  const create = async (brick: Brick) => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/v1/produced-bricks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: brick.id,
      }),
    })
    return response
  }
  return {
    producedBricks,
    fetchAll,
    destroy,
    create,
  }
  return {}
})
