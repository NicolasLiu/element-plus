import { componentSizeMap } from '@lkq-element-plus/constants'

import type { ComponentSize } from '@lkq-element-plus/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
