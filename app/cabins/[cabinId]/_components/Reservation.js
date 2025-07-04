import { getSession } from '@/app/_hooks/useSession';
import DateSelector from './DateSelector';
import ReservationForm from './ReservationForm';
import LoginMessage from './LoginMessage';

async function Reservation({ cabin, settings, bookedDates }) {
  const { user } = await getSession();

  return (
    <div className="mx-auto border-2 space-y-10 border-primary-900 rounded-md p-10">
      <DateSelector
        cabin={cabin}
        settings={settings}
        bookedDates={bookedDates}
      />
      {user !== null ? <ReservationForm cabin={cabin} /> : <LoginMessage />}
    </div>
  );
}

export default Reservation;
