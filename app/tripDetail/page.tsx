"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useSelector,
  selectBusList,
  loggedUser,
  selectBus,
} from "@/lib/redux";
import { retry } from "@reduxjs/toolkit/query";

const BusReservation = () => {
  const selectedBus = useSelector(selectBus);
  const user = useSelector(loggedUser);
  const [seats, setSeats] = useState([0]);

  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();

  const selectSeat = (seatId: number) => {
    const selectedSeat = selectedBus.seatList.find((seat) => seat.id === seatId);
    const selectedSeatNear = selectedBus.seatList.find((seat) =>
      seat.id === (seatId % 2 === 0 ? seatId - 1 : seatId + 1)
    );

    if (selectedSeat && selectedSeatNear) {

      if (
        (selectedSeatNear.status === (user.gender ? "female" : "male") || selectedSeatNear.status === "available") &&
        selectedSeat.status === "available"
      ) {
        setErrorMsg("");
        setSeats((prevSeats) => {
          const updatedSeats = [...prevSeats];

          if (updatedSeats.includes(selectedSeat.id)) {
            const index = updatedSeats.indexOf(selectedSeat.id);
            updatedSeats.splice(index, 1);
          } else if (updatedSeats.length === 6) {
            setErrorMsg("En Fazla 5 yer seçebilirsiniz");
          } else {
            updatedSeats.push(seatId);
          }

          return updatedSeats;
        });
      } else {
        setErrorMsg("Bu yeri seçemezsiniz");
      }
    }
  };

  const calcAvailable = () => {
    var c = 0
    selectedBus.seatList.forEach(
      seat => {
        if(seat.status === "available") c += 1

      }
    )
    return c - seats.length + 1
  }

  const renderSeatRows = () => {
    const rows = [];
    const seatsPerRow = 4;
    const rowCount = Math.ceil(selectedBus.seatList.length / seatsPerRow);

    for (let i = 0; i < rowCount; i++) {
      const rowSeats = selectedBus.seatList.slice(
        i * seatsPerRow,
        (i + 1) * seatsPerRow
      );

      rows.push(
        <div key={i} className="flex items-center justify-center space-x-4">
          {rowSeats.map((seat) => (
            <div
              key={seat.id}
              className={`${
                seat.status == "available"
                  ? "bg-gray-500 text-white"
                  : seat.status == "male"
                  ? "text-blue-500"
                  : "text-pink-500"
              } ${seats.includes(seat.id) ? "bg-green-800" : "bg-gray-800"} px-4 py-2 rounded cursor-pointer`}
              onClick={() => selectSeat(seat.id)}
            >
              {seat.id}
            </div>
          ))}
        </div>
      );
    }
    return rows;
  };


  async function handlePay() {
    router.push("/payment");
  }

  return (
    <div className="bg-white h-screen ">
      <Navbar />
      <div className="bg-gray-800 h-screen ">
        <div className="bg-gray-800  p-10">
          <div className="flex gap-10 bg-gray-900 shadow-3xl rounded-lg p-10 w-4.5/5 justify-center">
            <div>
              <p className="text-2xl font-bold text-gray-500">
                Departure: {selectedBus.departure}{" "}
              </p>
              <p className="text-2xl font-bold text-gray-500">
                Arrival: {selectedBus.arrival}{" "}
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500">
                Date: {selectedBus.date}
              </p>
              <p className="text-2xl font-bold text-gray-500">
                Available Seats: {calcAvailable()}
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-500">
                Total Price: {selectedBus.price * (seats.length -1 )}
              </p>
            </div>
            <div>
              <div className="flex mt-10 gap-20  justify-center">
                <div className="grid grid-cols-1 gap-4">{renderSeatRows()}</div>
                <div className=" mt-auto">
                  <button
                    className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium  w-20 h-10 text-white uppercase rounded"
                    type="button"
                    onClick={handlePay}
                  >
                    PAY
                  </button>
                </div>
                {errorMsg.length != 0 && (
                  <p style={{ color: "red" }}>{errorMsg}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusReservation;
