import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  var image
  if (src) {
     image = (
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        width={720}
        height={1080}
      />
    )
  } else {
    image = (
      <img
        src={"/assets/noimage.svg"}
        alt={`Cover Image for ${title}`}
        className="dark:invert duration-100"
        width={"auto"}
        height={"100%"}
      />
    )
  }
  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} className="h-full w-full grid place-items-center bg-gray-100 dark:bg-zinc-700 duration-100" href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
