import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form'
import { ISignup } from '@/provider/userTypes'

interface IFormGroup
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    label: string
    inputType: string
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<ISignup>
}

export function FormGroup(props: IFormGroup) {
    const { label, inputType, register, errors } = props
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
