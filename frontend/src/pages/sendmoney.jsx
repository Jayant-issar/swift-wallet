import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SendMoney(){
    const location = useLocation();
    const paramName = new URLSearchParams(location.search);
    const reciverName = paramName.get('name') //this to get the name of the reciver from the query and use it to show the name on the send money
    const lasntName = paramName.get('lastName')
    
    return(
        <div className="min-h-screen bg-gradient-to-b from-[#E9E6DD] to-[#C4AD9D] flex justify-center items-center pb-8">
            <div className="border-black border-2 h-96 w-2/5 rounded-xl" >
                <div className="flex justify-center items-center h-1/5 text-4xl font-bold" >Send Money</div>
                <NameComponet reciverName={reciverName} lasntName={lasntName} />
                <Amount/>
                 
            </div>
            
        </div>
    )
}


function NameComponet({reciverName, lasntName}){
    

    return(
        <div className="flex justify-center items-center text-3xl h-1/5" >
            <div className="mr-2 border-[#292F36]  flex justify-center items-center border-4 w-14 h-14 bg-[#445D48] text-[#FAF5F1] rounded-3xl">
                {reciverName[0]}
            </div>
            <div>
                {reciverName} {lasntName}
            </div>
        </div>
    )
}

function Amount(){
    const location = useLocation();
    const paramName = new URLSearchParams(location.search);
    const reciverId = paramName.get('id')
    const userName = paramName.get('userName')
    const [amount, setamount] = useState(0)
    const navigate = useNavigate();
    return(
        <div className="h-36 flex justify-center flex-col items-center " >
            <div className="text-xl font-semibold"
            >Ammount (in rs)</div>
            <input type="text" placeholder="Enter Amount" 
            onChange={(e)=>{
                setamount(e.target.value)
            }}
            className="h-10 bg-transparent border-[#445D48] border-2 w-1/2 rounded-lg " />

                <div className="flex justify-center pt-2">
                    <button  className="bg-[#445D48] rounded-lg text-[#FDE5D4] h-10 w-32 "
                    onClick={()=>{
                        axios.post("http://localhost:3000/api/v1/accounts/transfer",{
                            to:reciverId,
                            amount: amount
                        },{
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        }
                        )
                        navigate('/dashboard')
                    }}
                    >Send Money</button>
                </div> 
        </div>
    )
}