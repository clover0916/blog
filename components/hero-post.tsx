import Avatar from './avatar'
import DateFormatter from './date-formatter'
import HeroImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import cn from 'classnames'

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
    <section className='short:w-full lg:w-4/6 lg:row-span-2 h-full'>
      <div className='flex flex-col h-full'>
        <div className={cn('grow flex-1 shadow-sm', {
          'hover:shadow-lg transition-shadow duration-200': slug,
        })}>
          <HeroImage title={title} src={coverImage} slug={slug} />
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 p-4 pb-0">
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
