import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookedFlight,deleteBookded,} from "../reducer/bookFlight/actionCreater";
import Destination from "./Destination";

const From = () => {
  const newBookings = useSelector((state) => state);
  console.log(newBookings)

  const dispatch = useDispatch();

  const [book, setBook] = useState({
    from: String,
    to: String,
    date: String,
    guests: Number,
    ticketClass: String,
  });
  const { from, to, date, guests, ticketClass } = book;
  const handelChange = (event) => {
    const name = event.target.name;
    setBook((oldbooked) => {
      return { ...oldbooked, [name]: event.target.value };
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    dispatch(bookedFlight(book));
    setBook({
    from: "",
    to: "",
    date: "",
    guests: "",
    ticketClass: "",
    });
  };
  return (
    <div>
    <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
      <form class="first-hero lws-inputform" onSubmit={handelSubmit}>
        <div class="des-from">
          <p>Destination From</p>
          <div class="flex flex-row">
            <img src="./img/icons/Frame.svg" alt="" />
            <select
              class="outline-none px-2 py-2 w-full"
              name="from"
              id="lws-from"
              required
              onChange={handelChange}
              value={from}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Saidpur</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
        </div>

        <div class="des-from">
          <p>Destination To</p>
          <div class="flex flex-row">
            <img src="./img/icons/Frame.svg" alt="" />
            <select
              class="outline-none px-2 py-2 w-full"
              name="to"
              id="lws-to"
              required
              onChange={handelChange}
              value={to}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Dhaka</option>
              <option>Sylhet</option>
              <option>Saidpur</option>
              <option>Cox's Bazar</option>
            </select>
          </div>
        </div>

        <div class="des-from">
          <p>Journey Date</p>
          <input
            type="date"
            class="outline-none px-2 py-2 w-full date"
            name="date"
            id="lws-date"
            required
            onChange={handelChange}
            value={date}
          />
        </div>

        <div class="des-from">
          <p>Guests</p>
          <div class="flex flex-row">
            <img src="./img/icons/Vector (1).svg" alt="" />
            <select
              class="outline-none px-2 py-2 w-full"
              name="guests"
              id="lws-guests"
              required
              onChange={handelChange}
              value={guests}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option value="1">1 Person</option>
              <option value="2">2 Persons</option>
              <option value="3">3 Persons</option>
              <option value="4">4 Persons</option>
            </select>
          </div>
        </div>
        <div class="des-from !border-r-0">
          <p>Class</p>
          <div class="flex flex-row">
            <img src="./img/icons/Vector (3).svg" alt="" />
            <select
              class="outline-none px-2 py-2 w-full"
              name="ticketClass"
              id="lws-ticketClass"
              required
              onChange={handelChange}
              value={ticketClass}
            >
              <option value="" hidden>
                Please Select
              </option>
              <option>Business</option>
              <option>Economy</option>
            </select>
          </div>
        </div>

        <button class="addCity" type="submit" id="lws-addCity">
          <svg
            width="15px"
            height="15px"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span class="text-sm">Book</span>
        </button>
      </form>
    </div>
    <Destination/>
    </div>
  );
};

export default From;
