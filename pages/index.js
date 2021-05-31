import Head from 'next/head'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'

import { getSortedPostsData } from '../lib/posts'

function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hello! I am Hardik Chopra, and undergrad from NIT Jalandhar</p>
        <Link href = "/posts/first-post">
          <a>Try to fetch some data from the json placeholder dummy data</a>
        </Link>
      </section>

      <section className={utilStyles.headingMd , utilStyles.padding1px}>
        <h2 className={utilStyles.headingLg}> Blog </h2>
        
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          
          ))}
        </ul>
      </section>
    
    </Layout>
  )
}

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();

  return({
        props : {
                  allPostsData
               }
  })
}

export default Home;