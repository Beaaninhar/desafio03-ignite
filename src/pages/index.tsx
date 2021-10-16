/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import Head from 'next/head';
import Link from 'next/link';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { GetStaticProps } from 'next';
import Header from '../components/Header';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <main className={commonStyles.container}>
        <Header />

        <div className={styles.postsContainer}>
          <Link href="#">
            <a className={styles.postContent}>
              <strong>Como utilizar Hooks</strong>
              <span>Pensando em sincronização em vez de ciclos de vida.</span>
              <ul>
                <li>
                  <FiCalendar />
                  15 Mar 2021
                </li>
                <li>
                  <FiUser />
                  Joseph Oliveira
                </li>
              </ul>
            </a>
          </Link>

          <Link href="#">
            <a className={styles.postContent}>
              <strong>Como utilizar Hooks</strong>
              <span>Pensando em sincronização em vez de ciclos de vida.</span>
              <ul>
                <li>
                  <FiCalendar />
                  15 Mar 2021
                </li>
                <li>
                  <FiUser />
                  Joseph Oliveira
                </li>
              </ul>
            </a>
          </Link>

          <Link href="#">
            <a className={styles.postContent}>
              <strong>Como utilizar Hooks</strong>
              <span>Pensando em sincronização em vez de ciclos de vida.</span>
              <ul>
                <li>
                  <FiCalendar />
                  15 Mar 2021
                </li>
                <li>
                  <FiUser />
                  Joseph Oliveira
                </li>
              </ul>
            </a>
          </Link>
          <button type="button">Carregar mais posts</button>
        </div>

      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
