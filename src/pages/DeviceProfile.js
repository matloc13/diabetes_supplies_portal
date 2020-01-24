import React from 'react';
import {Router} from '@reach/router';
import DeviceItemNav from '../components/nav/DeviceItemNav';
import {DeviceFailures, DeviceChanges, DeviceAquired} from './../components/device/index';
const DeviceProfile = () => {
    return (
        <main>
            <DeviceItemNav />
            <Router>
                <DeviceFailures path="dFailure" />
                <DeviceChanges path="dChange" />
                <DeviceAquired  path="dAquire" />

            </Router>
            
            <section>
                {
                    
                }
            </section>
        </main>
    )
}
export default DeviceProfile;