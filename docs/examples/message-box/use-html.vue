<template>
  <el-button text @click="open">Click to open Message Box</el-button>
</template>

<script lang="ts" setup>
import { ElMessageBox } from 'lkq-element-plus'

const open = () => {
  ElMessageBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
</script>
