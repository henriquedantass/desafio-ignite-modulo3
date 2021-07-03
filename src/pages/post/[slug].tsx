import { GetStaticPaths, GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';
import Header from '../../components/Header';
import {AiOutlineCalendar} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';
import { BiTimeFive} from 'react-icons/bi';
interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

 export default function Post({post}:PostProps) {
    return (
      <>
      <Header/>
      <img src="/Banner.jpg" alt="banner" className={styles.banner} />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.header}>
            <strong>Criando um app CRA do zero</strong>
            <ul>
                <li>
                  <AiOutlineCalendar/> data
                </li>
                <li>
                  <BsFillPersonFill/> autor
                </li>
                <li>
                  <BiTimeFive/> 4min
                </li>
            </ul>
          </div>
          <article>
            <h1>Título do Post</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of 
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
              software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </article>
        </div>  
      </main>
      </>
    );
 }



//  export const getStaticPaths:GetStaticPaths = async () => {
//    const prismic = getPrismicClient();
//    const posts = await prismic.query();

    
//  };

//  export const getStaticProps:GetStaticProps = async context => {
//    const prismic = getPrismicClient();
//    const response = await prismic.getByUID();

//    return {
//      props {
//      }
//    }
//  };
