import { AssignmentInd, CorporateFare, DirectionsBus, FormatListBulleted, Hail,Map, Window, Person, Route,Settings,Help} from '@mui/icons-material';


export const  navData=[
    { lable:'Overview', key:'/dashboard/', icon:<Window/> },
    { lable:'Organization', key:'/organization', icon:<CorporateFare/> },
    { lable:'User', key:'/user', icon:<Person/>},
    { lable:'User Role', key:'/role', icon:<AssignmentInd/> },
    { lable:'Features', key:'/feature', icon:<FormatListBulleted/> },
    { lable:'Stops', key:'/stops', icon:<Hail/> },
    { lable:'Routes', key:'/route', icon:<Route/> },
    { lable:'Vehicle', key:'/vehicle', icon:<DirectionsBus/> },
    { lable:'Tracking', key:'/tracking', icon:<Map/> },
];

export const setting=[
    { lable:'Setting',path:'/setting',icon:<Settings/>},
    { lable:'Help',path:'/help',icon:<Help/>},
]