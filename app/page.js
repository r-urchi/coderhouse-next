import Image from "next/image"

export const metadata = {
  title: 'Capellari - Home',
  description: 'Eectrodomésticos Capellari'
}

// export async function generateMetadata({params, searchParams}: any, parent: any) {
//   const id  = params.id 
//   const product = await fetch(`https://.../${id}`)
//   .then((res: any) => res.json())

//   return{
//     title: product.title,
//     description: product.description
//   }
// }

export default function Home() {
  return (
    <>
      <main className="container m-auto p-4 min-h-screen flex flex-col justify-start items-center">
        <h1 className="text-3xl md:text-6xl text-center text-gray-600 text-bold mt-4 mb-12">Electrodomésticos Capellari</h1>
        <hr />
        <Image
          alt="Logo"
          src={'/capellari.png'}
          width={300}
          height={300}
          priority
        />
        <p className="text-xs md:text-base text-center mt-8">Somos una empresa familiar que desde 1923 contamos con una larga tradición en la venta de electrodomésticos. <br />
          La pasión y el compromiso con la satisfacción del cliente y la excelencia en productos han sido nuestro sello distintivos a lo largo de los años.</p>
      </main>
    </>
  )
}
