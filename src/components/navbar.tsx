export default function Navbar() {
  return (
    <nav>
      <ul className = "flex flex-row justify-center mt-2 mb-2 ">
        <li className="text-center text-black font-bold bg-gray-200 w-32 h-8 flex justify-center items-center text-base mr-2  ">Home</li>
        <li className="text-center text-black font-bold bg-gray-200 w-32 h-8 flex justify-center items-center text-base mr-2  ">About Me</li>
        <li className="text-center text-black font-bold bg-gray-200 w-32 h-8 flex justify-center items-center text-base mr-2  ">Design</li>
        <li className="text-center text-black font-bold bg-gray-200 w-32 h-8 flex justify-center items-center text-base mr-2  ">Development</li>
        <li className="text-center text-black font-bold bg-gray-200 w-32 h-8 flex justify-center items-center text-base mr-2  ">Contact</li>
      </ul>
    </nav>
  )
}
