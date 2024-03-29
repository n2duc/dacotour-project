const TourContentWrap = ({ id = null, title, children }) => {
  return (
    <div className="py-8 border-b border-gray-200" id={id}>
      <h4 className="text-2xl font-bold text-black mb-6 capitalize">{title}</h4>
      {children}
    </div>
  )
}

export default TourContentWrap;