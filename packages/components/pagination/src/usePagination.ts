import { inject } from 'vue'
import { elPaginationKey } from '@lkq-element-plus/tokens'

export const usePagination = () => inject(elPaginationKey, {})
