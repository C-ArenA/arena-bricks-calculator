import ApiError from '@/errors/ApiError'
import {
  createBrick,
  deleteBrick,
  getBrick,
  getBricks,
  updateBrick,
} from '@/services/bricksService'
import type { Brick } from '@/types/materials'
import { defineStore } from 'pinia'
import { useToast } from 'primevue/usetoast'
import { computed, ref } from 'vue'

export const useBrickStore = defineStore('brick', () => {
  const toast = useToast()
  const bricks = ref<Brick[]>([])
  const selectedBrick = ref<Brick | null>(null)
  const createBrickDialog = ref(false)
  const editBrickDialog = ref(false)
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
      createBrickDialog.value = false
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Ladrillo creado',
      })
    } catch (error) {
      if (error instanceof ApiError) {
        toast.add({
          severity: 'error',
          summary: error.statusCode.toString(),
          detail: error.message,
        })
        return
      }
    }
  }
  const edit = async (brick: Brick) => {
    try {
      const json = await updateBrick(brick)
      bricks.value = bricks.value.map((b) => (b.id === json.data.id ? json.data : b))
      editBrickDialog.value = false
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Ladrillo actualizado',
      })
    } catch (error) {
      if (error instanceof ApiError) {
        toast.add({
          severity: 'error',
          summary: error.statusCode.toString(),
          detail: error.message,
        })
        return
      }
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
    createBrickDialog,
    editBrickDialog,
    load,
    get,
    add,
    edit,
    remove,
  }
})
