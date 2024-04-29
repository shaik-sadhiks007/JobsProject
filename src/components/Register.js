import { Link,useNavigate  } from "react-router-dom";
import {useForm} from 'react-hook-form';
import { JobsContext } from "./JobsContext";
import { useContext } from 'react';


function Register()
{
    const {register,handleSubmit,formState:{errors},watch} = useForm();
    const navigate = useNavigate();
    const passwordViewer = watch('password','');
    const hasUpperCase =(value)=>/[A-Z]/.test(value);
    const {credentials,setCredentials} = useContext(JobsContext);

    const registeredUser =(formData) =>
    {
        setCredentials([...credentials,formData])
        navigate('/login')
    }
    return(
        <div className="login-container">
        <form noValidate className="login-form" onSubmit={handleSubmit(registeredUser)}>
            <h1>Register</h1>
            <div className="mb-3">
                <input type="text" className="form-control"  placeholder="First Name" {...register('firstName',{required:true,minLength:3})}/>
                {errors.firstName?.type==='required' && <p className="text-danger mb-0 pb-0">Full name is mandatory</p>}
                {errors.firstName?.type==='minLength' && <p className="text-danger mb-0 pb-0">Min 3 characters</p>}
            </div>
            <div className="mb-3">
                <input type="text" className="form-control"  placeholder="Last Name" {...register('lastName',{required:true,minLength:3})}/>
                {errors.lastName?.type==='required' && <p className="text-danger mb-0 pb-0">Full name is mandatory</p>}
                {errors.lastName?.type==='minLength' && <p className="text-danger mb-0 pb-0">Min 3 characters</p>}
            </div>
            <div className="mb-3">
                <input type="email" className="form-control"  placeholder="Email" {...register('email',{required:true})}/>
                {errors.email?.type==='required' && <p className="text-danger mb-0 pb-0">Email is mandatory</p>}
            </div>
            <div className="mb-3">
                <input type="password" className="form-control"  placeholder="password" {...register('password',{required:true,validate:{
                    hasUpperCase:(value)=> hasUpperCase(value) || 'password contain atleast one capital letter'
                }})}/>
                {errors.password?.type==='required' && <p className="text-danger mb-0 pb-0">Password is mandatory</p>}
                {<p className="text-danger mb-0 pb-0">{errors.password?.message}</p>}
            </div>
            <div className="mb-3">
                <input type="password" className="form-control"  placeholder="Re-enter password" {...register('reEnterPassword',{required:true,validate:(value) => value===passwordViewer})}/>
                {errors.reEnterPassword?.type==='required' && <p className="text-danger mb-0 pb-0">Re-enter password is mandatory</p>}
                {errors.reEnterPassword?.type==='validate' && <p className="text-danger mb-0 pb-0">Re-enter password is not same</p>}
            </div>
            <div className="mb-3">
                <input type="text" className="form-control"  placeholder="Mobile" {...register('mobile',{required:true})}/>
                {errors.mobile?.type==='required' && <p className="text-danger mb-0 pb-0">Mobile No. is mandatory</p>}
            </div>
            <button type="submit">Register</button>
            <div className="bottom-text">
                <p>Already have an account? <Link to={'/login'}>Login</Link></p>
                <p><Link to='/'>Home</Link></p>
            </div>
        </form>
    </div>
    )
}

export default Register;