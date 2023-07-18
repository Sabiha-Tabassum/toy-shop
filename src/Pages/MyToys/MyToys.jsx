import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import MyToysData from "./MyToysData";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addToy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }, [])

    return (
        <div className='max-w-5xl mx-auto'>
            <div className="overflow-x-auto w-full">
                <div>{myToys.length}</div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>email</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>deadline</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(MyToy => <MyToysData
                                key={MyToy._id}
                                MyToy={MyToy}
                                
                            >

                            </MyToysData>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;