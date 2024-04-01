const Heading = ({ heading, description }) => {
  return (
    <>
      <div className="flex items-center justify-center mb-10">
        <div className="w-[250px] h-[2px] bg-slate-300"></div>
        <h2 className="uppercase mx-6 text-[2rem] text-secondary font-bold text-center">{heading}</h2>
        <div className="w-[250px] h-[2px] bg-slate-300"></div>
      </div>
      {description && <p className="text-center text-slate-300 text-lg">{description}</p>}
    </>
  )
}

export default Heading