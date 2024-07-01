import React from 'react'
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form';
// /////////////////////////////////////////
import bcrypt from 'bcryptjs'
///////////////////////////////////////////
import { Check, X, InfoCircleFill } from 'react-bootstrap-icons';
import { addUser } from '../services/userService';
import { FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap';


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function Register() {
    const salt = bcrypt.genSaltSync(10);

    const userRef = React.useRef();
    const passwordRef = React.useRef();
    const errRef = React.useRef();
    const [userName, setUserName] = React.useState('');
    const [validName, setValidName] = React.useState(false);
    const [userFocus, setUserFocus] = React.useState(false);

    const [password, setPassword] = React.useState('');
    const [validPwd, setValidPwd] = React.useState(false);
    const [pwdFocus, setPwdFocus] = React.useState(false);

    const [matchPwd, setMatchPwd] = React.useState('');
    const [validMatch, setValidMatch] = React.useState(false);
    const [matchFocus, setMatchFocus] = React.useState(false);

    const [errMsg, setErrMsg] = React.useState('');
    const [success, setSuccess] = React.useState(false);

    React.useEffect(()=>{
        userRef.current.focus()
    },[])
    
    React.useEffect(() => {
        setValidName(USER_REGEX.test(userName));
    }, [userName, validName])

    React.useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(userName);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const hashedPassword = bcrypt.hashSync(password, salt);

            await addUser({userName, password:hashedPassword})
            
            setSuccess(true);
            setUserName('');
            setPassword('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
               alert('No Server Response');
            } else if (err.response?.status === 409) {
                alert('Username Taken');
            } else {
                alert('Registration Failed')
            }
            errRef.current.focus();
        }
    }


  return (
    <div className='register container'>
      {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <Link to="/">Sign In</Link>
                    </p>
                </section>
            ) : (
                <section>
                    {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                    <h1 className='register_title'>Register</h1>
                    
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                            Username:
                            {(!validName || !userName) ?  <X color="red" size={25}/> : <Check color="#9c7c38" size={25}/>}
                        </Form.Label>
                        <Form.Control
                            type="text"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        <FormText id="uidnote" className={userFocus && userName && !validName ? "instructions" : "offscreen"}>
                            <InfoCircleFill color="#9c7c38" size={25}/> 
                            4 to 24 characters. Must begin with a letter. Letters, numbers, underscores, hyphens allowed.
                        </FormText>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <FormLabel>
                            Password:
                            {!validPwd || !password ? <X color="red" size={25}/> : <Check color="#9c7c38" size={25}/> }
                        </FormLabel>
                        <Form.Control
                            type="password"
                            ref={passwordRef}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <FormText id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <InfoCircleFill color="#9c7c38" size={25}/>
                            8 to 24 characters. Must include uppercase and lowercase letters, a number and a special character.
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </FormText>
                        </Form.Group>

                        <FormGroup className="mb-3" controlId="formBasicConfirmPassword">
                        <FormLabel>
                            Confirm Password:
                            {(!validMatch || !matchPwd) ? <X color="red" size={25}/> :<Check color="#9c7c38" size={25}/>}
                        </FormLabel>
                        <FormControl
                            type="password"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        <FormText id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <InfoCircleFill color="#9c7c38" size={25}/>
                            Must match the first password input field.
                        </FormText>
                        </FormGroup>

                        <button className='button'  disabled={!validName || !validPwd || ! validMatch}>Sign Up</button>
                    </Form>
                    <p>
                        Already registered?<br />
                        <span className="line">
                            <Link to="/">Sign In</Link>
                        </span>
                    </p>
                </section>
            )}
    </div>
  )
}
