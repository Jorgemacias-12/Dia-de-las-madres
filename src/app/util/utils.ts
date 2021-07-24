export const setAppHeight = (routeNumber: number, AppRoot: HTMLElement) => {
  switch (routeNumber) {
    case 0:
      AppRoot.style.height = 'auto';
      break;
    case 1:
      AppRoot.style.height = '100vh';
      break;
    case 2:
      AppRoot.style.height = 'auto';
      break;
    case 3:
      AppRoot.style.height = '100vh';
      break;
  }
}
