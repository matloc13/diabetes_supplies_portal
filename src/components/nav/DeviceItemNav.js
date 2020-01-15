import React from 'react';
import './_nav.scss';
import {DeviceFailures, DeviceChanges, DeviceAquired} from './../device/index';
const DeviceItemNav = () => {
    return (
        <section className="deviceItem">
            <DeviceFailures />
            <DeviceChanges />
            <DeviceAquired />
        </section>
    )
}
export default DeviceItemNav;