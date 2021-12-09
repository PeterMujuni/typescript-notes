// props with strings, numbers & booleans
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedInd: boolean
}

export const Greet = (props: GreetProps) => {
    //if messageCount is not passed a value it gets 0
    const { messageCount = 0 } = props
    return (
        <div>
            <h2>
                {props.isLoggedInd ? `Welcome ${props.name}! You have ${messageCount} unread messages!` : `User is not logged in`}
            </h2>
        </div>
    )
}
