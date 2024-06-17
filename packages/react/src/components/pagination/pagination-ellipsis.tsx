import type { EllipsisProps } from '@zag-js/pagination'
import { mergeProps } from '@zag-js/react'
import { type HTMLAttributes, forwardRef } from 'react'
import { createSplitProps } from '../../utils/create-split-props'
import { type PolymorphicProps, ark } from '../factory'
import { usePaginationContext } from './use-pagination-context'

export interface PaginationEllipsisBaseProps extends EllipsisProps, PolymorphicProps {}
export interface PaginationEllipsisProps
  extends HTMLAttributes<HTMLDivElement>,
    PaginationEllipsisBaseProps {}

export const PaginationEllipsis = forwardRef<HTMLDivElement, PaginationEllipsisProps>(
  (props, ref) => {
    const [ellipsisProps, localProps] = createSplitProps<EllipsisProps>()(props, ['index'])
    const pagination = usePaginationContext()
    const mergedProps = mergeProps(pagination.getEllipsisProps(ellipsisProps), localProps)

    return <ark.div {...mergedProps} ref={ref} />
  },
)

PaginationEllipsis.displayName = 'PaginationEllipsis'
