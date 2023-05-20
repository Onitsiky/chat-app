import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { IAllUser } from '@/provider/Types'

export type IMember = {
    id: number,
    name: string
}

interface IFormSelect
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label: string
    register: UseFormRegister<FieldValues>,
    options: IAllUser
}
export function FormSelect(props: IFormSelect) {
    const { options , label, register} = props
    return (
        <div className="form-select-container p-1">
            <label className="fg-label">{label}:</label><br/>
            <select className='border-solid border-2 border-gray-600 rounded-md p-1 w-full'{...register(label.toLowerCase())} >
                {options?.users.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    )
}