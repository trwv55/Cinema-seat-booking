import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: '10:00', label: '10:00' },
  { value: '12:00', label: '12:00' },
  { value: '14:00', label: '14:00' },
  { value: '16:00', label: '16:00' },
  { value: '18:00', label: '18:00' },
  { value: '20:00', label: '20:00' },
];

const listSeats = [
  { id: 0, name: '01', busy: false },
  { id: 1, name: '02', busy: false },
  { id: 2, name: '03', busy: false },
  { id: 3, name: '04', busy: false },
  { id: 4, name: '05', busy: false },
  { id: 5, name: '06', busy: false },
];

const Script = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [seats, setSeats] = useState(listSeats);

  const onClickPlace = (id) => {
    const selectedSeat = seats.map((seat) => {
      return seat.id === id ? { ...seat, busy: !seat.busy } : { ...seat };
    });
    setSeats(selectedSeat);
  };

  const onClickBtn = () => {
    const activeSeats = seats.filter((seat) => seat.busy === true);
    const seatsIndex = [...activeSeats].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    alert(`Вы приобрели ${activeSeats.length} билета`);
  };

  // function seatsFromLS() {
  //   const selectedSeatsIndx = JSON.parse(localStorage.getItem('selectedSeats'));
  //   console.log('selectedSeatsIndx', selectedSeatsIndx);
  //   if (selectedSeatsIndx !== null && selectedSeatsIndx.length > 0) {
  //     let arr = [];
  //     arr = seats.forEach((seat, index) => {
  //       console.log('seat-indx', index);
  //       return selectedSeatsIndx.indexOf(index) > -1 ? { ...seat, busy: true } : { ...seat };
  //       setSeats(arr);
  //     });
  //   }
  // }
  // console.log(seats);
  // React.useEffect(() => {
  //   seatsFromLS();
  // }, []);

  const className = (seat) => {
    return 'seat' + (seat.busy ? '-seat-busy' : '');
  };
  return (
    <div className='script-wrapper'>
      <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />
      {selectedOption && (
        <>
          <div className='places-wrapper'>
            {seats.map((seat) => (
              <div key={seat.id} className={className(seat)} onClick={() => onClickPlace(seat.id)}>
                {seat.name}
              </div>
            ))}
          </div>
          <button
            className='button'
            onClick={() => {
              onClickBtn();
            }}>
            Оплатить
          </button>
        </>
      )}
    </div>
  );
};

export default Script;
