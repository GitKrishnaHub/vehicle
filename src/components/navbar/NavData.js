
import { AssignmentInd, CorporateFare, DirectionsBus, FormatListBulleted, Hail,Map, Window, Person, Route,Settings,Help} from '@mui/icons-material';
import DashboardHeader from '../header/dashboardheader/DashboardHeader'

export const  navData=[
    { lable:'Overview', path:'/Overview/', icon:<Window/> },
    { lable:'Organization', path:'/Organization', icon:<CorporateFare/> },
    { lable:'User', path:'/Users', icon:<Person/>},
    { lable:'User Role', path:'/Role', icon:<AssignmentInd/> },
    { lable:'Features', path:'/Feature', icon:<FormatListBulleted/> },
    { lable:'Stops', path:'/Stops', icon:<Hail/> },
    { lable:'Routes', path:'/Route', icon:<Route/> },
    { lable:'Vehicle', path:'/Vehicle', icon:<DirectionsBus/> },
    { lable:'Tracking', path:'/Tracking', icon:<Map/> },
];

export const setting=[
    { lable:'Setting',path:'/setting',icon:<Settings/>},
    { lable:'Help',path:'/help',icon:<Help/>},
]
 
