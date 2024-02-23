import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

export function SearchUser() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('')
  

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/user/bulk?filter='+filter).then((response) => {
      setUsers(response.data.user);
    });
  }, [filter]);

  return (
    <div className="h-3/4 p-4">
      <div className="text-2xl font-medium">Users</div>
      <br />
      <input
        type="text"
        placeholder="Users" onChange={(e)=>{setFilter(e.target.value)}}
        className="w-full h-16 bg-transparent border-[#445D48] border-4 rounded-2xl p-4"
      />
      <div className="mt-4">
        {users.length > 0 ? (
          users.map((user) => (
            <User firstName={user.firstName} lastName={user.lastName} id={user._id} userName={user.username} />
          ))
        ) : (
          <div className='text-3xl font-semibold text-[#445D48]'>
            Apna kaam karo bahi iss naam ka koi nhi hai yaha
          </div>
        )}
      </div>
    </div>
  );
}

function User({ firstName, lastName, id, userName }) {
    const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div className="text-2xl items-center pb-2 flex font-semibold text-[#001524]">
        <div className="mr-2 border-[#292F36] flex justify-center items-center border-4 w-14 h-14 bg-[#445D48] text-[#001524] rounded-3xl">
          {firstName[0]}
        </div>
        {firstName} {lastName}
      </div>
      <button onClick={(e)=>{
        navigate("/send?id="+ id +"&name="+ firstName + "&lastName="+ lastName + "&userName=" + userName )
      }}
       className="bg-[#445D48] text-[#D6CC99] h-14 w-32 rounded-xl">
        Send money
      </button>
    </div>
  );
}
