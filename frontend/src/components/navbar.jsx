


export function NavBar({userName}){
    return(
        <div id="navBar" className="bg-[#001524] h-20 text-white flex items-center justify-between p-4 font-medium " >
            <div className="text-3xl">
            Swift Wallet 
            </div>
            <div className="text-lg">
                Hello, {userName}
            </div>
            </div>
    )
}