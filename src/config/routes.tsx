
import { Welcome } from '../views/Welcome'
import { First } from '../components/welcome/First'
import { Second } from '../components/welcome/Second'
import { Third } from '../components/welcome/Third'
import { Fourth } from '../components/welcome/Fouth'

export const routes = [
    {
        path: '/',
        redirect:'/welcome'
    },
    {
        path: '/welcome',
        component: Welcome,
        children: [
            {
                path: '',
                redirect:'/welcome/1'
            },
            {
                path: '1',
                component:First
            },
            {
                path: '2',
                component: Second
            },
            {
                path: '3',
                component: Third
            },
            {
                path: '4',
                component: Fourth
            }
        ]
    }
]

