import axios from 'axios';
import { createContext, useEffect , useState } from 'react';

//create the context object using the createContext, it holds the data that you want to share across the app
export const UserContext =createContext()


// wrapping the whole application with userContextProvider

export function UserContextProvider({children}) {
    const[user , setUser] = useState(null);
    useEffect(() => {
        if(!user) {
             axios.get('/profile').then((data) => {
                  setUser(data.data)
             })
        }
    } , [])
    return(
        <>
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
        </>
    )
}

