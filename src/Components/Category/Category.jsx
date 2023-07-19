import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../Hooks/UseMenu';
import CategoryData from '../CategoryData/CategoryData';


const Category = () => {
    const [menu] = UseMenu();
    // console.log(menu)
    const policeCar = menu.filter(item => item.subCategory === "Lego Police Car");
    const lamborghini = menu.filter(item => item.subCategory === "Lamborghini");
    const ferrari = menu.filter(item => item.subCategory === "Ferrari");
    const matchbox = menu.filter(item => item.subCategory === "Matchbox Police Cruiser");
    const porsche = menu.filter(item => item.subCategory === "Porsche")

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Police Car</Tab>
                    <Tab>Lamborghini Car</Tab>
                    <Tab>Ferrari</Tab>
                    <Tab>Matchbox Police Cruiser</Tab>
                    <Tab>Porsche</Tab>
                </TabList>
                <TabPanel>
                    {
                        policeCar.map(item => <CategoryData
                            key={item._id}
                            item={item}></CategoryData>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        lamborghini.map(item => <CategoryData
                            key={item._id}
                            item={item}></CategoryData>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        ferrari.map(item => <CategoryData
                            key={item._id}
                            item={item}></CategoryData>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        matchbox.map(item => <CategoryData
                            key={item._id}
                            item={item}></CategoryData>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        porsche.map(item => <CategoryData
                            key={item._id}
                            item={item}></CategoryData>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;