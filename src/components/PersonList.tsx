// array types
type PersonListProps = {
    names: {
        firstName: string
        lastName: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map((person) => {
                return (
                    <h2 key={person.firstName}>{person.firstName} {person.lastName}</h2>
                )
            })}
        </div>
    )
}
