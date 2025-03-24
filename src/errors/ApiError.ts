class ApiError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number) {
    super(message)
    this.name = 'Api Error'
    this.statusCode = statusCode
  }
}

export default ApiError
