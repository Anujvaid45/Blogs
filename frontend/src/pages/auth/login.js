import {useState} from 'react'
import Layout from '../../Layout/Layout';
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate,useLocation} from 'react-router-dom';
import '../../styles/authStyle.css'
import { useAuth } from '../../context/auth';

const Login = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    // eslint-disable-next-line
    const {auth,setAuth,updateUser} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post('https://blogs-api1.onrender.com/api/v1/auth/login',
            {email,password}
            );
            if(res && res.data.success){
                toast.success(res.data.message)
                // setAuth({
                //     ...auth,
                //     user:res.data.user,
                //     token:res.data.token
                // })
                const userData = {
                    user: res.data.user,
                    token: res.data.token,
                };
                updateUser(userData);
                localStorage.setItem('auth',JSON.stringify(res.data))
                setTimeout(()=>{navigate(location.state || '/')},2000)
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }
    }
  return (
    <Layout title={'Login'}>
    <div title={'Login'}>
    <div className="form-container">
        <form onSubmit={handleSubmit}>
        {/* <h4 className="title">LOGIN</h4> */}
        <div class="txt" id="txt">
        <b>L</b><b>O</b><b>G</b><b>I</b><b>N</b>
</div>
<br />

            <div className="mb-3">
                <input type="email"
                 className="form-control" 
                 onChange={(e)=>setEmail(e.target.value)}
                 placeholder='Enter Your Email'
                 value = {email}
                 />
            </div>
            <div className="mb-3">
                <input type="password"
                 className="form-control"
                 placeholder='Enter Your Password'
                 onChange={(e)=>setPassword(e.target.value)}
                 value = {password}
                 />
            </div>

            <button type="submit" className="btn btn-primary">LOGIN</button>
        </form>
    </div>
</div>
</Layout>

  )
}

export default Login