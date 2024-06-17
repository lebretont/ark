import { mergeProps } from '@zag-js/solid'
import type { JSX } from 'solid-js'
import { Show } from 'solid-js'
import { type PolymorphicProps, ark } from '../factory'
import { usePresenceContext } from '../presence'
import { useDatePickerContext } from './use-date-picker-context'

export interface DatePickerPositionerBaseProps extends PolymorphicProps<'div'> {}
export interface DatePickerPositionerProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    DatePickerPositionerBaseProps {}

export const DatePickerPositioner = (props: DatePickerPositionerProps) => {
  const api = useDatePickerContext()
  const presenceApi = usePresenceContext()
  const mergedProps = mergeProps(() => api().getPositionerProps(), props)

  return (
    <Show when={!presenceApi().unmounted}>
      <ark.div {...mergedProps} />
    </Show>
  )
}
