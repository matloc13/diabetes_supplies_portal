import React from 'react';
import {Router} from '@reach/router';
import DeviceItemNav from '../components/nav/DeviceItemNav';
import {DeviceFailures, DeviceChanges, DeviceAquired} from './../components/device/index';
const DeviceProfile = ({deviceId}) => {
    return (
        <main>
            <DeviceItemNav />
            <Router>
                <DeviceFailures path="dFailure" deviceId={deviceId} />
                <DeviceChanges path="dChange" deviceId={deviceId} />
                <DeviceAquired  path="dAquire" deviceId={deviceId} />

            </Router>
            
            <section>
              
            </section>
        </main>
    )
}
export default DeviceProfile;