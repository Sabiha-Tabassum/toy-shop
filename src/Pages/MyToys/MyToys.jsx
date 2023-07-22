import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import MyToysData from "./MyToysData";
import Swal from "sweetalert2";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/addToy?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }, [])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/addToy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your data has been deleted successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        const remaining = myToys.filter(myToy => myToy._id !== id)
                        setMyToys(remaining);
                    }

                })
        }
    }

    return (
        <div className='max-w-5xl mx-auto'>
            <div className="overflow-x-auto w-full">
                <div>{myToys.length}</div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Email</th>
                           
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
                                handleDelete={handleDelete}

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