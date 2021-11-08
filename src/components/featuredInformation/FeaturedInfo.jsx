import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredInfo.css'

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,874</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="fmIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>


            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,874</span>
                    <span className="featuredMoneyRate">-41.4 <ArrowDownward className="fmIcon negative"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,874</span>
                    <span className="featuredMoneyRate">+5.4 <ArrowUpward className="fmIcon positive"/></span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
