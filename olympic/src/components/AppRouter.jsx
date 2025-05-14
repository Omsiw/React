import {Routes,Route} from 'react-router-dom';
import {routes} from "../utils/routes";

function AppRouter(){
    return(

<Routes>
    {routes.map((route,imdex)=>(
        <Route key={imdex} path={route.path} element={<route.element/>} />
    ))}
</Routes>
    );
}
export default AppRouter;