import React from 'react';
import useAddDeviceItem from './../../utilHooks/useAddDeviceItem';
const DeviceItemForm = () => {
    const { addItem } = useAddDeviceItem();

	const handleSubmit = () => {
		switch (e.target.class) {
            case "change":
                return addItem(formInfo, "change");
            case "aquired":
                return addItem(formInfo, "aquired");
            case "failure":
                return addItem(formInfo, "failure");
            default:
                return;
        }
	}






    return (
        <form onSubmit={handleSubmit}></form>
    )
}
export default DeviceItemForm;