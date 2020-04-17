import React, { useState, useEffect, useContext } from 'react';
import { Router } from '@reach/router';
import Store from '../contexts/Store';
import useGetDeviceItems from './../utilHooks/useGetDeviceItems';
import DeviceItemNav from '../components/nav/DeviceItemNav';
import { DeviceFailures, DeviceChanges, DeviceAquired } from './../components/device/index';
import useGetDeviceInfo from './../utilHooks/useGetDeviceInfo';
import EditForm from '../components/form/EditForm';
const DeviceProfile = ({ deviceId }) => {
    const { user, curDev } = useContext(Store);
    const [load, setLoad] = useState({});
    const [reveal, setReveal] = useState(false);
    const { devices } = useGetDeviceItems(deviceId);
    const {} = useGetDeviceInfo(load);

    useEffect(() => {
        if (deviceId) {
            setLoad({
                type: 'getSingle',
                token: user.token,
                deviceId,
            });
        }

        return () => {};
    }, [deviceId]);

    const revealForm = () => {
        setReveal(!reveal);
    };

    const currentTransmitterId = (curDev) => {
        if (curDev.length) {
            const current = curDev[curDev.length - 1].transmitter_id;
            // console.log('current', current);
            return current;
        }
    };

    return (
        <main className="profile-device">
            <DeviceItemNav />
            <aside className="table">
                {user && curDev && curDev.deviceName && (
                    <div className="user-info">
                        <span className="info">
                            <span className="dev-label">brand:</span>
                            <span className="dev-info">{curDev.brand}</span>
                            <span className="dev-label">name</span>
                            <span className="dev-info">{curDev.deviceName}</span>
                            <span className="dev-label">model:</span>
                            <span className="dev-info">{curDev.model}</span>

                            {curDev.transmitterId.length ||
                            curDev.deviceName === 'CGM Transmitter' ? (
                                <>
                                    <span className="dev-label">transmitter number</span>
                                    <span className="dev-info">
                                        {currentTransmitterId(curDev.transmitterId)}
                                    </span>
                                    <span className="dev-label" onClick={revealForm}>
                                        update{' '}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="dev-label">serial number:</span>
                                    <span className="dev-info">{curDev.serialNumber}</span>
                                </>
                            )}
                        </span>

                        <h3>
                            {user.userName
                                ? `${user.userName}`
                                : `${user.firstName} ${user.lastName}`}
                        </h3>
                    </div>
                )}

                {devices.failures && devices.changes && devices.aquires && (
                    <table>
                        <thead>
                            <tr>
                                <th>Changes</th>
                                <td>{devices.changes.length}</td>
                            </tr>
                            <tr>
                                <th>Supplies</th>
                                <td>{devices.aquires.length}</td>
                            </tr>
                            <tr>
                                <th>Failures</th>
                                <td>{devices.failures.length}</td>
                            </tr>
                        </thead>
                    </table>
                )}
            </aside>
            {reveal && (
                <>
                    <EditForm
                        formType={'updateTrans'}
                        deviceId={deviceId}
                        revealForm={revealForm}
                    />
                </>
            )}

            <Router>
                <DeviceFailures path="dFailure" deviceId={deviceId} failures={devices.failures} />

                <DeviceChanges path="dChange" deviceId={deviceId} changes={devices.changes} />

                <DeviceAquired path="dAquire" deviceId={deviceId} aquired={devices.aquires} />
            </Router>
        </main>
    );
};
export default DeviceProfile;
