interface Props {
    prompt: string;
    placeholderText: string;
    children: string;
}

const Form = ({ prompt, placeholderText, children }: Props) => {
    return (
        <div style={{gap: "16px"}}>
            <h6>{prompt}</h6>
            <input type="text" placeholder={placeholderText}>{children}</input>
        </div>
    )
}

export default Form;