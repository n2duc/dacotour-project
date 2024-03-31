import { Archivo } from "next/font/google";
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", });

const TourContentWrap = ({ id = null, title, children }) => {
  return (
    <div className="py-8 border-b border-gray-200" id={id}>
      <h4 className={`${archivo.variable} text-2xl font-bold text-black mb-6 capitalize font-archivo`}>{title}</h4>
      {children}
    </div>
  )
}

export default TourContentWrap;