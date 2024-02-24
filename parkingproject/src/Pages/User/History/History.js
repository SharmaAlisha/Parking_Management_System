import React from 'react'
import HeaderAfterLogin from '../../../Components/HeaderAfterLogin/HeaderAfterLogin'
import "./History.css"
const History = () => {
  return (
    <div>
      <HeaderAfterLogin/>
    <div className="history">
    <h3 class="mt-3 mx-3">Parking History</h3>
  <div class="mx-3">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">S.No</th>
        <th scope="col">Vehicle Type</th>
        <th scope="col">Vehicle No</th>
        <th scope="col">Time In</th>
        <th scope="col">Booked By</th>
        <th scope="col">Canecel Booking</th>
      </tr>
    </thead>
    <tbody class="mt-3">
      <tr>
        <th scope="row">0001</th>
        <td>4 wheeler</td>
        <td>UP78BC9472</td>
        <td>00:30</td>
        <td>Unkown</td>
       <td><button class="w-1 btn btn-sm btn-dark" type="submit">Cancel</button></td>
      </tr>
     
    </tbody>
  </table>
</div>
    </div>
     
    </div>
  )
}

export default History
