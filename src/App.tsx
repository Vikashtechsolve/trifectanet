// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Overview from './pages/overview';
import AntiBriberyCorruption from './pages/anti-bribery-corruption';
import Layout from './layout';
import Home from './pages/home';
import CodeOfConduct from './pages/code-of-conduct';
import ExecutiveLeadershipTeam from './pages/executive-leadership-team';
import OurClientele from './pages/our-clientele';
import OurStory from './pages/our-story';
import PDPA from './pages/pdpa';
import SoftwareDevelopmentServices from './pages/software-development-services';
import Sustainability from './pages/sustainability';
import ValueProposition from './pages/value-proposition';
import VisionMission from './pages/vision-mission';
import ContactUs from './pages/contactus';
import Career from './pages/carrer';
import BankingAndFinancialServices from './pages/banking-and-financial-services';
import Software from './pages/software';
import Manufacturing from './pages/manufacturing';
import Energy from './pages/energy';
import MedicalDevices from './pages/medical-devices';
import Insurance from './pages/insurance';
import Healthcare from './pages/healthcare';
import Retail from './pages/retail';
import TravelAndLogistics from './pages/travel-and-logistics';
import Pharmaceutical from './pages/pharmaceutical';
import Telecommunication from './pages/telecommunication';
import AerospaceAndAviation from './pages/aerospace-and-aviation';
import ConsumerElectronicsSector from './pages/consumer-electronics-sector';
import LifeScience from './pages/life-science';
import Automotive from './pages/automotive';
import ProductEngineering from './pages/product-engineering';
import SaasCloud from './pages/saas-cloud';
import DataManagement from './pages/data-management';
import WebTechnologies from './pages/web-technologies';
import ErpCrm from './pages/erp-crm';
import AiChatBot from './pages/ai-chat-bot';
import MonitoringObservability from './pages/monitoring-observability';
import ITSM from './pages/itsm';
import BMCSuite from './pages/bmc-suite';
import DevOps from './pages/devops';
import AutomationHyperautomation from './pages/automation-hyperautomation';
import MissionCriticalFacilities from './pages/mission-critical-facilities';
import DataAnalyticsBusinessIntelligence from './pages/data-analytics-business-intelligence';
import QaTestingServices from './pages/qa-testing-services';
import MobilitySolutions from './pages/mobility-solutions';
import CloudServices from './pages/cloud-services';
import InfrastructureManagementServices from './pages/infrastructure-management-services';
import ArtificialIntelligence from './pages/artificial-intelligence';
import IoT from './pages/iot';
import ProfessionalManagedServices from './pages/professional-managed-services';
import AboutAccord from './pages/about-accord';
import ServiceNowOfferings from './pages/servicenow-offerings';
import GenAISolutions from './pages/gen-ai-solutions';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/anti-bribery-corruption" element={<AntiBriberyCorruption/>} />
        <Route path="/code-of-conduct" element={<CodeOfConduct/>} />
        <Route path="/executive-leadership" element={<ExecutiveLeadershipTeam/>}/>
        <Route path="/our-clientele" element={<OurClientele/>}/>
        <Route path="/our-story" element={<OurStory/>}/>
        <Route path="/pdpa" element={<PDPA/>}/>
        <Route path="/software-development" element={<SoftwareDevelopmentServices/>}/>
        <Route path="/sustainability" element={<Sustainability/>}/>
        <Route path="/value-proposition" element={<ValueProposition/>}/>
        <Route path="/vision-mission" element={<VisionMission/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/career" element={<Career/>}/>
        <Route path="/banking-financial-services" element={<BankingAndFinancialServices/>}/>
        <Route path="/software" element={<Software/>}/>
        <Route path="/manufacturing" element={<Manufacturing/>}/>
        <Route path="/energy" element={<Energy/>}/>
        <Route path="/medical-devices" element={<MedicalDevices/>}/>
        <Route path="/insurance" element={<Insurance/>}/>
        <Route path="/healthcare" element={<Healthcare/>}/>
        <Route path="/retail" element={<Retail/>}/>
        <Route path="/travel-and-logistics" element={<TravelAndLogistics/>}/>
        <Route path="/pharmaceutical" element={<Pharmaceutical/>}/>
        <Route path="/telecommunications" element={<Telecommunication/>}/>
        <Route path="/aerospace-and-aviation" element={<AerospaceAndAviation/>}/>
        <Route path="/consumer-electronics-sector" element={<ConsumerElectronicsSector/>}/>
        <Route path="/life-science" element={<LifeScience/>}/>
        <Route path="/automotive" element={<Automotive/>}/>
        <Route path="/product-engineering" element={<ProductEngineering/>}/>
        <Route path="/saas-cloud" element={<SaasCloud/>}/>  
        <Route path="/data-management" element={<DataManagement/>}/>
        <Route path="/web-technologies" element={<WebTechnologies/>}/>
        <Route path="/erp-crm" element={<ErpCrm/>}/>
        <Route path="/ai-chat-bot" element={<AiChatBot/>}/>
        <Route path="/monitoring-observability" element={<MonitoringObservability/>}/>
        <Route path="/itsm" element={<ITSM/>}/>
        <Route path="/iot" element={<IoT/>}/>
        <Route path="/bmc-suite" element={<BMCSuite/>}/>
        <Route path="/devops" element={<DevOps/>}/>
        <Route path="/automation-hyperautomation" element={<AutomationHyperautomation/>}/>
        <Route path="/mission-critical-facilities" element={<MissionCriticalFacilities/>}/>
        <Route path="/data-analytics-business-intelligence" element={<DataAnalyticsBusinessIntelligence/>}/>
        <Route path="/qa-testing-services" element={<QaTestingServices/>}/>
        <Route path="/mobility-solutions" element={<MobilitySolutions/>}/>
        <Route path="/cloud-services" element={<CloudServices/>}/>
        <Route path="/infrastructure-management-services" element={<InfrastructureManagementServices/>}/>
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence/>}/>
        <Route path="/professional-managed-services" element={<ProfessionalManagedServices/>}/>
        <Route path="/about-accord" element={<AboutAccord/>}/>
        <Route path="/servicenow-offerings" element={<ServiceNowOfferings/>}/>
        <Route path="/gen-ai-solutions" element={<GenAISolutions/>}/>
        <Route path="/service-now-offerings-by-ai-gts" element={<ServiceNowOfferings/>}/>
        <Route path="/gen-ai-solution-offerings-by-ai-gts" element={<GenAISolutions/>}/>
        
        {/* Add more routes as needed */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
