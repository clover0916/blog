import Link from 'next/link'
import Image from 'next/image'

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
        width={"2000"}
        height={"2000"}
      />
    )
  } else {
    image = (
      <Image
        src={"/assets/noimage.svg"}
        alt={`Cover Image for ${title}`}
        className="dark:invert select-none duration-100 object-scale-down"
        width={"720"}
        height={"720"}
      />
    )
  }
  return (
    <>
      {slug ? (
        <Link as={`/posts/${slug}`} className="relative h-full w-full flex justify-center items-center overflow-hidden bg-gray-100 dark:bg-zinc-700 duration-100" href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
