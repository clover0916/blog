import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import TopScreen from '../components/top-screen'

type Props = {
  allPosts: Post[],
}

export default function Index({ allPosts }: Props, { }) {
  const heroPost = allPosts[0]
  const subPosts = allPosts.slice(1, 3)
  const fullmorePosts = allPosts.slice(3)
  const morePosts = allPosts.slice(1)
  
  return (
    <>
      <Layout>
        <Head>
          <title>Clo.Mid</title>
        </Head>
        <Container>
          <TopScreen heroPost={heroPost} subPosts={subPosts} />
          <div>
            <div className='hidden lg:block'>
              {fullmorePosts.length > 0 && <MoreStories posts={fullmorePosts} />}
            </div>
            <div className='lg:hidden'>
              {morePosts.length > 0 && <MoreStories posts={morePosts} />}
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
