import { useEffect,  useState } from "react";
import AllToysData from "./AllToysData";



const AllToys = () => {
    const [allToys, setAllToys] = useState([]);
   



    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    

    return (
        <div>
            <div>
                <h1 className="text-center font-bold text-xl text-amber-400 my-8">All Toys Collection</h1>
            </div>
           

            <div className="grid md:grid-cols-3">
                {
                    allToys.map(allToy => <AllToysData
                        key={allToy._id}
                        allToy={allToy}></AllToysData>)
                }
            </div>
        </div>

    );
};

export default AllToys;