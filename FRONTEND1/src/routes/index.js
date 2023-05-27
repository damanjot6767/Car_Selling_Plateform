import React, {useState} from 'react'
import {Routes, Router, Route, Navigate} from "react-router-dom";
import ArboristWork from '../components/UI/arboristWork';
import Leader from "../components/UI/leader";
import Services from "../components/UI/services";
import Contact from "../components/UI/contact"
import Visit from "../components/UI/visit"
import Home from "../components/UI/home";
import Arbor from "../components/arbor";
import Reports from '../components/arbor/reports';
import {useSelector} from "react-redux";
import ClientManager from '../components/arbor/clientManager';
import AddClient from "../components/arbor/clientManager/addClient"
import PersonalInformation from '../components/arbor/userSetting/personalInformation';
import UpdatePassword from '../components/arbor/userSetting/updatePassword';
import EditClient from '../components/arbor/clientManager/editClient';
import Property from '../components/arbor/property';
import AddProperties from '../components/arbor/property/addProperty';
import EditProperty from '../components/arbor/property/editProperty';
import AddReport from '../components/arbor/reports/addReport';
import EditReport from '../components/arbor/reports/editReport';
import { validateUserType } from '../ValidateUserType';
import ArborManager from '../components/arbor/companyArbors';
import AddArbor from '../components/arbor/companyArbors/addArbor';
import EditArbor from '../components/arbor/companyArbors/editArbor';
const AppRoute = () => {

  const { isLoggedIn } = useSelector(({arboristLogin})=>arboristLogin)
  return (
    <div style={{height:"100%"}}>
    <Routes >
      {
        isLoggedIn ?
        <>
        <Route path = "/arbor" element = {<Arbor /> } />
        <Route path = "/reports" element={<Reports />}/>
        <Route path="*" element={<Navigate to="/arbor" />}/>
        <Route path="/profile" element={<PersonalInformation />}/>
        <Route path="/updatePassword" element={<UpdatePassword />}/>
        <Route path="/clientManager" element={<ClientManager />}/>
        <Route path="/addClient" element={<AddClient />}/>
        <Route path ="/editClient" element={<EditClient />}/>
        <Route path ="properties"  element={<Property />}/>
        <Route path="addProperty" element={<AddProperties />} />
        <Route path ="editProperty" element={<EditProperty/>}/>
        <Route path ="/addReport" element={<AddReport />}/>
        <Route path ="/editReport" element={<EditReport />}/>
        {validateUserType() && 
        <>
         <Route path="/arborManager" element={<ArborManager/>}/>
         <Route path="/addArbor" element={<AddArbor />}/>
         <Route path="/editArbor" element={<EditArbor />}/>
        </>
        }
        </>:
        <>
         <Route path = "/" element={<Home />}/>
        <Route path = "/arboristWork" element={<ArboristWork />}/>
        <Route path = "/leader" element={<Leader />}/>
        <Route path = "/services" element={<Services />}/>
        <Route path = "/visit" element={<Visit />}/>
        <Route path = "/contact" element ={<Contact />} />
        <Route path="*" element={<Navigate to="/" />}/>

        </>       
      }      
    </Routes>
    </div>
  )
}

export default AppRoute