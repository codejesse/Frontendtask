import React from "react";
import Table from "./Table";


const SitesList = ({info}) => {
    console.log(info)
    const sitesArray = info.map((site, i) => {
        return <Table 
        key={i} 
        id={info[i].id} 
        name={info[i].name} 
        Type={info[i].type} 
        Status={info[i].status} 
        />
    })

    return (
        <div>
            {sitesArray}
        </div>
    )
}
export default SitesList