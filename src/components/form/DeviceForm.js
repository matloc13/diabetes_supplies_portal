import React, { useContext, useState, useEffect } from 'react';
import './_form.scss';
import useAddDevice from './../../utilHooks/useAddDevice';
import useInput from './../../utilHooks/useInput';
import UserContext from './../../contexts/userContext';
import BASE_URL from './../../constants';

const DeviceForm = () => {

	const { user, dispatch } = useContext(UserContext);
	const { value:device, bind:bindDevice, reset:resetDevice } = useInput('');
	const { value:brand, bind:bindbrand, reset:resetbrand } = useInput('');
	const { value:model, bind:bindmodel, reset:resetmodel } = useInput('');
	const { value:serialNumber, bind:bindserialNumber, reset:resetserialNumber } = useInput('');
	const { value:userSpec, bind:binduserSpec, reset:resetuserSpec } = useInput('');

	const [formInfo, setFormInfo] = useState(null);

	const [ { data, submitting }, setUrl , setSubmitForm] = useAddDevice();

	const bundleSubmit = () => {
		setSubmitForm(formInfo);
		if (user.id) {
			setUrl(`${BASE_URL}/device/${user.id}/create`);
	}
		}
		
	const handleSubmit = (e) => {
		e.preventDefault();
		resetDevice();
		resetbrand();
		resetmodel();
		resetserialNumber();
		resetuserSpec();
		resetuserSpec();
		return bundleSubmit();
	}

	useEffect(() => {
		if (user.isAuthenticated) {
			setFormInfo({ 
				...formInfo, 
				user_id: user.id,
				token: user.token,
				device,
				brand,
				model,
				serialNumber,
				userSpec
			})
		}
		return () => {};
	}, [device, brand, model, serialNumber, userSpec, user])//eslint-disable-line

	useEffect(() => {
		if (data.user_id) {
			console.log(data);
			
			dispatch({type: "CREATE_DEVICE", payload: data})
		}
		return () => {};
	}, [ data ])//eslint-disable-line

	return (
		<form onSubmit={handleSubmit}>
			{
				submitting === "inaction" &&
					<h2>...submitting</h2>
			}
			
			<fieldset className="field-label">
				<input  
					id="device" 
					type="text" 
					name="device"
					autoFocus
					{...bindDevice}/>
				<label htmlFor="device" className="label-style">
					<span className="content-style">Device Name</span>
				</label>
			</fieldset>

			<fieldset className="field-label">
				<input 
					id="brand" 
					type="text" 
					name="brand"
					{...bindbrand}/>	
				<label htmlFor="brand" className="label-style">
					<span className="content-style">Brand</span> 
				</label>
			</fieldset>
			
			<fieldset className="field-label">
				<input 
					id="model" 
					type="text" 
					name="model"
					{...bindmodel}/>
				<label htmlFor="model" className="label-style">
					<span className="content-style">Model </span>
				</label>
			</fieldset>

			<fieldset className="field-label">
				<input 
					id="serialNumber" 
					name="serialNumber"
					type="text"
					{...bindserialNumber}/>
				<label htmlFor="serialNumber" className="label-style">
					<span className="content-style">Serial Number </span>
				</label>
			</fieldset>

			<fieldset className="field-label">
				<input 
				id="userSpec" 
				type="text" 
				name="userSpec"
				{...binduserSpec}/>	
				<label htmlFor="userSpec" className="label-style">
					<span className="content-style">comments</span>					
				</label>
			</fieldset>
			<fieldset className="field-label">
				<input 
					type="submit"
					value="add new" />
				<label htmlFor="submit"></label>
			</fieldset>
		</form>
  )
}
export default DeviceForm;  