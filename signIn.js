import { useState } from "react";
import { HiFingerPrint, HiOutlineUser } from "react-icons/hi"
import styles from "../styles/signIn.module.css"
import Link from "next/link";
import { signIn } from "next-auth/react"
import { useFormik } from 'formik';
import { login_validate } from "@/lib/validate";
import { useRouter } from "next/router"

const SignIn = () => {
    const [show, setShow] = useState(false);
    
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
          userAccount: '',
          userPassword: '',
        },
        validate: login_validate,
        onSubmit,
      });

      async function onSubmit(values){
        const status =  await signIn('credentials', {
            redirect: false,
            name: values.userAccount,
            password: values.userPassword,
            callbackUrl: '/'
        });
        if(status.ok) {
            router.push(status.url);
        }
        else if(status.error){
            alert(status.error);
        }
      }
    return ( 
        <div className='grid grid-cols-12 gap-0 px-80 py-36'>
            <div className='flex flex-col items-center justify-center col-span-7 bg-white shadow-sm rounded-l-md'>
                <h1 className="mt-20 mb-8 text-xl font-bold">Sign in to Test Platform</h1>
                <form className='flex flex-col items-center justify-center w-2/3' onSubmit={formik.handleSubmit}>
                    <div className={styles.formStyle}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            className={styles.inputSytle}
                            {...formik.getFieldProps('userAccount')}
                            ></input>
                        <span>
                            <HiOutlineUser />
                        </span>

                    </div>
                    {formik.errors.username !== "" && formik.touched.username ? <span className="text-xs text-red-600">{formik.errors.username}</span> : <></>}

                    <div className={styles.formStyle}>
                        <input 
                            type={`${show ? "text" : "password"}`}
                            placeholder="Password" 
                            className={styles.inputSytle}
                            {...formik.getFieldProps('userPassword')}
                            ></input>
                            <span
                                className={styles.iconStyle} 
                                onClick={() => setShow(!show)}>
                                <HiFingerPrint />
                            </span>
                    </div>                    
                    {formik.errors.password !== "" && formik.touched.password ? <span className="text-xs text-red-600">{formik.errors.password}</span> : <></>}

                    <button 
                    type="submit" 
                    className="w-full py-1 mt-6 mb-4 text-center text-white rounded-md bg-gradient-to-r from-blue-300 to-blue-600 active:bg-graident-r active:from-blue-600 active:to-blue-700"
                   
                    >Sign In</button>
                    <p className="mb-20 text-xs text-gray-500">don't have an account? click the <b>Sign Up</b> on the right!</p>
                </form>
            </div>
            <div className='col-span-5 px-8 py-6 shadow-sm bg-gradient-to-br from-myRed to-myRed-100 rounded-r-md'>
                <div className="flex flex-row items-center justify-between flex-grow">
                    <p className="text-xl font-bold tracking-wider text-white">GBASE</p>
                    <Link href={"/signUp"} className="px-2 py-1 text-lg font-bold text-white border border-white rounded-md active:text-gray-600">Sign Up</Link>
                </div>
                <h1 className="text-2xl font-bold text-center text-white mt-14">Welcom to the Automated Test Platform</h1>
                <p className="px-4 mt-8 text-xs text-center text-white">Enter your personal info and begin the jurney with Automated Test Platform.</p>
            </div>
            
        </div>
     );
}
 
export default SignIn;