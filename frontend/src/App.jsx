import axios from "axios"
import {useState , useEffect} from "react"

export default function App() {

  const [getTask, setGetTask] = useState([])

  console.log(getTask);
  


  useEffect(() => {
    
    const fetchInfo = async () => {
      let url ="http://localhost:3000/tasks/list"

      const response = await axios.get(url)
      let data = response.data
      setGetTask(data)
    }


    fetchInfo()
  
  }, [])
  

  return (
    <div>Task</div>
  )
}
