import { buildProps } from '@lkq-element-plus/utils'

export const descriptionsRowProps = buildProps({
  row: {
    type: Array,
    default: () => [],
  },
} as const)
