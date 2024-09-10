export const enum MeasurementOption {
  Area = 'Área',
  Dimensions = 'Dimensiones',
}

export type Wall = {
  width: number
  height: number
  area: number
  mortarJointWidth?: number
  measurementOption: MeasurementOption
}
