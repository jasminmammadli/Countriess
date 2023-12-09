import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, List,Image,Input } from 'antd';
const { Meta } = Card;
import './Country.css'

const Country = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data, console.log(res.data)))
    }, []);


    return (
        <div >
            <Input placeholder='Axtar' style={{width:"500px",display:"flex",margin:"50px auto "}}
            
            
            />
            <List
             grid={{
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
             }}
             >
            {
                data.map((item, index) => {
                    return (
                           <List.Item>
                            <Card
                                key={index}
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={<Image alt="example" src={item.flags.png} />}
                            >
                                <Meta title={item.name.common} description={item.capital} />
                            </Card>
                           </List.Item>
                    )
                })
            }
            </List>

        </div>
    )
}

export default Country