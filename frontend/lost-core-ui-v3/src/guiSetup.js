import DashboardComponent from './containers/pipeline//running/RunningPipeline'
import StartPipelineComponent from './containers/pipeline//start/StartPipeline'
import LabelsComponent from './containers/Labels/Labels'
import WorkersComponent from './containers/Workers/WorkersTable'
import UsersComponent from './containers/Users/Users'
import AnnotationTableComponent from './containers/Annotation/AnnotationTable'
import SiaComponent from './containers/Annotation/SingleImageAnnotation'
import MiaComponent from './containers/Annotation/MultiImageAnnotation'

import {
    FaTachometerAlt,
    FaPlay,
    FaTag,
    FaCubes,
    FaUsers,
    FaPaintBrush
} from 'react-icons/fa'

const iconProps = {
    size: 20,
    className: 'c-sidebar-nav-icon',
    style: {
        marginRight: 10
        }
}


const Dashboard = {
    name: 'Dashboard',
    to: '/dashboard',
    component: DashboardComponent,
    icon: <FaTachometerAlt {...iconProps} />,
}

const TitlePipeline = {
    title: true,
    name: 'Pipelines'
}

const StartPipeline = {
    name: 'Start Pipeline',
    to: '/start_pipeline',
    component: StartPipelineComponent,
    icon: <FaPlay {...iconProps} />,
}

const TitleProject = {
    title: true,
    name: 'Project'
}

const Labels = {
    name: 'Labels',
    to: '/labels',
    component: LabelsComponent,
    icon: <FaTag {...iconProps} />,
}

const Workers = {
    name: 'Workers',
    to: '/workers',
    component: WorkersComponent,
    icon: <FaCubes {...iconProps} />,

}


const Users = {
    name: 'Users',
    to: '/users',
    component: UsersComponent,
    icon: <FaUsers {...iconProps} />,

}

const Annotation = {
    name: 'Annotation',
    to: '/annotation',
    component: AnnotationTableComponent,
    icon: <FaPaintBrush {...iconProps} />
}


const Sia = {
    path: '/sia',
    exact: false,
    component: SiaComponent
}

const Mia = {
    path: '/mia',
    exact: false,
    component: MiaComponent
}
const guiSetup = {
    additionalRoutes: [
        Sia,
        Mia
    ],
    Designer: {
        redirect: '/dashboard',
        navItems: [
            Dashboard,
            TitlePipeline,
            StartPipeline,
            TitleProject,
            Labels,
            Workers,
            Users,
            Annotation
        ]
    }
}


export default guiSetup