import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import Head from 'next/head'
import { useSession } from "next-auth/react"
import { authOptions } from './api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
// import Report from '@/components/reportManage/Report'

export default function UserManage() {

  const { data: session } = useSession();

  return (
    <div className='h-screen '>
      <Head>
        <title>Automated Test Platform | User</title>
        <meta name="description" content="Automated test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className='grid h-full grid-cols-12 gap-0'>
        <div className='h-full col-span-2 bg-gradient-to-b from-dark to-dark-100'>
          <SideBar />
        </div>
        
        <div className='col-span-10'>
          <NavBar name={session.user.name}/>
          {/* <Report /> */}
        </div>
      </div>
    </div>
    
  )
}


export const getServerSideProps = async (context) => {
  
  const session = await getServerSession(
    context.req,
    context.res,
    authOptions
  )
  if (session) {
  
    return {
      props: {
        session:JSON.parse(JSON.stringify(session)),
      },
    };
  }
  else {    
    return {
      redirect:{
        destination:"/signIn",
        permamnent: false
      }
    }
  }
}
