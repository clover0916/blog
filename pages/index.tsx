import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import SubPost from '../components/sub-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import PostPreview from '../components/post-preview'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0]
  const subPosts = allPosts.slice(1, 3)
  const morePosts = allPosts.slice(3)
  return (
    <>
      <Layout>
        <Head>
          <title>Clo.Mid</title>
        </Head>
        <Container>
          <div className='flex flex-col h-100svh'>
            <Intro />
            <section className='flex-1 shrink-0 p-8 pt-0'>
              <div className='lg:flex lg:gap-8 h-full'>
                {heroPost && (
                  <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}  
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                  />
                )}
                <div className='flex-1 h-full hidden lg:flex flex-col gap-4 short:hidden'>
                  {subPosts.map((post) => (
                    <PostPreview
                      key={post.slug}
                      title={post.title}
                      coverImage={post.coverImage}
                      date={post.date}
                      author={post.author}
                      slug={post.slug}
                      excerpt={post.excerpt}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
