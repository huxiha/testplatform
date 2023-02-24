import styles from "../styles/signIn.module.css"
import { useState } from "react";
import { HiFingerPrint, HiOutlineUser } from "react-icons/hi"
import Link from "next/link";
import { useFormik } from 'formik';
import { register_validate } from "../lib/validate"

const SignUp = () => {
    const [show, setShow] = useState({password: false,cPassword:false});
    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
          cPassword: '',
        },

        validate: register_validate,
        onSubmit,
       
      });

      
      async function onSubmit(values){
        const options = {
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(values)
          };
        const res = await fetch("http://localhost:3000/api/signup", options);
        const data = await res.json();
      }
         

    return ( 
        <div className='grid grid-cols-12 gap-0 px-80 py-36'>
            <div className='col-span-5 px-8 py-6 bg-gradient-to-br from-myRed to-myRed-100'>
                <div className="flex flex-row items-center justify-between flex-grow">
                    <p className="text-xl font-bold tracking-wider text-white">GBASE</p>
                    <Link href="/signIn" className="px-2 py-1 text-lg font-bold text-white border border-white rounded-md active:text-gray-600">Sign In</Link>
                </div>
                <h1 className="text-2xl font-bold text-center text-white mt-14">Welcom to the Automated Test Platform</h1>
                <p className="px-4 mt-8 text-xs text-center text-white">To test with our platform, please register with your personal info.</p>
            </div>
            <div className='flex flex-col items-center justify-center col-span-7 bg-white'>
                <h1 className="mt-20 mb-8 text-2xl font-bold">Create Account</h1>
                <form className='flex flex-col items-center justify-center w-2/3' onSubmit={formik.handleSubmit}>
                <div className={styles.formStyle}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className={styles.inputSytle}
                            {...formik.getFieldProps('username')}
                            ></input>
                            <span>
                                <HiOutlineUser />
                            </span>
                    </div>
                    {formik.errors.username !== "" && formik.touched.username ? <span className="text-xs text-red-600">{formik.errors.username}</span> : <></>}
                    <div className={styles.formStyle}>
                        <input 
                            type={`${show.password ? "text" : "password"}`}
                            placeholder="Password" 
                            className={styles.inputSytle}
                            {...formik.getFieldProps('password')}
                            ></input>
                            <span
                                className={styles.iconStyle} 
                                onClick={() => setShow({password: !show.password, cPassword: show.cPassword})}>
                                <HiFingerPrint />
                            </span>
                    </div>
                    {formik.errors.password !== "" && formik.touched.password ? <span className="my-1 text-xs text-red-600">{formik.errors.password}</span> : <></>}
                    <div className={`${styles.formStyle} mb-4`}>
                        <input 
                            type={`${show.cPassword ? "text" : "password"}`}
                            placeholder="Confirm password" 
                            className={styles.inputSytle}
                            {...formik.getFieldProps('cPassword')}
                            ></input>
                            <span
                                className={styles.iconStyle} 
                                onClick={() => setShow({password: show.password, cPassword: !show.cPassword})}>
                                <HiFingerPrint />
                            </span>
                    </div>
                    {formik.errors.cPassword !== "" && formik.touched.cPassword ? <span className="my-1 text-xs text-red-600">{formik.errors.cPassword}</span> : <></>}
                    <button type="submit" className="w-full py-1 mt-6 mb-4 text-center text-white rounded-md bg-gradient-to-r from-blue-300 to-blue-600 active:bg-graident-r active:from-blue-600 active:to-blue-700">Sign Up</button>
                    <p className="mb-20 text-xs text-gray-500">have an account? click the <b>Sign In</b> on the left!</p>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;