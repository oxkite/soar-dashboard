import { useRoutes } from 'react-router';

import CommonRoutes from './CommonRoutes';
import CoreRoutes from './CoreRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([CommonRoutes, CoreRoutes]);
}
// export default function App() {
//   let element = useRoutes([
//     {
//       path: '/',
//       element: '',
//     },
//   ]);

//   return element;
// }
