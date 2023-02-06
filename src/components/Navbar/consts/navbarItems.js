import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PublicIcon from '@mui/icons-material/Public';
import CodeIcon from '@mui/icons-material/Code';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon/>,
        label: 'Authentication',
        route: 'authentication'
    },
    {
        id: 1,
        icon: <StorageIcon/>,
        label: 'Database',
        route: 'database'
    },
    {
        id: 2,
        icon: <FolderOpenIcon/>,
        label: 'Storage',
        route: 'storage'
    },
    {
        id: 3,
        icon: <PublicIcon/>,
        label: 'Hosting',
        route: 'hosting'
    },
    {
        id: 4,
        icon: <CodeIcon/>,
        label: 'Functions',
        route: 'functions'
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon/>,
        label: 'Machine learning',
        route: 'machine-learning'
    },
]