import { Modal, Button } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
export default function ErrorPage({ modal3Open, setModal3Open }) {
  const navigate = useNavigate()
  const handleHistoryBack = () => {
    navigate('/u/warehouse/material/delivery-list')
  }
  return (
    <Modal centered open={modal3Open} closable={false} footer={null}>
      <div className="items-center justify-center flex flex-col">
        <ExclamationCircleOutlined className="text-4xl mb-2 text-red-500" />
        <p className="mt-10 text-lg">Chưa có thông tin đơn hàng cần nhập.</p>
        <Button
          className="mt-5"
          type="primary"
          onClick={() => handleHistoryBack()}
        >
          Quay lại
        </Button>
      </div>
    </Modal>
  )
}
