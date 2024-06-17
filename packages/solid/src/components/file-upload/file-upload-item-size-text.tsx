import { mergeProps } from '@zag-js/solid'
import type { JSX } from 'solid-js'
import { type PolymorphicProps, ark } from '../factory'
import { useFileUploadContext } from './use-file-upload-context'
import { useFileUploadItemPropsContext } from './use-file-upload-item-props-context'

export interface FileUploadItemSizeTextBaseProps extends PolymorphicProps<'div'> {}
export interface FileUploadItemSizeTextProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    FileUploadItemSizeTextBaseProps {}

export const FileUploadItemSizeText = (props: FileUploadItemSizeTextProps) => {
  const fileUpload = useFileUploadContext()
  const itemProps = useFileUploadItemPropsContext()
  const mergedProps = mergeProps(() => fileUpload().getItemSizeTextProps(itemProps), props)

  return (
    <ark.div {...mergedProps}>{props.children || fileUpload().getFileSize(itemProps.file)}</ark.div>
  )
}
