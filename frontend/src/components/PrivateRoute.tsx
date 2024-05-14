import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';


const PrivateRoute = () => {
  const { userInfo } = useSelector((state: IRootState) => state.auth);

  return userInfo ? <Outlet /> : <Navigate to='/login' replace />
}

export default PrivateRoute

// TODO: Make a more user friendly experience for the not-logged in