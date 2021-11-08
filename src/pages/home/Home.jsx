import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInformation/FeaturedInfo'
import './home.css'
import {data} from '../../dummyData'
import WidgetSmall from '../../components/widgetSm/WidgetSmall'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'
const Home = () => {
    
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={data} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}

export default Home
