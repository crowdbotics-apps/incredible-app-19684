import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CalendarView192372Navigator from '../features/CalendarView192372/navigator';
import Dashboard1392370Navigator from '../features/Dashboard1392370/navigator';
import EmailAuth592368Navigator from '../features/EmailAuth592368/navigator';
import BlankScreen092367Navigator from '../features/BlankScreen092367/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CalendarView192372: { screen: CalendarView192372Navigator },
Dashboard1392370: { screen: Dashboard1392370Navigator },
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
