import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { JobsContext } from "./JobsContext";
import { useContext } from 'react';

function Login() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [emailCheck, setEmailCheck] = useState(null);
    const [passwordCheck, setPasswordCheck] = useState(null);
    const { credentials, setIsLoggedIn,setUser } = useContext(JobsContext);

    const navigate = useNavigate();

    const loginUser = (formData) => {
        const validUser = credentials.find(eachUser => eachUser.email === formData.email && eachUser.password === formData.password);

        if (validUser) {
            const { firstName } = validUser;
            setUser(firstName); 
            navigate('/');
            setIsLoggedIn(true);
        } else {
            console.log('not valid');
        }

    }

    return (
        <div className="login-container" onSubmit={handleSubmit(loginUser)}>
            <form className="login-form">
                <h1>Welcome Back</h1>
                <p>Please login to your account</p>
                <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" {...register('email', { required: true })} />
                    {errors.email?.type === 'required' && <p className="text-danger mb-0 pb-0">Email is mandatory</p>}
                    {emailCheck && <p className="text-danger mb-0 pb-0">{emailCheck}</p>}
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" placeholder="password" {...register('password', {
                        required: true, validate: {
                            // hasUpperCase:(value)=> hasUpperCase(value) || 'password contain atleast one capital letter'
                        }
                    })} />
                    {errors.password?.type === 'required' && <p className="text-danger mb-0 pb-0">Password is mandatory</p>}
                    {<p className="text-danger mb-0 pb-0">{errors.password?.message}</p>}
                    {passwordCheck && <p className="text-danger mb-0 pb-0">{passwordCheck}</p>}
                </div>
                <button type="submit">Login</button>
                <div className="bottom-text">
                    <p>Don't have an account? <Link to={'/register'}>Sign Up</Link></p>
                    <p><Link to='/'>Home</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login;