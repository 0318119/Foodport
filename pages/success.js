/* eslint-disable react-hooks/rules-of-hooks */
import Header from './Header'
import "bootstrap/dist/css/bootstrap.min.css";
import { CheckCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import styles from '../styles/success.module.css'
import Head from 'next/head'

function success() {
  const router = useRouter()
  return (
    <>

      <div>
        <Header />

        <main className="container">
          <div className="row" id={styles.main_container}>
            <div className="col-lg-2"></div>
            <div className="col-lg-8" id={styles.container}>
              <CheckCircleIcon className={styles.img} />
              <h1 className={styles.text}>Thank you, your order had been confirmed!</h1>
              <p className="">Thank for your ordeing on my Amazon clone </p>
              <button onClick={() => router.push('/userorders')} className={styles.button}>Go to Order</button>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}

export default success