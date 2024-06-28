
const SearchBar = () => {
    return <div className="bg-black w-[95%] sm:1/2 md:w-2/3 lg:w-1/3 rounded-[9rem] px-6 py-4 flex flex-row items-center justify-between border border-grey-8 mb-4 self-center">
        <input className="text-xs capitalize text-white bg-black placeholder:text-white focus:outline-none w-full h-5" placeholder="Search" />
        <i className="search !border-grey-8 after:bg-grey-8 scale-150" />
    </div>
}

export default SearchBar