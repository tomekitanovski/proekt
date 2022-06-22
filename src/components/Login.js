import React, { useState } from "react";

 function Login() {
    const formDataInit = {
        email: "",
        password: ""
    };

    const [formData, setFormData] = useState(formDataInit);

    const submit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch('/api/v1/auth/login', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'content-type': 'application/json'
                }
            });
            if (!res.ok) {
                throw 'Error login in !'
            };
            let data = await res.json();
            localStorage.setItem('jwt', data.token)
        } catch (err) {
            alert(err)
        }
    };
    const inputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form onSubmit={submit}>
            <lable>
                <span>Email</span>
                <input type="email" name="email" value={formData.email} onChange={inputChange}></input>
            </lable>
            <label>
                <span>Password</span>
                <input type="password" name="password" value={formData.password} onChange={inputChange}></input>
            </label>
            <br />
            <br />
            <button type="submit">Login</button>
        </form>
    )
}
export default Login