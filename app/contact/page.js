import React from 'react';

export default function Home() {
  return (
    <div>
    <form className=" h-screen m-14 flex flex-col text-slate-50 justify-start items-center">
      <h1 className='text-3xl text-center pb-6 text-purple-600'>Get in touch</h1>
      <div className="flex flex-col justify-center p-2 ">
        <label htmlFor="frm-email">Email</label>
        <input
         className='p-2 rounded-lg bg-slate-800 border-2 text-slate-50'
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
         className='p-2 rounded-lg bg-slate-800 border-2'
          id="frm-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className="flex flex-col p-2  ">
        <div className='flex flex-col'>
          <label htmlFor="frm-first">First Name</label>
          <input
           className='p-2 rounded-lg bg-slate-800 border-2 '
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
          className='p-2 rounded-lg bg-slate-800 border-2 text-slate-50'
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
        <div className="flex flex-col justify-center items-start">
        <label htmlFor="frm-message">Message</label>
        <textarea  className=' w-full bg-slate-800 border-2 text-slate-50 p-2 rounded-lg' id="frm-message" rows="6" name="message"></textarea>
      </div>
      </div>
     
      <div className="flex w-full mt-4 justify-center items-center">
        <button className='border-2 hover:bg-purple-600  p-2 rounded-lg text-slate-50' type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
}