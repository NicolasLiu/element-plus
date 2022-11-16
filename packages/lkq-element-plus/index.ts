import installer from './defaults'
export * from '@lkq-element-plus/components'
export * from '@lkq-element-plus/constants'
export * from '@lkq-element-plus/directives'
export * from '@lkq-element-plus/hooks'
export * from '@lkq-element-plus/tokens'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
