import { Navigate } from "react-router-dom";

type Props = {
  children: React.JSX.Element;
};

const ProtectedRoute = ({ children }: Props) => {
  if (true) {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
