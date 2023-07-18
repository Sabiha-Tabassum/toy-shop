import { useEffect, useState } from "react";
import AllToysData from "./AllToysData";


const AllToys = () => {
    const [allToys, setAllToys] = useState([]);

     useEffect(() => {
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(data => setAllToys(data))
     },[])

    return (
        <div className="grid md:grid-cols-3">
            {
                allToys.map(allToy => <AllToysData
                key={allToy._id}
                allToy={allToy}></AllToysData>)
            }
        </div>
    );
};

export default AllToys;