<template>
  <div
    :ref="composedDialogRef"
    :class="[
      ns.b(),
      ns.is('fullscreen', fullscreen),
      ns.is('draggable', draggable),
      ns.is('align-center', alignCenter),
      { [ns.m('center')]: center },
      customClass,
    ]"
    :style="style"
    tabindex="-1"
  >
    <header ref="headerRef" :class="ns.e('header')">
      <slot name="header">
        <span role="heading" :class="ns.e('title')">
          {{ title }}
        </span>
      </slot>
      <button
        v-if="showClose"
        :aria-label="t('el.dialog.close')"
        :class="ns.e('headerbtn')"
        type="button"
        @click="$emit('close')"
      >
        <el-icon :class="ns.e('close')">
          <component :is="closeIcon || Close" />
        </el-icon>
      </button>
    </header>
    <div :id="bodyId" :class="ns.e('body')">
      <slot />
    </div>
    <footer v-if="$slots.footer" :class="ns.e('footer')">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { ElIcon } from '@lkq-element-plus/components/icon'
import { FOCUS_TRAP_INJECTION_KEY } from '@lkq-element-plus/components/focus-trap'
import { useDraggable, useLocale } from '@lkq-element-plus/hooks'
import { CloseComponents, composeRefs } from '@lkq-element-plus/utils'
import { dialogInjectionKey } from '@lkq-element-plus/tokens'
import { dialogContentEmits, dialogContentProps } from './dialog-content'

const { t } = useLocale()
const { Close } = CloseComponents

defineOptions({ name: 'ElDialogContent' })
const props = defineProps(dialogContentProps)
defineEmits(dialogContentEmits)

const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey)!
const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY)!

const composedDialogRef = composeRefs(focusTrapRef, dialogRef)

const draggable = computed(() => props.draggable)
useDraggable(dialogRef, headerRef, draggable)
</script>
