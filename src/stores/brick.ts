import {
  createBrick,
  deleteBrick,
  getBrick,
  getBricks,
  updateBrick,
} from '@/services/bricksService'
import type { Brick } from '@/types/materials'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useBrickStore = defineStore('brick', () => {
  const bricks = ref<Brick[]>([])
  const selectedBrick = ref<Brick | null>(null)
  const load = async () => {
    try {
      const json = await getBricks()
      bricks.value = json.data
    } catch (error) {
      console.error(error)
    }
  }
  const get = async (id: number) => {
    try {
      const json = await getBrick(id)
      selectedBrick.value = json.data
    } catch (error) {
      console.error(error)
    }
  }
  const add = async (brick: Brick) => {
    try {
      const json = await createBrick(brick)
      bricks.value.push(json.data)
    } catch (error) {
      console.error(error)
    }
  }
  const edit = async (brick: Brick) => {
    try {
      const json = await updateBrick(brick)
      bricks.value = bricks.value.map((b) => (b.id === json.data.id ? json.data : b))
    } catch (error) {
      console.error(error)
    }
  }
  const remove = async (id: number) => {
    try {
      await deleteBrick(id)
      bricks.value = bricks.value.filter((b) => b.id !== id)
    } catch (error) {
      console.error(error)
    }
  }
  return {
    bricks,
    selectedBrick,
    load,
    get,
    add,
    edit,
    remove,
  }
})
