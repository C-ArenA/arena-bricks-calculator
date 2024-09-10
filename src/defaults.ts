import { MeasurementOption, type Wall } from "./types/walls";

export const defaultWall: Wall = {
    width: 0,
    height: 0,
    area: 0,
    mortarJointWidth: 0.015,
    measurementOption: MeasurementOption.Dimensions,
}
