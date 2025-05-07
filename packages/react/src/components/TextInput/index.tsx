import React, { ComponentProps, forwardRef } from 'react'
import { Input, Prefix, SizeVariants, TextInputContainer } from './styles'

export interface TextInputProps extends Omit<ComponentProps<typeof Input>, 'size'> {
  prefix?: string
  size?: SizeVariants
}

export const TextInput = forwardRef<React.ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, size = 'md', ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer size={size} {...props}>
        {!!prefix &&
          <Prefix>{prefix}</Prefix>
        }
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  })

TextInput.displayName = 'TextInput'
