import { createContext, useState, useContext, useEffect } from "react";
import { fetchUser } from '../services/user';

//  create context, assigning it to a variable. This grants access to the provider property of this hook.
const UserContext = createContext();

// Every react component contains a children property. The key value pair represents an array of the children components(nested or wrapped in the UserProvider component)
// We pass the children as a destructured prop here. It will be used in the function to pass the context state/data to the nested children when it's utilized in the flow of the app.
const UserProvider = ({children}) => {
    const [userObj, setUserObj] = useState({});

    useEffect(() => {
        fetchUser()
            .then((fetchedUser) => {
            setUserObj(fetchedUser);
            })
            .catch((error) => {
            throw new Error(`Error: ${error}`);
        })
    });

    return (
        // This block of code does a couple of things:
        // 1. We can attach/access/update the Provider property(and values) of the UserContext module/class, which can be accessed later on in the useUser hook.
        // 2. Now any nested children within this component will have access to the values of the provider.
        <UserContext.Provider value={{userObj, setUserObj}}>
        {children}
        </UserContext.Provider>
    )    
}

const useUser = () => {
    // pass UserContext into useContext hook. This grants us access to the provider property. 
    const context = useContext(UserContext);

    // IF a component attempts to access/call this hook from outside of the appropriate provider, it returns undefined.
    // We need to handle this occurance and offer corrective steps to the developers deploying this hook.
    if (context === undefined) {
        throw new Error('useUser hook must be decalred/called/accessed within the appropriate provider component.')
    }

    // return the context(values/data)
    // The data type returned here defines how we can access the values when it's called. 
    // In this case: context is an object, which is defined by the 'value' data type in the UserProvider fn.
    return context;
    // alternative approach.
    // return [context.userObj, context.setUserObj]
}

export {UserProvider, useUser}