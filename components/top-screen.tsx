import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import PostPreview from '../components/post-preview'

const TopScreen = ({ heroPost, subPosts }) => {
  return (
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
          <div className='flex-1 h-full hidden duration-200 lg:flex flex-col gap-4 short:hidden'>
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
  )
}

export default TopScreen