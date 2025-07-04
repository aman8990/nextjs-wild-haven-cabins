'use client';

function PaymentDetails({ payment }) {
  return (
    <div className="max-w-[60rem] mx-auto border-2 rounded-md mb-5 p-3 md:p-6 md:text-lg space-y-2">
      <div className="text-3xl text-white text-center">
        Payment ID : {payment?.id}
      </div>
      <div className="md:text-xl">
        <div>Amount : $ {payment?.amount}</div>
        <div>Currency : {payment?.currency}</div>
        <div>Booking ID : {payment?.bookingId}</div>
        <div>Cabin ID : {payment?.cabinId}</div>
        <div>Email : {payment?.guestEmail}</div>
        <div>Payment ID : {payment?.paymentId}</div>
      </div>
    </div>
  );
}

export default PaymentDetails;
