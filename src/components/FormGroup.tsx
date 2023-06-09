import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

interface IFormGroup
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    inputType: string
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors<FieldValues>,
    defaultValue?: string,
    readOnly?: boolean,
    name: string,
    formName: string
}

export function FormGroup(props: IFormGroup) {
    const { readOnly, defaultValue, label, inputType, register, errors: _errors, name, formName } = props
    const errors = _errors as {[key:string] : {message: string}};
    return (
        <div className="form-group-container p-1">
            <label className="fg-label">{label}:</label><br/>
            <input
                type={inputType}
                defaultValue={defaultValue}
                className={errors[formName]
                    ? "border-solid border-2 border-red-800 rounded-md p-1 w-full"
                    : "border-solid border-2 border-gray-600 rounded-md p-1 w-full"}
                {...register(formName)}
                readOnly={readOnly}
                placeholder={label}
                name={name}
            />
            {errors[formName] && <div className='text-red-900'>{errors[formName].message}</div>}
        </div>
    )
}