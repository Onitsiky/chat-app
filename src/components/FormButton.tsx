type IFormButton = {
    label: string,
    className?: string
}
export function SubmitFormButton(props: IFormButton) {
    const { label , className} = props
    return (
        <div className="form-button-container pt-3 pb-3">
            <button type="submit" className={className != null ? "fb-button border-2 border-solid border-gray-400 p-2 rounded-md text-md" + className : "fb-button border-2 border-solid border-gray-400 p-2 rounded-md text-md" }>
                {label}
            </button>
        </div>
    )
}