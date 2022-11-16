import { ElInfiniteScroll } from '@lkq-element-plus/components/infinite-scroll'
import { ElLoading } from '@lkq-element-plus/components/loading'
import { ElMessage } from '@lkq-element-plus/components/message'
import { ElMessageBox } from '@lkq-element-plus/components/message-box'
import { ElNotification } from '@lkq-element-plus/components/notification'
import { ElPopoverDirective } from '@lkq-element-plus/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
