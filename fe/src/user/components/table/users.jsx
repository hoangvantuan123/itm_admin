import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

function TableUsers({ data }) {
  const navigate = useNavigate()

  const columns = [
    { name: 'EmpFamilyName', header: 'Họ', sortable: true, filter: 'text' },
    { name: 'EmpFirstName', header: 'Tên', sortable: true, filter: 'text' },
    {
      name: 'EmpName',
      header: 'Họ và Tên',
      width: 220,
      sortable: true,
      filter: 'text',
    },
    { name: 'EmpID', header: 'Mã nhân viên', sortable: true, filter: 'text' },
    { name: 'ResidID', header: 'ResidID', sortable: true, filter: 'text' },
    {
      name: 'EntDate',
      header: 'Ngày gia nhập',

      sortable: true,
      filter: 'text',
      formatter: ({ value }) =>
        value ? moment(value, 'YYYYMMDD').format('DD-MM-YYYY') : '',
    },
    {
      name: 'UMEmpType',
      header: 'Loại nhân viên',

      sortable: true,
      filter: 'text',
    },
    {
      name: 'BirthDate',
      header: 'Ngày sinh',

      sortable: true,
      formatter: ({ value }) =>
        value ? moment(value, 'YYYYMMDD').format('DD-MM-YYYY') : '',
    },
    {
      name: 'EmpEngFirstName',
      header: 'Tên Tiếng Anh',
      sortable: true,
      filter: 'text',
    },
    {
      name: 'EmpEngLastName',
      header: 'Họ Tiếng Anh',
      sortable: true,
      filter: 'text',
    },
    { name: 'Remark', header: 'Ghi chú', sortable: true, filter: 'text' },
  ]

  const handleRowDoubleClick = (e) => {
    const { rowKey } = e
    const clickedRowData = e.instance.getRow(rowKey)
    console.log('Double click - Dữ liệu hàng:', clickedRowData)
  }

  return (
    <div className="w-full h-full bg-white">
      <Grid
        data={data}
        columns={columns}
        rowHeight={20}
        bodyHeight="fitToParent"
        onDblclick={handleRowDoubleClick}
        rowHeaders={['rowNum', 'checkbox']}
        pagination={{
          perPage: 100,
        }}
        heightResizable={true}
        usageStatistics={true}
        hoverable={true}
      />
    </div>
  )
}

export default TableUsers
