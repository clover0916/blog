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

const MorePostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <li className='relative lg:h-48 h-28 py-4 first:pt-0 last:pb-0'>
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="absolute top-0 left-0 h-full w-full"
      />
      <div className='flex h-full'>
        <div className={' w-1/4 shrink-0 hidden md:block'}>
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <div className='flex-1 p-4 flex flex-col justify-evenly'>
          <div className='inline-flex items-baseline pb-1'>
            <h3 className="text-3xl lg:text-5xl pr-4 leading-snug hover:underline">
              <Link
                as={`/posts/${slug}`}
                href="/posts/[slug]"
                className="hover:underline"
              >
                {title}
              </Link>
            </h3>
            <div className="text-lg">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <SubAvatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </li>
  )
}

export default MorePostPreview
