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
      <img
        src={src}
        alt={`Cover Image for ${title}`}
        width={"auto"}
        height={"100%"}
      />
    )
  } else {
    image = (
      <img
        src={"/assets/noimage.svg"}
        alt={`Cover Image for ${title}`}
        className="dark:invert select-none duration-100 h-2/5"
        width={"auto"}
      />
    )
  }
  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} className="h-full w-full flex justify-center items-center overflow-hidden bg-gray-100 dark:bg-zinc-700 duration-100" href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
