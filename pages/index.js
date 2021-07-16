import Head from 'next/head';
import useAuth from "./../hooks/useAuth";
/*import styles from '../styles/Home.module.css'*/

export default function Home() {

  const { user, signin } = useAuth();
  return (
    <div >
      <Head>
        <title>Macedo&Bezerra Advocacia</title>
        <link rel="icon" href="/ICONE.png" />
      </Head>

      <main>
        <button onClick={() => signin()} >entra com google</button>
      </main>


    </div>
  )
}
