import React from 'react';

export default function Home() {
  return (
    <form className="container h-auto w-1/2 m-14 flex flex-col text-slate-50 justify-between items-start">
      <h1 className='text-3xl text-center pb-6 text-slate-50'>Get in touch</h1>
      <div className="flex flex-col justify-center p-2 ">
        <label htmlFor="frm-email">Email</label>
        <input
         className='p-2 rounded-lg'
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="flex flex-col p-2">
        <label htmlFor="frm-phone">Phone</label>
        <input
         className='p-2 rounded-lg'
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className="flex flex-col p-2  ">
        <div className='flex flex-col'>
          <label htmlFor="frm-first">First Name</label>
          <input
           className='p-2 rounded-lg'
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div className='flex flex-col pt-2'>
          <label htmlFor="frm-last">Last Name</label>
          <input  
          className='p-2 rounded-lg'
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>
      <div className=" w-3/4 flex flex-col p-2">
        <label htmlFor="frm-message">Message</label>
        <textarea  className=' w-full p-2 rounded-lg' id="frm-message" rows="6" name="message"></textarea>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}