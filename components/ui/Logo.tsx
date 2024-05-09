import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center mt-5">
        <div className="relative w-10 h-10 md:w-40 md:h-40">
            <Image 
                fill
                alt="Logotipó Fresh Coffe"
                src='/logo.svg'
            />
        </div>
    </div>
  )
}
