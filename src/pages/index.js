import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-full grid grid-cols-1 gap-4 place-content-center">
 	 <h1 class="text-center">Login</h1>	
	 <input class="text-black p-2 placeholder:text-black" type="text" id="username" placeholder="username"/>
     	 <input class="text-black p-2 placeholder:text-black" type="email" id="email" placeholder="email"/> 
	 <input class="text-black p-2 placeholder:text-black" type="password" id="password" placeholder="password"/>
     </div>
    </main>
  )
}
