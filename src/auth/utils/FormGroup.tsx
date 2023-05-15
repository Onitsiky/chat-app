import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldValues } from 'react-hook-form'

interface IFormGroup
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: string
    inputType: string
    register: UseFormRegister<FieldValues>
}
export function FormGroup(props: IFormGroup) {
    const { label, inputType, register } = props
    return (
        <div className="form-group-container">
            <label className="fg-label">{label}:</label>
            <input
                type={inputType}
                className="fg-input"
                {...register(label.toLowerCase())}
            />
        </div>
    )
}
