import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

type IFormButton = {
    label: string
}
export function SubmitFormButton(props: IFormButton) {
    const { label } = props
    return (
        <div className="form-button-container">
            <button type="submit" className="fb-button">
                {label}
            </button>
        </div>
    )
}
