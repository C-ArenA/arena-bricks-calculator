import ApiError from '@/errors/ApiError'
import type { SuccessfulApiResponse } from '@/types/api'

export async function handleResponse<T>(response: Response): Promise<SuccessfulApiResponse<T>> {
  if (response.ok) {
    try{
      const json = await response.json()
      return json
    } catch (error) {
      const placeholder = {} as T
      return { data: placeholder }
    }
  } else {
    let message = ''
    try {
      const json = await response.json()
      message = json.message
    } catch (error) {
      message = response.statusText
    }
    throw new ApiError(message, response.status)
  }
}
