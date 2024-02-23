import { NavBar } from "../components/navbar"
import { Balance } from "../components/balance"
import { SearchUser } from "./searchUser"
import axios from "axios"
import { useEffect, useState } from "react"
export function DashBoard(){
    const [balance, setBalance]  = useState(0)
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/accounts/balance",{headers:{
            Authorization: "Bearer " +localStorage.getItem("token")
        }}).then((response)=>{
            setBalance(response.data.balance)
            console.log(response)
        })
    },[balance])

    return(
        <div className="min-h-screen bg-gradient-to-b from-[#FDE5D4] to-[#D6CC99]" >
            <NavBar userName={'User'}/>
            <Balance Balance={balance} />
            <SearchUser />
        </div>
    )
}