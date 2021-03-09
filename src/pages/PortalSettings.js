import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';

import settingsDesign from '../assets/images/settings-design.PNG';
import locationIcon from '../assets/images/location-icon.svg';
import phoneIcon from '../assets/images/phone-icon.svg';
import clockIcon from '../assets/images/clock-icon.svg';

function PortalSettings(props) {
  const nameInput = useRef();
  const tagInput = useRef();
  const descriptionInput = useRef();
  const addressInput = useRef();
  const phoneNumberInput = useRef();
  const contactInput = useRef();
  const emailInput = useRef();
  const timeInput = useRef();

  const [mode, changeMode] = useState("");
  const [vendor, setVendor] = useState({
    id: props.restaurant.id,
    name: props.restaurant.name != null && props.restaurant.name.length > 0 ? props.restaurant.name : "Your Restaurant Name",
    description: props.restaurant.description != null && props.restaurant.description.length > 0 ? props.restaurant.description : "Your Restaurant Description",
    // tags: ["Fast Food", "Outdoor Dining"],
    tags: [],
    address: props.restaurant.address != null && props.restaurant.address.length > 0 && 
             props.restaurant.city != null && props.restaurant.city.length > 0 && 
             props.restaurant.state != null && props.restaurant.state.length > 0 && 
             props.restaurant.zip_code != null && props.restaurant.zip_code.length > 0 ?
             `${props.restaurant.address}, ${props.restaurant.city}, ${props.restaurant.state} ${props.restaurant.zip_code}`
             : "Your Address, Your City, Your State Your Zip Code",
    contact: props.restaurant.restaurantOwnerName,
    phoneNumber: props.restaurant.phone_number != null && props.restaurant.phone_number.length > 0 ? props.restaurant.phone_number : "Your Restaurant Phone Number",
    email: props.restaurant.email != null && props.restaurant.email.length > 0 ? props.restaurant.email : "Your Restaurant Email",
    hours: {
      Sunday: ["7:00 AM", "12:00 AM"],
      Monday: ["7:00 AM", "2:00 AM"],
      Tuesday: ["7:00 AM", "2:00 AM"],
      Wednesday: ["7:00 AM", "2:00 AM"],
      Thursday: ["7:00 AM", "2:00 AM"],
      Friday: ["7:00 AM", "2:00 AM"],
      Saturday: ["7:00 AM", "12:00 AM"],
    }
  });
  const [vendorForm, setVendorForm] = useState({
    hours: {
      Sunday: {startTime: "7:00", startPeriod: "AM", endTime: "2:00", endPeriod: "AM"},
      Monday: {startTime: "7:00", startPeriod: "AM", endTime: "2:00", endPeriod: "AM"},
      Tuesday: {startTime: "7:00", startPeriod: "AM", endTime: "2:00", endPeriod: "AM"},
      Wednesday: {startTime: "7:00", startPeriod: "AM", endTime: "2:00", endPeriod: "AM"},
      Thursday: {startTime: "7:00", startPeriod: "AM", endTime: "2:00", endPeriod: "AM"},
      Friday: {startTime: "7:00", startPeriod: "AM", endTime: "2:00", endPeriod: "AM"},
      Saturday: {startTime: "7:00", startPeriod: "AM", endTime: "2:00", endPeriod: "AM"},
    }
  });

  function changeVendorFormHoursPeriod(day, periodType, period) {
    const vendorFormHours = vendorForm.hours;
    vendorForm.hours[day][periodType] = period;
    setVendorForm({...vendorForm, vendorFormHours});
  }

  function updateVendor() {
    const address = addressInput.current.value.split(", ")[0];
    const city = addressInput.current.value.split(", ")[1];
    const state = addressInput.current.value.split(", ")[2].slice(0, -6);
    const zipCode = addressInput.current.value.split(", ")[2].slice(-5);
    let phoneNumber = phoneNumberInput.current.value.replaceAll(/-/g, "").replaceAll(/\s/g, "");
    if (phoneNumber.charAt(0) != "+") {
        phoneNumber = "+" + (phoneNumber.length == 10 ? "1" : "") + phoneNumber;
    }

    const updatedVendor = {
      id: vendor.id,
      name: nameInput.current.value,
      description: descriptionInput.current.value,
      phone_number: phoneNumber,
      email: emailInput.current.value,
      address: address,
      city: city,
      state: state,
      zip_code: zipCode,
      restaurantOwnerName: contactInput.current.value,
    };
    
    console.log(updatedVendor);

    API.graphql({ query: mutations.updateRestaurant, variables: { input: updatedVendor } }).then(({ data: { updateRestaurant } }) => {
      console.log("UPDATE", updateRestaurant);
      props.getData();
      changeMode("")
    }).catch((error) => {
      console.log(error);
    });
  }
  
  return (
    <article className="portal-settings-container">
      {mode == "edit" ?
        <div className="portal-settings-form-container">
          <header>
            <span className="orange-heading">Edit Information</span>
          </header>

          <div className="content">
            <form className="portal-vendor-info-form">
              <div id="portal-settings-form-name-section">
                <span className="subheading">Name</span>
                <input className="text-input" type="text" placeholder="Vendor Name" defaultValue={vendor.name} ref={nameInput} />
              </div>
              
              <div id="portal-settings-form-description-section">
                <span className="subheading">Description</span>
                <textarea className="text-input" type="text" placeholder="Vendor Description" defaultValue={vendor.description} ref={descriptionInput} />
              </div>
              
              <div id="portal-settings-form-tags-section">
                <span className="subheading">Tags</span>
                <input className="text-input" type="text" placeholder="Fast Food, Outdoor Dining" ref={tagInput} />
              </div>
              
              <div id="portal-settings-form-address-section">
                <span className="subheading">Address</span>
                <input className="text-input" type="text" placeholder="Vendor Address" defaultValue={vendor.address} ref={addressInput} />
              </div>
              
              <div id="portal-settings-form-contact-section">
                <span className="subheading">Point of Contact</span>
                <input className="text-input" type="text" placeholder="Vendor Point of Contact" defaultValue={vendor.contact} ref={contactInput} />
              </div>

              <div id="portal-settings-form-phone-section">
                <span className="subheading">Phone Number</span>
                <input className="text-input" type="text" placeholder="123-456-7890" defaultValue={vendor.phoneNumber} ref={phoneNumberInput} />
              </div>

              <div id="portal-settings-form-email-section">
                <span className="subheading">Email Address</span>
                <input className="text-input" type="text" placeholder="Vendor Email" defaultValue={vendor.email} ref={emailInput} />
              </div>

              <div id="portal-settings-form-hours-section">
                {/*<span className="subheading">Hours of Operations</span>
                {Object.keys(vendor.hours).map((day => 
                  <div key={day}>
                    <span>{day}:</span>
                    <span>
                      <input className="number-input" type="text" ref={timeInput} />
                      <input className="number-input" type="text" ref={timeInput} />
                      :
                      <input className="number-input" type="text" ref={timeInput} />
                      <input className="number-input" type="text" ref={timeInput} />
                      <div className="am-pm-radio">
                        <span className={vendorForm.hours[day].startPeriod == "AM" ? "am-pm-radio-option active" : "am-pm-radio-option"} onClick={() => changeVendorFormHoursPeriod(day, "startPeriod", "AM")}>AM</span>
                        <span className={vendorForm.hours[day].startPeriod == "PM" ? "am-pm-radio-option active" : "am-pm-radio-option"} onClick={() => changeVendorFormHoursPeriod(day, "startPeriod", "PM")}>PM</span>
                      </div>
                      <span className="hyphen">-</span>
                      <input className="number-input" type="text" ref={timeInput} />
                      <input className="number-input" type="text" ref={timeInput} />
                      :
                      <input className="number-input" type="text" ref={timeInput} />
                      <input className="number-input" type="text" ref={timeInput} />
                      <div className="am-pm-radio">
                      <span className={vendorForm.hours[day].endPeriod == "AM" ? "am-pm-radio-option active" : "am-pm-radio-option"} onClick={() => changeVendorFormHoursPeriod(day, "endPeriod", "AM")}>AM</span>
                        <span className={vendorForm.hours[day].endPeriod == "PM" ? "am-pm-radio-option active" : "am-pm-radio-option"} onClick={() => changeVendorFormHoursPeriod(day, "endPeriod", "PM")}>PM</span>
                      </div>
                    </span>
                  </div>
                ))}*/}
              </div>
            </form>
            
            <div id="portal-settings-form-submit-section">
              <button className="orange-text" onClick={() => changeMode("")}>Cancel</button>
              <button className="orange" onClick={() => updateVendor()}>Update Information</button>
            </div>
          </div>
        </div>
      :
        <div className="portal-vendor-info-container">
          <header>
            <span className="subheading">Toppings Vendor</span>
            <span className="orange-heading">{vendor.name}</span>
            <span className="caption">{vendor.description}</span>
            {vendor.tags.map((tag => 
              <button className="tag">{tag}</button>  
            ))}
          </header>

          <div className="content">
            <div className="vendor-info-sections-container">
              <div id="vendor-location-info-section" className="vendor-info-section">
                <img src={locationIcon} />
                <div>
                  <span className="subheading">Location</span>
                  <span>{vendor.address}</span>
                </div>
              </div>
              <div id="vendor-contact-info-section" className="vendor-info-section">
                <img src={phoneIcon} />
                <div>
                  <span className="subheading">Contact</span>
                  <div id="vendor-contact-info">
                    <span>Main Point of Contact:</span>
                    <span>{vendor.contact}</span>
                    <span>Phone Number</span>
                    <span>{vendor.phoneNumber}</span>
                    <span>Email Address</span>
                    <span>{vendor.email}</span>
                  </div>
                </div>
              </div>
              <div id="vendor-hours-info-section" className="vendor-info-section">
                {/*<img src={clockIcon} />
                <div>
                  <span className="subheading">Hours</span>
                  <div id="vendor-hours-info">
                    {Object.keys(vendor.hours).map((day => 
                      <div>
                        <span>{day}:</span>
                        <span>{vendor.hours[day][0]} - {vendor.hours[day][1]}</span>
                      </div>
                    ))}
                  </div>
                  </div>*/}
              </div>
              <div></div>
              <div id="vendor-info-button-section">
                <button className="orange" onClick={() => changeMode("edit")}>Edit Information</button>
              </div>
            </div>
          </div>
        </div>
      }
    </article>
  );
}

export default PortalSettings;
