import { mergeProps } from '@zag-js/react'
import { type SelectHTMLAttributes, forwardRef } from 'react'
import { type PolymorphicProps, ark } from '../factory'
import { useSelectContext } from './use-select-context'

export interface SelectHiddenSelectBaseProps extends PolymorphicProps {}
export interface SelectHiddenSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    SelectHiddenSelectBaseProps {}

export const SelectHiddenSelect = forwardRef<HTMLSelectElement, SelectHiddenSelectProps>(
  (props, ref) => {
    const select = useSelectContext()
    const mergedProps = mergeProps(select.getHiddenSelectProps(), props)
    const isValueEmpty = select.value.length === 0

    return (
      <ark.select {...mergedProps} ref={ref}>
        {isValueEmpty && <option value="" />}
        {select.collection.toArray().map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </ark.select>
    )
  },
)
SelectHiddenSelect.displayName = 'SelectHiddenSelect'
