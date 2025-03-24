export type SuccessfulApiResponse<T> = {
  data: T,
  message?: string
}
export type DestroyedApiResponse = {
  message: string
}
export type UnsuccessfulApiResponse = {
  message: string
}
