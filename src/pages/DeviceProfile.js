import React from 'react';
import {Router} from '@reach/router';
import useGetDeviceItems from './../utilHooks/useGetDeviceItems';
import DeviceItemNav from '../components/nav/DeviceItemNav';
import {DeviceFailures, DeviceChanges, DeviceAquired} from './../components/device/index';
const DeviceProfile = ({deviceId}) => {

    const { devices } = useGetDeviceItems(deviceId);
    console.log(devices);
    
    return (
        <main>
            <DeviceItemNav />
            <Router>
                <DeviceFailures 
                    path="dFailure" 
                    deviceId={deviceId} 
                    failures={devices.failures} />

                <DeviceChanges 
                    path="dChange" 
                    deviceId={deviceId}
                    changes={devices.changes} />

                <DeviceAquired  
                    path="dAquire" 
                    deviceId={deviceId}
                    aquired={devices.aquires} />

            </Router>
            
        </main>
    )
}
export default DeviceProfile;