const Map = ({ children, text }) => {

    return (
        <div className="flex items-center bg-gray-200 rounded-md pl-6 pr-60 py-6 my-5 ml-7 mr-2">
            {children}
            <span className='text-center font-semibold text-xl text-black w-32'>{text}</span>
        </div>
    )
}
export default Map