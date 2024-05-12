type MainTypes = {
  testId?: string;
};

type ThemeProviderType<Theme> = React.ComponentType<{
  children?: React.ReactNode;
  theme?: Theme;
}>;

enum AppStatuses {
  Ok = 'ok',
  Maintenance = 'maintenance',
  Upgrade = 'upgrade',
}

enum AppStatusFeature {
  On = 'on',
  Off = 'off',
}

enum BottomAlertTypes {
  Info = 'info',
  Error = 'error',
  Success = 'success',
  Warning = 'warning',
}

enum AppThemes {
  Dark = 'dark',
  Light = 'light',
}

export { AppStatuses, BottomAlertTypes, AppStatusFeature, AppThemes };

export type { ThemeProviderType };
export default MainTypes;
