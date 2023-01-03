import Avatar from './avatar'
import DateFormatter from './date-formatter'
import HeroImage from './hero-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className='flex-1'>
      <div className='flex flex-col h-full'>
        <div className="grow grid place-items-center">
          <HeroImage title={title} src={coverImage} slug={slug} />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 m-8">
          <div>
            <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
              <Link
                as={`/posts/${slug}`}
                href="/posts/[slug]"
                className="hover:underline"
              >
                {title}
              </Link>
            </h3>
            <div className="mb-4 md:mb-0 text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avatar name={author.name} picture={author.picture} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPost
