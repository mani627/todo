import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { add_To_Do, delete_To_Do, DeleteAll } from './Redux/Action';

function App() {

  const usedispatch = useDispatch();
  const redux_state = useSelector((state) => state);
  console.log(redux_state.add_To_Do.data);

  // save task
  const Save = () => {
    let typed = document.getElementsByClassName("to_do_input")[0].value
    if (typed === "") {
      alert("Enter Something")
    } else {
      usedispatch(add_To_Do([typed]))
      document.getElementsByClassName("to_do_input")[0].value = ""
      document.getElementsByClassName("To_Do_Delete_all")[0].style.visibility = "visible"
      document.getElementsByClassName("To_Do_Delete_all")[0].style.bottom = "5%"

    }
  }

  // delete single
  const Delete = (i) => {
    usedispatch(delete_To_Do(i))
    if (redux_state.add_To_Do.data.length === 0) {
      // check task list and if no task, hide delete all button
      document.getElementsByClassName("To_Do_Delete_all")[0].style.bottom = "0%"
      document.getElementsByClassName("To_Do_Delete_all")[0].style.visibility = "hidden"

    }
  }



  // delete all
  const Delete_All = () => {
    usedispatch(DeleteAll())

    // hide delete all button
    document.getElementsByClassName("To_Do_Delete_all")[0].style.bottom = "0"
    document.getElementsByClassName("To_Do_Delete_all")[0].style.visibility = "hidden"

  }


  return (
    <div className='w-[100vw] h-[100vh]  bg-[#2061cb] flex flex-col  items-center  '>

      {/* Heading */}
      <div className=' mt-10  text-3xl  text-gray-50 flex-col'>Redux To-DO List</div>

      {/* Main Div */}
      <div className='w-5/12 h-4/6 mt-10 rounded-lg  bg-white flex flex-col   items-center'>
        {/* Input and Btn */}
        <div className='h-[11%] w-[100%]  flex  mt-5  justify-around'>
          <input className=' to_do_input w-[50%]  rounded-lg  pl-4 border-2 border-gray-400' placeholder='Add here..' />
          <button onClick={Save} className='w-[10%] h-[100%] bg-[#2b6dea] rounded-lg text-gray-50 hover:scale-90 transition-all'> Save </button>
        </div>

        {/* Task List */}
        <div className='w-[90%] h-[80%]  bg-white mt-2   overflow-auto  to_do_list_scroll  '>

          {/* Single Task */}
          {redux_state.add_To_Do.data.map((e, i) => {
            return (
              <div className='w-[80%] h-[22%] rounded-lg  bg-[#c4e1e5] mt-3 flex items-center relative  left-[50%] -translate-x-2/4'>
                {e.length > 44 ? <p className='ml-4'>{e.slice(0, 44)}...</p> : <p className='ml-4'>{e}</p>}
                <button onClick={() => Delete(i)} className='absolute right-2 w-[10%] h-[70%] rounded-lg bg-[#181da4] hover:scale-90 transition-all'> <i className='fa fa-trash' style={{ color: "white" }}></i></button>
              </div>
            )
          })}



        </div>

      </div>

      <button onClick={Delete_All} className='To_Do_Delete_all w-[10%] h-[8%] bg-slate-400 rounded-lg  text-gray-800 absolute  hover:scale-90 transition-all'> Delete All </button>
    </div>
  );
}

export default App;
