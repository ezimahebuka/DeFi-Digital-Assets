import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authToken = useSelector((state) => state.persisitedReducer.authToken);
  return authToken ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
