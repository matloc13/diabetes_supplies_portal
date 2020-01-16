import React from 'react';
import './_form.scss';

const DeviceForm = () => {

	const handleSubmit = () => {
		
	}


	return (
		<form onSubmit={handleSubmit}>
			
			<fieldset className="field-label">
				<input  id="device" type="text" name="device"/>
				<label htmlFor="device" className="label-style">
					<span className="content-style">Device Name</span>
				</label>
			</fieldset>

			<fieldset className="field-label">
				<input id="brand" type="text" name="brand"/>	
				<label htmlFor="brand" className="label-style">
					<span className="content-style">Brand</span> 
				</label>
			</fieldset>
			
			<fieldset className="field-label">
				<input id="model" type="text" name="model"/>
				<label htmlFor="model" className="label-style">
					<span className="content-style">Model </span>
				</label>
			</fieldset>

			<fieldset className="field-label">
				<input id="serialNumber" type="text"/>
				<label htmlFor="serialNumber" className="label-style">
					<span className="content-style">Serial Number </span>
				</label>
			</fieldset>

			<fieldset className="field-label">
				<input id="userSpec" type="text" name="userSpec"/>	
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