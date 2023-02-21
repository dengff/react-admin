import {Button, Checkbox, Form, Input} from "antd";
import {useSearchParams} from "react-router-dom";

const Home = () => {
const [getParams,setParams] = useSearchParams()
  const name = getParams.getAll('name')
  console.log('name',name)
  return <Button>ceshi</Button>

}

export default Home