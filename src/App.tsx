import React, { useState } from 'react';
import './App.css';
import FruitCounter from './components/FruitCounter';
import InputField from './components/InputField';

export default function App() {
  const [strawberries, setStrawberries] = useState(0);
  const [bananas, setBananas] = useState(0);
  const [apples, setApples] = useState(0);
  const [kiwis, setKiwis] = useState(0);

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState(0);
  const [zipcode, setZipcode] = useState('');
  const [deliveryFrequency, toggleDeliveryFrequency] = useState('week');
  const [deliveryTimeslot, toggleDeliveryTimeslot] = useState('daytime');
  const [remark, setRemark] = useState('');
  const [agreeTerms, toggleAgreeTerms] = useState(0);

  function resetFruits() {
    setStrawberries(0);
    setBananas(0);
    setApples(0);
    setKiwis(0);
  }

  function handleSubmit() {
    console.log('hey');
  }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>
      <section className='counters'>
        <FruitCounter name='🍓 Aardbeien' fruitCount={strawberries} setFruitCount={setStrawberries} />
        <FruitCounter name='🍌 Bananen' fruitCount={bananas} setFruitCount={setBananas} />
        <FruitCounter name='🍏 Appels' fruitCount={apples} setFruitCount={setApples} />
        <FruitCounter name='🥝 Kiwis' fruitCount={kiwis} setFruitCount={setKiwis} />
        <button onClick={resetFruits}></button>
      </section>

      <form>
        <section>
          <InputField name='firstname' label='Voornaam' inputType='text' value={firstname} changeHandler={setFirstname} />
        </section>
        <section>
          <InputField name='lastname' label='Achternaam' inputType='text' value={lastname} changeHandler={setLastname} />
        </section>
        <section>
          <InputField name='age' label='Leeftijd' inputType='number' value={age} changeHandler={setAge} />
        </section>
        <section>
          <InputField name='zipcode' label='Postcode' inputType='text' value={zipcode} changeHandler={setZipcode} />
        </section>
        <section>
          <label htmlFor="delivery-field">Bezorg frequentie</label>
        </section>
        <section>
          <select
            name='delivery' id='delivery-field'
            value={deliveryFrequency}
            onChange={(e) => toggleDeliveryFrequency(e.target.value)}
          >
            <option value='weekly'>Iedere week</option>
            <option value='biweekly'>Om de week</option>
            <option value='monthly'>Iedere maand</option>
          </select>
        </section>
        <section>
          <input
            type='radio'
            value='daytime'
            name='timeslot'
            id='timeslot-field-daytime'
            checked={deliveryTimeslot === 'daytime'}
            onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
          />
          <label htmlFor='timeslot-field-daytime'>Overdag</label>
          <input
            type='radio'
            value='evening'
            name='timeslot'
            id='timeslot-field-evening'
            checked={deliveryTimeslot === 'evening'}
            onChange={(e) => toggleDeliveryTimeslot(e.target.value)}
          />
          <label htmlFor='timeslot-field-evening'>'s Avonds</label>
        </section>
        <section>
          <label htmlFor='remark-field'>Opmerking</label>
          <textarea
            name='remark'
            id='remark-field'
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
            rows={6}
            cols={40}
          />
        </section>
        <section>
          <input
            type='checkbox'
            name='agree'
            id='agree-field'
            value={agreeTerms}
            onChange={(e) => toggleAgreeTerms(e.target.checked ? 1 : 0)}
          />
          <label htmlFor='agree-field'>Ik ga akkoord met de voorwaarden</label>
        </section>

        <button type='submit' onClick={handleSubmit}>Verzend</button>
      </form>
    </>
  );
}
