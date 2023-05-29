import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./Pages/Faq";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import CareerLayout from "./layouts/CareerLayout";
import Careers, { dataLoader } from "./Pages/Careers";
import Details, { getDetails } from "./Pages/Details";
import DetailsErr from "./Pages/DetailsErr";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<HelpLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="careers" element={<CareerLayout />}>
          <Route
            index
            element={<Careers />}
            loader={dataLoader}
            errorElement={<DetailsErr />}
          />
          <Route
            path=":id"
            element={<Details />}
            loader={getDetails}
            errorElement={<DetailsErr />}
          />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
