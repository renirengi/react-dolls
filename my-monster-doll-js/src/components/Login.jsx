import React from 'react'
//import useAuth from '../hooks/useAuth'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios';
import bcrypt from 'bcryptjs'
//const LOGIN_URL = 'http://localhost:3000/users';

export default function Login() {
    //const { setAuth } = useAuth();
    const salt = bcrypt.genSaltSync(10);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = React.useRef();
    const errRef = React.useRef();

    const [user, setUser] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [errMsg, setErrMsg] = React.useState('');

    React.useEffect(() => {
        userRef.current.focus();
    }, [])

    React.useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:3000/users?userName=${user}`,
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            
            const match = await bcrypt.compare(pwd, response.data[0].password);
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            console.log(accessToken,roles)
            //setAuth({ user, pwd, roles, accessToken });
            if( match){            
            setUser('');
            setPwd('');
            navigate(from, { replace: true });
        }
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </section>

    )
}
