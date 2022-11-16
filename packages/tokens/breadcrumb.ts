import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@lkq-element-plus/components/breadcrumb'

export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbKey')
