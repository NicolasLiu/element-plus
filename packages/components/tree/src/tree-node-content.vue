<script lang="ts">
// @ts-nocheck
import { defineComponent, h, inject } from 'vue'

import { useNamespace } from '@lkq-element-plus/hooks'
import type { ComponentInternalInstance } from 'vue'
import type { RootTreeType } from './tree.type'

export default defineComponent({
  name: 'ElTreeNodeContent',
  props: {
    node: {
      type: Object,
      required: true,
    },
    renderContent: Function,
  },
  setup(props) {
    const ns = useNamespace('tree')
    const nodeInstance = inject<ComponentInternalInstance>('NodeInstance')
    const tree = inject<RootTreeType>('RootTree')
    return () => {
      const node = props.node
      const { data, store } = node
      return props.renderContent
        ? props.renderContent(h, { _self: nodeInstance, node, data, store })
        : h('span', { class: ns.be('node', 'label') }, [
            tree.ctx.slots.default
              ? tree.ctx.slots.default({ node, data })
              : node.label,
          ])
    }
  },
})
</script>
