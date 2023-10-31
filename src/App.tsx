import react, { ChangeEvent, FormEvent } from 'react'
import shortid from 'shortid'
import './App.css';
import { useState } from 'react';
import { FaHome, FaSave, FaSearch } from 'react-icons/fa'
import { type } from '@testing-library/user-event/dist/type';



function App() {

  interface obj {
    items: string,
    id: string
    ischecked: boolean
  }


  const [mobileitems, setmobileitems] = useState<obj>({ items: "", id: "", ischecked: false });

  const [listarr, setListarr] = useState<obj[]>([])

  const [changeInput, setChangeinput] = useState<boolean>(false)

  const handlechange = (e: ChangeEvent<HTMLInputElement>): void => {
    const update: obj = { items: e.target.value, id: shortid.generate(), ischecked: false }
    setmobileitems(update)
  }
  const handleadditem = (): void => {

    setListarr((prev) => [...prev, { items: mobileitems.items, id: mobileitems.id, ischecked: mobileitems.ischecked }])
    console.log(mobileitems)
  }

  const handleChangeinput = (id: boolean) => {
    setChangeinput(prev => prev === id ? !prev : prev)
  }

  const newarr = listarr.map(prev => { return <div key={prev.id} className='mt-10'><input type='checkbox' /><p className='text-white'>{prev.items}</p></div> })
  console.log(newarr)
  return (
    <div className='w-full  h-screen'>
      <header className='flex flex-row  items-center bg-yellow-500 py-5 fixed w-full lg:py-7 '>
        <FaHome />
        <h1 className='hidden lg:block lg:m-auto lg:text-2xl lg:font-bold'>Todolist</h1>
        <input type='text' placeholder='search' className='w-60 h-9 outline-none border border-black block m-auto rounded-full lg:hidden' />
      </header >
      <section className='flex flex-col lg:block h-full pt-16 bg-black'>
        <div className='text-center  flex-grow   mt-2 lg:mt-6'>
          <div className='hidden lg:flex items-center justify-between bg-100  px-9 py-4'>
            {changeInput ? <>
              <input type='text' placeholder='search' className='hidden lg:block  lg:w-100 lg:h-9  lg:rounded-full lg:border lg:outline-none lg:border-black pl-8 pr-12' />
              <FaSearch className='hidden lg:block absolute  ml-100 ' /></> :
              <>
                <input type='text' placeholder='Add' className='hidden lg:block  lg:w-100 lg:h-9  lg:rounded-full lg:border lg:outline-none lg:border-black pl-8 pr-12' />
                <FaSave className='hidden lg:block absolute  ml-100 ' />
              </>}

            <div className=' absolute right-0 mr-9'>
              <div className='flex items-center justify-between gap-22'>
                <p className={`hidden lg:block  ${changeInput ? 'lg:text-xl lg:text-white lg:font-bold' : 'lg:text-sm lg:font-thin lg:text-white'} cursor-pointer`} onClick={() => handleChangeinput(false)}> Search</p>
                <p className={`hidden lg:block ${changeInput ? 'lg:text-sm lg:font-thin lg:text-white' : 'lg:text-xl lg:text-white lg:font-bold'} cursor-pointer`} onClick={() => handleChangeinput(true)}>Additem</p>
              </div>

            </div>
            <div className={`h-1 w-20 rounded-full transition-all bg-yellow-500 absolute right-0  mt-16 ${changeInput ? ' mr-40' : 'mr-9'} `}></div>
          </div>
          <h1 className=' border-y-r text-base font-bold w-full fixed border-black py-2 bg-yellow-500 lg:hidden '>Todolist</h1>
          <div>
            {newarr}
          </div>
        </div>

        <div className=' bg-100 sticky bottom-0 py-5 w-full flex justify-center items-center lg:hidden' >
          <input type='text' placeholder='Add list' className='pl-3 pr-7 w-60 h-9 outline-none border border-black block rounded-full' value={mobileitems.items} onChange={handlechange} />
          <FaSave className='absolute ml-52' onClick={handleadditem} />
        </div>
      </section>
    </div>
  );
}

export default App;
