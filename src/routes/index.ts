import { useRoutes } from 'react-router';

import CommonRoutes from './CommonRoutes';
import CoreRoutes from './CoreRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([CommonRoutes, CoreRoutes]);
}

