import { useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    // type assertion
    // const [ user, setUser ] = useState <AuthUser> ({} as AuthUser)

    const [ user, setUser ] = useState <AuthUser | null> (null)

    const handleLogin = () => {
        setUser({
            name: 'Peter',
            email: 'peter@example.dk'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User name is {user?.email}</div>
        </div>
    )
}
