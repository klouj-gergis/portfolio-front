

const Contact = () => {
  return (
    <section className="w-full min-h-screen  p-20 font-bunge text-white bg-secondary mt-20">
      <div className="w-full h-full p-20  bg-secondary flex flex-col items-center gap-5">
        <h2 className="text-4xl font-bunge mb-10">Contact Me</h2>
        <div className="w-7/12 grid grid-cols-3 gap-5">
          <div className="p-2 bg-white text-primary cursor-pointer rounded flex flex-col items-center justify-center">
            <p>WhatsApp</p>
          </div>
          <div className="p-2 bg-white text-primary cursor-pointer rounded flex flex-col items-center justify-center">
            <p>Email</p>
          </div>
          <div className="p-2 bg-white text-primary cursor-pointer rounded flex flex-col items-center justify-center">
            <p>Phone</p>
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center text-2xl">
            <p>or</p>
          </div>
        <form className="rounded w-8/12">
          <div className="grid grid-cols-1 gap-4 w-full ">
            <div className="col-end-1 flex flex-col gap-1">
            <label className="text-sm ">Name</label>
            <input type="text" className="border-2 px-2 focus:outline-none py-1 rounded"  placeholder="John Doe" />
          </div>
          <div className="col-end-1 flex flex-col gap-1">
            <label className="text-sm ">Email</label>
            <input type="email"  className="border-2 px-2 focus:outline-none py-1 rounded" placeholder="doejohn@example.com" />
          </div>
          <div className="col-end-1 flex flex-col gap-1">
            <label className="text-sm">Phone Number</label>
            <input type="phone"  className="border-2 px-2 focus:outline-none py-1 rounded" placeholder="01000000000" />
          </div>
          <div className="col-end-2 row-start-1 row-end-4 flex flex-col gap-1">
            <label className="text-sm ">Message</label>
            <textarea  className="border-2 h-full px-2 focus:outline-none py-1 rounded" placeholder="Message" />
          </div>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="mt-5 bg-accent hover:bg-hover text-white font-bold py-2 px-4 rounded cursor-pointer">
            Send Message
          </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
