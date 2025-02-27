<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, h, onMounted, reactive, ref } from 'vue'
import { pick } from 'lodash-unified'
import ElSelect from '@lkq-element-plus/components/select'
import ElTree from '@lkq-element-plus/components/tree'
import { useSelect } from './select'
import { useTree } from './tree'

export default defineComponent({
  name: 'ElTreeSelect',
  // disable `ElSelect` inherit current attrs
  inheritAttrs: false,
  props: {
    ...ElSelect.props,
    ...ElTree.props,
  },
  setup(props, context) {
    const { slots, expose } = context

    const select = ref<InstanceType<typeof ElSelect>>()
    const tree = ref<InstanceType<typeof ElTree>>()

    const key = computed(() => props.nodeKey || props.valueKey || 'value')

    const selectProps = useSelect(props, context, { select, tree, key })
    const treeProps = useTree(props, context, { select, tree, key })

    // expose ElTree/ElSelect methods
    const methods = reactive({})
    expose(methods)
    onMounted(() => {
      Object.assign(methods, {
        ...pick(tree.value, [
          'filter',
          'updateKeyChildren',
          'getCheckedNodes',
          'setCheckedNodes',
          'getCheckedKeys',
          'setCheckedKeys',
          'setChecked',
          'getHalfCheckedNodes',
          'getHalfCheckedKeys',
          'getCurrentKey',
          'getCurrentNode',
          'setCurrentKey',
          'setCurrentNode',
          'getNode',
          'remove',
          'append',
          'insertBefore',
          'insertAfter',
        ]),
        ...pick(select.value, ['focus', 'blur']),
      })
    })

    return () =>
      h(
        ElSelect,
        /**
         * 1. The `props` is processed into `Refs`, but `v-bind` and
         * render function props cannot read `Refs`, so use `reactive`
         * unwrap the `Refs` and keep reactive.
         * 2. The keyword `ref` requires `Ref`, but `reactive` broke it,
         * so use function.
         */
        reactive({
          ...selectProps,
          ref: (ref) => (select.value = ref),
        }),
        {
          ...slots,
          default: () =>
            h(
              ElTree,
              reactive({
                ...treeProps,
                ref: (ref) => (tree.value = ref),
              })
            ),
        }
      )
  },
})
</script>
