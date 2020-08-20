import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard1392370Navigator from '../features/Dashboard1392370/navigator';
import Settings492369Navigator from '../features/Settings492369/navigator';
import EmailAuth592368Navigator from '../features/EmailAuth592368/navigator';
import BlankScreen092367Navigator from '../features/BlankScreen092367/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard1392370: { screen: Dashboard1392370Navigator },
Settings492369: { screen: Settings492369Navigator },
EmailAuth592368: { screen: EmailAuth592368Navigator },
BlankScreen092367: { screen: BlankScreen092367Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
