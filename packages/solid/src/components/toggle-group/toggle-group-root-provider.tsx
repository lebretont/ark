import { mergeProps } from '@zag-js/solid'
import type { JSX } from 'solid-js'
import { createSplitProps } from '../../utils/create-split-props'
import { type PolymorphicProps, ark } from '../factory'
import type { UseToggleGroupReturn } from './use-toggle-group'
import { ToggleGroupProvider } from './use-toggle-group-context'

interface RootProviderProps {
  value: UseToggleGroupReturn
}

export interface ToggleGroupRootProviderBaseProps extends PolymorphicProps<'div'> {}
export interface ToggleGroupRootProviderProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    RootProviderProps,
    ToggleGroupRootProviderBaseProps {}

export const ToggleGroupRootProvider = (props: ToggleGroupRootProviderProps) => {
  const [{ value: toggleGroup }, localProps] = createSplitProps<RootProviderProps>()(props, [
    'value',
  ])
  const mergedProps = mergeProps(() => toggleGroup().getRootProps(), localProps)

  return (
    <ToggleGroupProvider value={toggleGroup}>
      <ark.div {...mergedProps} />
    </ToggleGroupProvider>
  )
}
