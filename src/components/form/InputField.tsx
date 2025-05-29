import { type FieldValues, useController, type UseControllerProps } from 'react-hook-form'
import { Input } from '@/components/ui/input.tsx'
import React, { type ChangeEvent, useCallback } from 'react'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form.tsx'

export interface FormTextFieldProps<T extends FieldValues>
  extends Omit<UseControllerProps<T>, 'defaultValue'>,
    Omit<React.ComponentProps<typeof Input>, 'name'> {}

function InputField<T extends FieldValues>(props: FormTextFieldProps<T>) {
  const { name, control, className, ...inputProps } = props

  const {
    field: { onChange },
  } = useController({
    name,
    control,
  })

  const onChangeEvent = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (props.type === 'number') {
        onChange(event.target.valueAsNumber)
      } else {
        onChange(event.target.value)
      }
    },
    [onChange, props.type]
  )

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormControl>
            <Input
              {...inputProps}
              {...field}
              onChange={onChangeEvent}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputField
