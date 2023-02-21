import {Space,Tooltip,Avatar,Button} from 'antd';
import {SettingOutlined} from "@ant-design/icons"
import {useSelector} from 'react-redux';
 const HeaderRight = ()=>{

const {userInfo} = useSelector(state=>state.global)



  return (

    <div style={{display:'flex',alignItems:'center',gap:"16px"}} align={"center"} size={"middle"}>
      <Tooltip style={{display:'flex',alignItems:'center'}} placement="bottom" title={"系统设置"}>

        <Button type={"text"} icon={<SettingOutlined style={{fontSize:"24px"}} />} />
      </Tooltip>
      <Avatar
        style={{
        }}
        size={ 32}
        src={<img src={userInfo?.avatar} alt="avatar" />}
      >
      </Avatar>


    </div>



  )

}
export default HeaderRight