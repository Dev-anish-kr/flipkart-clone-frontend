import React from 'react'
import CateTypeCard from './CateTypeCard'

const CateType = ({ catelog }) => {
    return (<>
        <div className='cate-type'>
            <div className="ct-top">
                <div className="ct-top-lft">
                    <h5 className='categ_type'>{catelog.category_type}</h5>
                    <p className='categ_disc'>{catelog.cate_discription}</p>
                </div>
                <button className='btn btn-primary'>VIEV ALL</button>
            </div>
            <hr />
            <div className="ct-bottom">
                {catelog.visibla_items?.map((item, idx) => {
                    return <CateTypeCard key={idx} item={item} />
                })}
            </div>
        </div>
        <hr style={{margin:"0 0.5rem",width:"auto"}} />
        </>
    )
}

export default CateType