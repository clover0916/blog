import SubAvatar from './sub-avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
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

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className='flex h-1/2 flex-col'>
      <div className={cn('grow flex-1 shadow-sm mb-2', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className='px-2'>
        <h3 className="text-3xl mb-1 leading-snug">
          <Link
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            className="hover:underline"
          >
            {title}
          </Link>
        </h3>
        <div className="text-lg mb-2">
          <DateFormatter dateString={date} />
        </div>
        <SubAvatar name={author.name} picture={author.picture} />
      </div>
    </section>
  )
}

export default PostPreview
