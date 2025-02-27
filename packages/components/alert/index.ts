import { withInstall } from '@lkq-element-plus/utils'

import Alert from './src/alert.vue'

export const ElAlert = withInstall(Alert)
export default ElAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'
