import React ,{useState} from 'react'
// import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate} from 'react-router-dom';
import Layout from '../../Layout/Layout';
import '../../styles/authStyle.css';

const Register = () => {

    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[phone,setPhone] = useState("")
    const[address,setAddress] = useState("")
    const navigate = useNavigate()


    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post('https://blogs-api1.onrender.com/api/v1/auth/register',
            {name,email,password,phone,address}
            );
            if(res.data.success){
                toast.success(res.data.message)
                setTimeout(()=>{navigate('/login')},2000)
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong')
        }

        

    }

    

    return (
        <Layout title={'Register'}>
        <div title={'Register'}>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                {/* <h4 className="title">REGISTER FORM</h4> */}
                <div class="txt" id="txt">
        <b>R</b><b>E</b><b>G</b><b>I</b><b>S</b><b>T</b><b>E</b><b>R</b>
</div>
<br />
                <div className="mb-3">
                        <input type="text" 
                        placeholder='Enter Your Name'
                        className="form-control"
                        onChange={(e)=>setName(e.target.value)}
                        value = {name}
                        />
                    </div>
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
                    <div className="mb-3">
                        <input type="text"
                         className="form-control" 
                         placeholder='Enter Your Phone No.'
                         onChange={(e)=>setPhone(e.target.value)}
                         value = {phone}
                          />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                         className="form-control"
                         placeholder='Enter Your Address'
                         onChange={(e)=>setAddress(e.target.value)}
                         value = {address}
                         />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">REGISTER</button>
                </form>
            </div>
        </div>
        </Layout>

    )
}

export default Register