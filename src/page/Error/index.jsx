import {Button, Result, Tooltip} from 'antd';

export default () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle={<Tooltip
        title="Sorry, you are not authorized to access this page.">
        <span>抱歉，您无权访问此页面。</span>
      </Tooltip>}
      extra={
        <Button
          type="primary"
          onClick={_ => history.go(-1)}
        >Go Back</Button>}
    />
  )
}
