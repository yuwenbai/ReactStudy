import React from 'react'
import {AuthContext} from '../HookReducer'
export const ProviderLogin = () => {
    const { dispatch } = React.useContext(AuthContext);
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
      };
    const [data, setData] = React.useState(initialState);
    const handleInputChange = event => {
        setData({
          ...data,
          [event.target.name]: event.target.value
        });
      };

    const handleFormSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })
        fetch("https://hookedbe.herokuapp.com/api/login", {
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              username: data.email,
              password: data.password
            })
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
              throw res;
            })
            .then(resJson => {
              dispatch({
                  type: "LOGIN",
                  payload: resJson
              })
            })
            .catch(error => {
              setData({
                ...data,
                isSubmitting: false,
                errorMessage: error.message || error.statusText
              });
            });
        };

    return (
        <div>
                <h1>ProviderLogin</h1>
                <form onSubmit={handleFormSubmit}>
                <label htmlFor="email">
                    Email Address
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={data.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label htmlFor="password">
              Password
              <input
                type="password"
                value={data.password}
                onChange={handleInputChange}
                name="password"
                id="password"
              />
            </label>

            {data.errorMessage && (
              <span className="form-error">{data.errorMessage}</span>
            )}
            
            <button disabled={data.isSubmitting}>
              {data.isSubmitting ? (
                "Loading..."
              ) : (
                "Login"
              )}
            </button>

                </form>
        </div>
    )
}
export default ProviderLogin