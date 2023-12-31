import { HomeHashtag} from 'iconsax-react';
import { ReactNode, useEffect,  } from 'react';
import {
  Outlet,
  createBrowserRouter,
  useLocation,
  useNavigate,
} from 'react-router-dom';

import { MobileSideBar, Sidebar } from '../components';
import {
  Authentication,
  Dashboard,
  DecodeVIN,
ErrorElement,
VINForm
} from '../pages';

import AuthProvider from './auth_context';




interface Routes {
  index?: boolean;
  path?: string;
  errorElement?: ReactNode;
  element: ReactNode;
  icon?: ReactNode;
  label?: string;
  permissions?: Array<string>;
  children?: Array<Routes>;
}

export function Root() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const isAuthorised = localStorage.getItem('vin-access-token');
     if (!isAuthorised) navigate('/login');
    
  }, [navigate, pathname]);

  return (
    <AuthProvider>
    
      
          <div className="bg-sinbadKYC-background  h-[100vh] text-[#54565B] text-sm xl:text-base">
            <div className="w-full fixed z-50 p-3 flex items-center bg-sinbadKYC-darkgreen md:hidden ">
              <MobileSideBar />
              <h2 className="absolute flex items-center gap-1 left-[30%] font-bold text-2xl text-sinbadKYC-lemongreen">
              
             VIN
              </h2>
            </div>
            <div className="hidden md:block  bg-sinbadKYC-darkgreen shadow">
              <Sidebar />
            </div>
            <div className="w-full  h-[100vh] py-4 px-1 md:px-0 md:py-0">
              <Outlet />
            </div>
          </div>

    </AuthProvider>
  );
}

export const ROUTES: Routes[] = [
  {
    element: <Root />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        icon: (
          <HomeHashtag
       
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        element: <Dashboard />,
        label: 'Dashboard',
      },

      {
        path: '/decode_vin',
        icon: (
          <HomeHashtag
       
            className="md:h-[14px] md:w-[14px] 2xl:w-[25px] 2xl:h-[25px]"
          />
        ),
        element: <VINForm />,
        label: 'Decode-Vin',
      },

       {
        path: '/decoded_vin',
        element: <DecodeVIN />,
      },

     

    ],
  },
  {
    path: '/login',
    element: <Authentication />,
  },

];
const state = localStorage.getItem('decoded-arrays');
const loggedin_user = JSON.parse(state ?? '{}');

type Role = {
  name: string;
  id: number;
};

const isSysAdmin = loggedin_user?.roles?.find(
  (role: Role) => role.name === 'SYSADMIN'
);

const userPermissions = loggedin_user?.permissions?.map(
  (el: Record<string, any>) => el.name
);

const showRoute = (required_permissions: undefined | string[]) => {
  if (!required_permissions || isSysAdmin) return true;
  return required_permissions?.every((permission) => {
    return userPermissions?.includes(permission);
  });
};

interface ExtractPath {
  element: ReactNode;
  errorElement?: ReactNode;
  children?: Array<ExtractPath>;
  path?: string;
}

function extractPath({
  path,
  element,
  children,
  errorElement,
  permissions,
}: Routes) {
  const instance: ExtractPath = {
    element: showRoute(permissions) ? element : <ErrorElement />,
    path,
  };
  if (errorElement) instance['errorElement'] = errorElement;
  if (children) instance['children'] = children.map(extractPath);
  return instance;
}

interface Menu {
  icon: ReactNode;
  path: string;
  permissions: string[];
  label: string;
}

function extractMenu({ icon, path, label, permissions }: Partial<Menu>) {
  return showRoute(permissions) && icon
    ? {
        icon,
        path,
        label,
      }
    : [];
}
export const menu = ROUTES?.at(0)?.children?.flatMap(extractMenu);
export const routes = ROUTES.map(extractPath);
export const router = createBrowserRouter(routes);
