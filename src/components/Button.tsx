
type ButtonProps = {
    // event type with no paramenters or return type
    // handleClick: () => void
    // event type with event parameter and no return type
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
    return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>
}
