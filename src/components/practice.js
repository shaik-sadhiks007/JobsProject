import MyApplication from './components/myApplication';
import AddServiceComponent from './components/addServiceComponent';
import ViewServiceComponents from './components/viewServiceComponents';
import AddFacility from './components/addFacility';
import ManageUser from './components/manageUser';
import AuditLogReport from './components/auditLogReport';
import Announcements from './components/announcements';
import GlobalParameters from './components/globalParameters';
import ExceptionHandling from './components/exceptionsHandling';
import Sidebar from './components/sidebar';
import Login from './components/login/login';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { httpClient } from './HttpClient';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import Keycloak from 'keycloak-js';
let initOptions ={
  url: 'http://localhost:8081/',
  realm: 'sso-dev',
  clientId: 'react-client',
}
let kc = new Keycloak(initOptions);

kc.init({
  onLoad: 'login-required', // Supported values: 'check-sso' , 'login-required'
  checkLoginIframe: true,
  pkceMethod: 'S256'
}).then((auth) => {
  if (!auth) {
    window.location.reload();
  } else {
    /* Remove below logs if you are using this on production */
    console.info("Authenticated");
    console.log('auth', auth)
    console.log('Keycloak', kc)
    console.log('Access Token', kc.token)

    /* http client will use this header in every request it sends */
    httpClient.defaults.headers.common['Authorization'] = Bearer ${kc.token};

    kc.onTokenExpired = () => {
      console.log('token expired')
    }
  }
}, () => {
  /* Notify the user if necessary */
  console.error("Authentication Failed");
});