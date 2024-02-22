import { AssignmentInd, CorporateFare, DirectionsBus, FormatListBulleted, Hail,Map, Menu, Person, Route} from '@mui/icons-material';
import Dashboard   from '../../pages/dashboard/Dashboard';


export const  navData=[
    { lable:'Dashboard', key:'/home/dashboard', icon:<Menu/> },
    { lable:'User', key:'/user', icon:<Person/>},
    { lable:'Vehicle', key:'/vehicle', icon:<DirectionsBus/> },
    { lable:'Role', key:'/role', icon:<AssignmentInd/> },
    { lable:'Features', key:'/feature', icon:<FormatListBulleted/> },
    { lable:'Routes', key:'/route', icon:<Route/> },
    { lable:'Stops', key:'/stops', icon:<Hail/> },
    { lable:'Tracking', key:'/tracking', icon:<Map/> },
    { lable:'Organization', key:'/organization', icon:<CorporateFare/> },
]