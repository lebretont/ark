import { mergeProps } from '@zag-js/react'
import { type LabelHTMLAttributes, forwardRef } from 'react'
import { type PolymorphicProps, ark } from '../factory'
import { useSliderContext } from './use-slider-context'

export interface SliderLabelBaseProps extends PolymorphicProps {}
export interface SliderLabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    SliderLabelBaseProps {}

export const SliderLabel = forwardRef<HTMLLabelElement, SliderLabelProps>((props, ref) => {
  const slider = useSliderContext()
  const mergedProps = mergeProps(slider.getLabelProps(), props)

  return <ark.label {...mergedProps} ref={ref} />
})

SliderLabel.displayName = 'SliderLabel'
