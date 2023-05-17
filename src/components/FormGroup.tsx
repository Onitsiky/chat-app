import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface IFormGroup
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    inputType: string
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>
}

export function FormGroup(props: IFormGroup) {
    const { label, inputType, register, errors: _errors } = props
    const errors = _errors as {[key:string] : {message: string}};
    return (
        <div className="form-group-container">
            <label className="fg-label">{label}:</label>
            <input
                type={inputType}
                className="fg-input"
                {...register(label.toLowerCase())}
            />
            {errors[label.toLowerCase()] && <div>{errors[label.toLowerCase()].message}</div>}
        </div>
    )
}