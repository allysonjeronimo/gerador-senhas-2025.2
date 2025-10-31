import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/home'
import {Passwords} from './pages/passwords'

// Cria o BottomTabNagitator
const Tabs = createBottomTabNavigator()

// Cria a configuração de rotas
export function Routes(){
    return (
        <Tabs.Navigator>
            <Tabs.Screen
                name="home"
                component={Home}
            />
            <Tabs.Screen
                name="passwords"
                component={Passwords}
            />
        </Tabs.Navigator>
    )
}
