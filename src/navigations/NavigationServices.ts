import { CommonActions } from "@react-navigation/native";

let navigator: {
  navigate: (arg0: any, arg1: any) => any;
  dispatch: (arg0: CommonActions.Action) => any;
  goBack: () => any;
};

function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

function navigate(routeName: string, params: object = {}) {
  return navigator && navigator.navigate(routeName, params);
}

function goBack() {
  return navigator && navigator.goBack();
}

export default {
  setTopLevelNavigator,
  navigate,
  goBack,
};
