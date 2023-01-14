import Image from 'next/image'

const Loading = ({ Loaded }) => {
  return (
    <div className={`fixed ${Loaded > 0 ? "opacity-0" : "show"} z-50 duration-500 h-screen w-screen flex justify-center items-center bg-white dark:bg-zinc-900`}>
      <Image
        src={"/assets/C.M.webp"}
        alt={`Logo`}
        width={"480"}
        height={"480"}
        className="invert dark:invert-0"
        priority
      ></Image>
    </div>
  )
}

export default Loading