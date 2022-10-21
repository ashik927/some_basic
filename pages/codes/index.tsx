import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'

interface Props {
  codes: {
    id: number,
    code: string,
  }[]
}
interface codesType {
  id: number,
  code: string,
}

const CodesPage: NextPage<Props> = ({ codes }) => {
  const { user, error, isLoading } = useUser()
  console.log("codes", codes)
  if (error) {
    return <p>There Was An Error ...</p>
  }
  if (isLoading) {
    return <p>Loading ...</p>
  }

  if (!user) {
    return <div>
      <p>You Are Authenticate Please Login</p>
      <a href="/api/auth/login">Login</a>
    </div>
  }

  const [codesValue, setCodes] = useState<codesType[]>(codes)
  const [searchValue, setSearchVale] = useState<string>("")

  useEffect(() => {
    setCodes(codesValue)
  }, [codes])



  const handleClick = () => {
    const result = codesValue.filter(codeFilter => codeFilter.code === searchValue)
    if (result.length > 0) {
      setCodes(result)
    } else {
      setCodes([])
    }
  }


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchVale(e.target.value)
}

return (
  <div className={styles.container}>
    <p>Secret Codes {user.name}</p>
    <Link href="api/auth/logout"><a>Log Out</a></Link>

    <input type="text" name="code" onChange={handleChange}></input>

    <button onClick={handleClick}>Click Me</button>

    {
      codesValue.map((codeValue, key) => <p>{key} :id:{codeValue.id},code:{codeValue.code}</p>)
    }
  </div>
)
}

export default CodesPage;

export const getServerSideProps = async (ctx: any) => {
  const res = await fetch("http://localhost:3000/api/codes", {
    headers: {
      Cookie: ctx.req.headers.cookie
    }
  })
  const { codes } = await res.json()
  if (!codes) {
    return {
      props: {
        codes: []
      }
    }
  } else {
    return {
      props: {
        codes
      }
    }
  }

}

// export const getServerSideProps = withPageAuthRequired({
//   async getServerSideProps() {
//     return {
//       props: {
//         codes: [
//           {
//             id: 1,
//             code: '123'
//           },
//           {
//             id: 2,
//             code: '122'
//           },
//           {
//             id: 3,
//             code: '133'
//           }
//         ]
//       }
//     }
//   }
// })

// export const getServerSideProps = () => {
//   return {
//     props: {
//       codes: [
//         {
//           id: 1,
//           code: '123'
//         },
//         {
//           id: 2,
//           code: '122'
//         },
//         {
//           id: 3,
//           code: '133'
//         }
//       ]
//     }
//   }
// }
