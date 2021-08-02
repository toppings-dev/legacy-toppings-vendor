import React, { useState, useEffect, useRef } from 'react';

import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';

import awsConfig from '../utils/awsConfig';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import * as customMutations from '../graphql/customMutations';

import settingsDesign from '../assets/images/settings-design.PNG';
import locationIcon from '../assets/images/location-icon.svg';
import phoneIcon from '../assets/images/phone-icon.svg';
import clockIcon from '../assets/images/clock-icon.svg';

function PortalSettings(props) {
  const defaultVendor = {
    id: props.restaurant.id != null && props.restaurant.id.length > 0 ? props.restaurant.id : "-1",
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
      Sunday: props.restaurant.sundayHours != null && props.restaurant.sundayHours.length > 0 ? [props.restaurant.sundayHours.split("-")[0], props.restaurant.sundayHours.split("-")[1]] : ["07:00 AM", "12:00 AM"],
      Monday: props.restaurant.mondayHours != null && props.restaurant.mondayHours.length > 0 ? [props.restaurant.mondayHours.split("-")[0], props.restaurant.mondayHours.split("-")[1]] : ["07:00 AM", "12:00 AM"],
      Tuesday: props.restaurant.tuesdayHours != null && props.restaurant.tuesdayHours.length > 0 ? [props.restaurant.tuesdayHours.split("-")[0], props.restaurant.tuesdayHours.split("-")[1]] : ["07:00 AM", "12:00 AM"],
      Wednesday: props.restaurant.wednesdayHours != null && props.restaurant.wednesdayHours.length > 0 ? [props.restaurant.wednesdayHours.split("-")[0], props.restaurant.wednesdayHours.split("-")[1]] : ["07:00 AM", "12:00 AM"],
      Thursday: props.restaurant.thursdayHours != null && props.restaurant.thursdayHours.length > 0 ? [props.restaurant.thursdayHours.split("-")[0], props.restaurant.thursdayHours.split("-")[1]] : ["07:00 AM", "12:00 AM"],
      Friday: props.restaurant.fridayHours != null && props.restaurant.fridayHours.length > 0 ? [props.restaurant.fridayHours.split("-")[0], props.restaurant.fridayHours.split("-")[1]] : ["07:00 AM", "12:00 AM"],
      Saturday: props.restaurant.saturdayHours != null && props.restaurant.saturdayHours.length > 0 ? [props.restaurant.saturdayHours.split("-")[0], props.restaurant.saturdayHours.split("-")[1]] : ["07:00 AM", "12:00 AM"],
    }
  };

  const nameInput = useRef();
  const tagInput = useRef();
  const descriptionInput = useRef();
  const addressInput = useRef();
  const phoneNumberInput = useRef();
  const contactInput = useRef();
  const emailInput = useRef();
  const timeInput = useRef();

  const [mode, changeMode] = useState("");
  const [vendor, setVendor] = useState(defaultVendor);
  const [vendorForm, setVendorForm] = useState({
    hours: {
      Sunday: {startTime: defaultVendor.hours.Sunday[0].split(" ")[0], startPeriod: defaultVendor.hours.Sunday[0].split(" ")[1], endTime: defaultVendor.hours.Sunday[1].split(" ")[0], endPeriod: defaultVendor.hours.Sunday[1].split(" ")[1]},
      Monday: {startTime: defaultVendor.hours.Monday[0].split(" ")[0], startPeriod: defaultVendor.hours.Monday[0].split(" ")[1], endTime: defaultVendor.hours.Monday[1].split(" ")[0], endPeriod: defaultVendor.hours.Monday[1].split(" ")[1]},
      Tuesday: {startTime: defaultVendor.hours.Tuesday[0].split(" ")[0], startPeriod: defaultVendor.hours.Tuesday[0].split(" ")[1], endTime: defaultVendor.hours.Tuesday[1].split(" ")[0], endPeriod: defaultVendor.hours.Tuesday[1].split(" ")[1]},
      Wednesday: {startTime: defaultVendor.hours.Wednesday[0].split(" ")[0], startPeriod: defaultVendor.hours.Wednesday[0].split(" ")[1], endTime: defaultVendor.hours.Wednesday[1].split(" ")[0], endPeriod: defaultVendor.hours.Wednesday[1].split(" ")[1]},
      Thursday: {startTime: defaultVendor.hours.Thursday[0].split(" ")[0], startPeriod: defaultVendor.hours.Thursday[0].split(" ")[1], endTime: defaultVendor.hours.Thursday[1].split(" ")[0], endPeriod: defaultVendor.hours.Thursday[1].split(" ")[1]},
      Friday: {startTime: defaultVendor.hours.Friday[0].split(" ")[0], startPeriod: defaultVendor.hours.Friday[0].split(" ")[1], endTime: defaultVendor.hours.Friday[1].split(" ")[0], endPeriod: defaultVendor.hours.Friday[1].split(" ")[1]},
      Saturday: {startTime: defaultVendor.hours.Saturday[0].split(" ")[0], startPeriod: defaultVendor.hours.Saturday[0].split(" ")[1], endTime: defaultVendor.hours.Saturday[1].split(" ")[0], endPeriod: defaultVendor.hours.Saturday[1].split(" ")[1]},
    }
  });

  function changeVendorHours(e, day, dayHalf, timePlace) {
    const vendorFormHours = vendorForm.hours;
    let currentHours = vendorForm.hours[day][dayHalf];
    vendorForm.hours[day][dayHalf] = currentHours.substr(0, timePlace) + e.target.value + currentHours.substr(timePlace + e.target.value.length);
    setVendorForm({...vendorForm, vendorFormHours});
    console.log(vendorForm.hours)
  }

  function changeVendorHoursPeriod(day, periodType, period) {
    const vendorFormHours = vendorForm.hours;
    vendorForm.hours[day][periodType] = period;
    setVendorForm({...vendorForm, vendorFormHours});
  }

  async function updateVendor() {
    const address = addressInput.current.value.split(", ")[0];
    const city = addressInput.current.value.split(", ")[1];
    const state = addressInput.current.value.split(", ")[2].slice(0, -6);
    const zipCode = addressInput.current.value.split(", ")[2].slice(-5);
    let phoneNumber = phoneNumberInput.current.value.replaceAll(/-/g, "").replaceAll(/\s/g, "");
    if (phoneNumber.charAt(0) != "+") {
        phoneNumber = "+" + (phoneNumber.length == 10 ? "1" : "") + phoneNumber;
    }

    console.log("UP", vendor)

    // const updatedRestaurant = {
    //   id: props.restaurant.id,
    //   input: { isOpen: "false", },
    // };

    // console.log("TOGs", props.restaurant.id)
    // const updatedRestaurant = {
    //   id: props.restaurant.id,
    //   input: { isOpen: "false", },
    // };

    // console.log("UR", updatedRestaurant);

    // // const updatedRestaurantResponse = await API.graphql(graphqlOperation(mutations.updateRestaurant, { input: updatedRestaurant }));
    // const updatedRestaurantResponse = await API.graphql(graphqlOperation(customMutations.updateRestaurant, updatedRestaurant));
    // console.log(updatedRestaurantResponse)

    const updatedRestaurant = {
      id: vendor.id,
      input: {
        name: nameInput.current.value,
        description: descriptionInput.current.value,
        phone_number: phoneNumber,
        email: emailInput.current.value,
        address: address,
        city: city,
        state: state,
        zip_code: zipCode,
        restaurantOwnerName: contactInput.current.value,
        sundayHours: vendorForm.hours.Sunday.startTime + " " + vendorForm.hours.Sunday.startPeriod + "-" + vendorForm.hours.Sunday.endTime + " " + vendorForm.hours.Sunday.endPeriod,
        mondayHours: vendorForm.hours.Monday.startTime + " " + vendorForm.hours.Monday.startPeriod + "-" + vendorForm.hours.Monday.endTime + " " + vendorForm.hours.Monday.endPeriod,
        tuesdayHours: vendorForm.hours.Tuesday.startTime + " " + vendorForm.hours.Tuesday.startPeriod + "-" + vendorForm.hours.Tuesday.endTime + " " + vendorForm.hours.Tuesday.endPeriod,
        wednesdayHours: vendorForm.hours.Wednesday.startTime + " " + vendorForm.hours.Wednesday.startPeriod + "-" + vendorForm.hours.Wednesday.endTime + " " + vendorForm.hours.Wednesday.endPeriod,
        thursdayHours: vendorForm.hours.Thursday.startTime + " " + vendorForm.hours.Thursday.startPeriod + "-" + vendorForm.hours.Thursday.endTime + " " + vendorForm.hours.Thursday.endPeriod,
        fridayHours: vendorForm.hours.Friday.startTime + " " + vendorForm.hours.Friday.startPeriod + "-" + vendorForm.hours.Friday.endTime + " " + vendorForm.hours.Friday.endPeriod,
        saturdayHours: vendorForm.hours.Saturday.startTime + " " + vendorForm.hours.Saturday.startPeriod + "-" + vendorForm.hours.Saturday.endTime + " " + vendorForm.hours.Saturday.endPeriod,
      },
    };

    const updatedRestaurantResponse = await API.graphql(graphqlOperation(customMutations.updateRestaurant, updatedRestaurant));
    console.log(updatedRestaurantResponse);
    props.getData();
    changeMode("");

    // API.graphql(graphqlOperation(customMutations.updateRestaurant, updatedVendor))
    // .then(updateRestaurant => {
    //   console.log('UPDATED RESTAURANT', updateRestaurant);
    //   props.getData();
    //   changeMode('');
    // })
    // .catch(err => {
    //   console.log(err);
    // });
    // API.graphql({ query: mutations.updateRestaurant, variables: { input: updatedVendor } }).then(({ data: { updateRestaurant } }) => {
    //   console.log("UPDATE", updateRestaurant);
    //   props.getData();
    //   // setVendor(oldVendor => ({
    //   //   ...oldVendor,
    //   //   description: updateRestaurant.description,
    //   // }))
    //   changeMode("")
    // }).catch((error) => {
    //   console.log(error);
    // });
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
                {/*<span className="subheading">Tags</span>
                <input className="text-input" type="text" placeholder="Fast Food, Outdoor Dining" ref={tagInput} />*/}
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
                <input className="text-input" type="text" placeholder="Vendor Email" defaultValue={vendor.email} ref={emailInput} readOnly />
              </div>

              <div id="portal-settings-form-hours-section">
                <span className="subheading">Hours of Operations</span>
                {Object.keys(vendor.hours).map((day => 
                  <div key={day}>
                    <span>{day}:</span>
                    <span>
                      <input className="number-input" type="text" defaultValue={vendor.hours[day][0][0]} onChange={(e) => changeVendorHours(e, day, "startTime", 0)} maxLength="1"/>
                      <input className="number-input" type="text" defaultValue={vendor.hours[day][0][1]} onChange={(e) => changeVendorHours(e, day, "startTime", 1)} maxLength="1" />
                      :
                      <input className="number-input" type="text" defaultValue={vendor.hours[day][0][3]} onChange={(e) => changeVendorHours(e, day, "startTime", 3)} maxLength="1" />
                      <input className="number-input" type="text" defaultValue={vendor.hours[day][0][4]} onChange={(e) => changeVendorHours(e, day, "startTime", 4)} maxLength="1" />
                      <div className="am-pm-radio">
                        <span className={vendorForm.hours[day].startPeriod == "AM" ? "am-pm-radio-option active" : "am-pm-radio-option"} onClick={() => changeVendorHoursPeriod(day, "startPeriod", "AM")}>AM</span>
                        <span className={vendorForm.hours[day].startPeriod == "PM" ? "am-pm-radio-option active" : "am-pm-radio-option"} onClick={() => changeVendorHoursPeriod(day, "startPeriod", "PM")}>PM</span>
                      </div>
                      <span className="hyphen">-</span>
                      <input className="number-input" type="text" defaultValue={vendor.hours[day][1][0]} onChange={(e) => changeVendorHours(e, day, "endTime", 0)} maxLength="1" />
                      <input className="number-input" type="text" defaultValue={vendor.hours[day][1][1]} onChange={(e) => changeVendorHours(e, day, "endTime", 1)} maxLength="1" />
                      :
                      <input className="number-input" type="text" defaultValue={vendor.hours[day][1][3]} onChange={(e) => changeVendorHours(e, day, "endTime", 3)} maxLength="1" />
                      <input className="number-input" type="text" defaultValue={vendor.hours[day][1][4]} onChange={(e) => changeVendorHours(e, day, "endTime", 4)} maxLength="1" />
                      <div className="am-pm-radio">
                      <span className={vendorForm.hours[day].endPeriod == "AM" ? "am-pm-radio-option active" : "am-pm-radio-option"} onClick={() => changeVendorHoursPeriod(day, "endPeriod", "AM")}>AM</span>
                        <span className={vendorForm.hours[day].endPeriod == "PM" ? "am-pm-radio-option active" : "am-pm-radio-option"} onClick={() => changeVendorHoursPeriod(day, "endPeriod", "PM")}>PM</span>
                      </div>
                    </span>
                  </div>
                ))}
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
              <button key={tag} className="tag">{tag}</button>  
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
                <img src={clockIcon} />
                <div>
                  <span className="subheading">Hours</span>
                  <div id="vendor-hours-info">
                    {Object.keys(vendor.hours).map((day => 
                      <div key={day}>
                        <span>{day}:</span>
                        <span>{parseInt(vendor.hours[day][0].split(":")[0]) + ":" + vendor.hours[day][0].split(":")[1]} - {parseInt(vendor.hours[day][1].split(":")[0]) + ":" + vendor.hours[day][1].split(":")[1]}</span>
                      </div>
                    ))}
                  </div>
                  </div>
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
