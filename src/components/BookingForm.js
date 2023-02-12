import React, { useState } from 'react';

    const BookingForm = () => {

        // reducer

        // style
        const mystyleForm={
            display: 'grid',
            maxWidth: '200px',
            gap: '20px',
        }


        // availableTimes
        const [form, setForm] = useState({ 
            name: '',
            firstname: '', 
            lastname: '', 
            resdate:'',
            restime:'',
            guests:'',
            occasions:'',
          }); 

          const [occasions, setOccasions] = useState("Birthday");



          const getIsFormValid = () => {
            // Implement this function
            return(
            form.firstname 
            && form.lastname
            && form.resdate
            && form.restime
            && form.guests      
            && form.occasions !== 'occasions'
            )
          };

          const clearForm = () => {
            // Implement this function
            setForm('')
          };
    
        const handleSubmit = (e) => { 
            e.preventDefault();
            
            console.log('form submit')
            alert( 'Your Booking is created!');
            clearForm();
        }

        // The API has two functions that you can use in your code: 
        // fetchAPI(date) - This function accepts a date as a parameter and returns an array of available reservation times for the provided date        
        // submitAPI(formData) - This function accepts the booking form data as a parameter and will return true if the data was successfully submitted.
        // const [btcData, setBtcData] = useState({}); 
        // useEffect(() => { 
        //   fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
        //     .then((response) => response.json()) 
        //     .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
        //     .catch((error) => console.log(error)); 
        // }, []);
      
        // useEffect(() => { 
        //   fetchData(); 
        // }, []); 

   

    return(
    <>
        <form onSubmit={handleSubmit} style={mystyleForm} >
            <fieldset>

            <div className="Field">
            <label htmlFor="firstname">Firstname :</label>
            <input
            type="text"
            id="firstname"
            name= "firstname"
            placeholder="firstname"            
            onChange={ e => setForm({
                ...form,
                firstname: e.target.value 
                }) }            
            />
            </div>

            <div className="Field">
            <label htmlFor="lastname">Lastname :</label>
            <input
            type="text"
            name= "lastname"
            id="lastname"            
            placeholder="lastname" 
            onChange={ e => setForm({
                ...form,
                lastname: e.target.value}) }            
            />
            </div>
           
            <div className="Field">
            <label htmlFor="resdate">Choose a date :</label>
            <input
            id="resdate"
            name ="resdate"
            placeholder="Date de reservation"
            onChange={ e => setForm({
                ...form,
                resdate: e.target.value}) }            
            type="date"  
            />
            </div>

            <div className="Field">
            <label htmlFor="restime">Choose a time:</label>
            <select 
            id="restime"
            onChange={ e => setForm({
                ...form,
                restime: e.target.value}) }             
            >
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            </div>

            <div className="Field">
            <label htmlFor="guests">Number of guests : </label>
            <input
            id="guests"
            name ="guests"
            placeholder="1" 
            min="1" 
            max="10" 
            onChange={ e => setForm({
                ...form,
                guests: e.target.value}) }
            type="number"
            />
            </div>

            

            <div className="Field">
            <label htmlFor="occasions">Occasions <sup>*</sup></label>
            <select
             id="occasions"
             name ="occasions"
            onChange={ e => setForm({
                ...form,
                occasions: e.target.value}) }             >
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            
            </div>

            <button disabled={!getIsFormValid()} type="submit">Make Your reservation</button>
            </fieldset>
            
        </form>

        <div className="book">
            <h2>Your booking : </h2>
                <p>Votre prenom : {form.firstname}</p>
                <p>Votre nom :  {form.lastname}</p>                
                <p>Date : {form.resdate}, Heure: {form.restime}</p>
                <p>Guests :  {form.guests}</p>
                <p>Your Occasion :  {form.occasions}</p>
        </div>
       
        </>
        
    );
};

export default BookingForm;

