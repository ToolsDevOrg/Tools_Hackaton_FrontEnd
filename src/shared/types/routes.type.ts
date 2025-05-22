import { ComponentType } from "react"
import { RootStackParamList } from "./root_stack.type"

export type RoutesTypes = {
  name: keyof RootStackParamList
  component: ComponentType<any>
  title?: string
}