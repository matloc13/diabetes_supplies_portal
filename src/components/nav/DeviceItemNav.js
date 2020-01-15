import React from 'react';
import {DeviceFailures, DeviceChanges, DeviceAquired} from './../device/index';
const DeviceItemNav = () => {
    return (
        <section>
            <DeviceFailures />
            <DeviceChanges />
            <DeviceAquired />
   </section>
    )
}
export default DeviceItemNav;