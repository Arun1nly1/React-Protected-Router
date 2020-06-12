import React from 'react'
import auth from "./Auth"
function AppLayout(props) {
    return (
        <div>
           <h3>App Layout</h3>
           <button onClick={() => {
            auth.logout(() => {  
                props.history.push("/")
            });
        } }
        >
            Logout
           </button >
        </div>
    )
}

export default AppLayout
