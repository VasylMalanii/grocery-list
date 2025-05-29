import { type FieldValues, type UseControllerProps } from 'react-hook-form'
import { Checkbox } from '@/components/ui/checkbox.tsx'
import { FormControl, FormField, FormItem } from '@/components/ui/form.tsx'
import React from 'react'

export interface FormTextFieldProps<T extends FieldValues>
  extends Omit<UseControllerProps<T>, 'defaultValue'>,
    Omit<React.ComponentProps<typeof Checkbox>, 'name'> {}

function CheckboxField<T extends FieldValues>(props: FormTextFieldProps<T>) {
  const { name, control, className, ...checkboxProps } = props

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              {...checkboxProps}
            />
          </FormControl>
        </FormItem>
      )}
    />
  )
}

export default CheckboxField
