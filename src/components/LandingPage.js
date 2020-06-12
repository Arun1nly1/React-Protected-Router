import React from 'react'
import auth from './Auth'
const LandingPage = (props) => {
    const onClickHandler = () => {
        auth.login(() => {
        props.history.push("/app")})
    }

    return (
        <div>
            <h3>Landing page</h3>

            <button onClick={onClickHandler} >Login</button>

        </div >
    )
}
;
export default LandingPage
