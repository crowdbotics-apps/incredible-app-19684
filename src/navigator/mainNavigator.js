import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile183547Navigator from '../features/UserProfile183547/navigator';
import BlankScreen196558Navigator from '../features/BlankScreen196558/navigator';
import CalendarView192373Navigator from '../features/CalendarView192373/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile183547: { screen: UserProfile183547Navigator },
BlankScreen196558: { screen: BlankScreen196558Navigator },
CalendarView192373: { screen: CalendarView192373Navigator },

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
