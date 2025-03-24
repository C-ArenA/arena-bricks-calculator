import type { Brick } from '@/types/materials'
import { handleResponse } from './utils'
import type { SuccessfulApiResponse } from '@/types/api'

const BRICKS_CRUD_BASE_URL = import.meta.env.VITE_API_URL + '/v1/bricks'

export async function getBricks(): Promise<SuccessfulApiResponse<Brick[]>> {
  const response = await fetch(BRICKS_CRUD_BASE_URL)
  return await handleResponse(response)
}

export async function getBrick(id: number): Promise<SuccessfulApiResponse<Brick>> {
  const response = await fetch(BRICKS_CRUD_BASE_URL + '/' + id)
  return await handleResponse(response)
}

export async function createBrick(brick: Brick): Promise<SuccessfulApiResponse<Brick>> {
  const response = await fetch(BRICKS_CRUD_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: brick.name,
      description: brick.description,
      length_mm: brick.length,
      width_mm: brick.width,
      height_mm: brick.height,
    }),
  })
  return await handleResponse(response)
}

export async function updateBrick(brick: Brick): Promise<SuccessfulApiResponse<Brick>> {
  const response = await fetch(BRICKS_CRUD_BASE_URL + '/' + brick.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: brick.name,
      description: brick.description,
      length_mm: brick.length,
      width_mm: brick.width,
      height_mm: brick.height,
    }),
  })
  return await handleResponse(response)
}

export async function deleteBrick(id: number) {
  const response = await fetch(BRICKS_CRUD_BASE_URL + '/' + id, {
    method: 'DELETE',
  })
  return await handleResponse(response)
}
