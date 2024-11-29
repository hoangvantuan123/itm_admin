import { useRef, useState } from 'react'
import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import { ArrowLeftIcon } from '../../icons'

function TableTransferWaitingIqcStockIn({ sampleTableA, sampleTableB , gridRefA}) {
  const navigate = useNavigate()
  const gridRef = useRef(null)
  const [checkedRowKey, setCheckedRowKey] = useState(null)
  const columnsA = [
    {
      name: 'ItemSeq',
      header: 'Item Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'ItemNo',
      header: 'Item No.',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'TotalQty',
      header: 'Total Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'OkQty',
      header: 'Ok Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'RemainQty',
      header: 'Remain Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
  ]

  const columnsB = [
    {
      name: 'WHName',
      header: 'WHName',
      sortable: true,
      filter: 'text',
      width: 150,
      resizable: true,
    },
    {
      name: 'ItemNo',
      header: 'ItemNo',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'LotNo',
      header: 'LotNo',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'LotNoFull',
      header: 'LotNoFull',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'Qty',
      header: 'Qty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'DateCode',
      header: 'DateCode',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'ReelNo',
      header: 'ReelNo',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'Barcode',
      header: 'Barcode',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'CreateDate',
      header: 'CreateDate',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'RegDate',
      header: 'RegDate',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'YYWW',
      header: 'YYWW',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'YYMM',
      header: 'YYMM',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'YYMMDD',
      header: 'YYMMDD',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'InvoiceNo',
      header: 'InvoiceNo',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
    {
      name: 'DateIn',
      header: 'DateIn',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 150,
    },
  ]

  TuiGrid.applyTheme('striped')

  const handleCheck = (ev) => {
    const { rowKey } = ev
    const gridInstance = gridRef.current.getInstance()
    if (checkedRowKey !== null && checkedRowKey !== rowKey) {
      gridInstance.uncheck(checkedRowKey)
    }
    setCheckedRowKey(rowKey)
    const rowData = sampleTableA[rowKey]
  }

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center">
      <div className="w-1/2 h-full flex flex-col border bg-white p-3 rounded-lg overflow-hidden pb-10">
        <div className=" font-medium text-xs">THÔNG TIN BAROCODE</div>
        <Grid
         ref={gridRefA}
          data={sampleTableB}
          columns={columnsB}
          rowHeight={5}
          bodyHeight="fitToParent"
          rowHeaders={['rowNum', 'checkbox']}
          pagination={{
            perPage: 100,
          }}
          heightResizable={true}
          usageStatistics={true}
          hoverable={true}
          scrollX={true}
          className="w-full h-full overflow-hidden"
        />
      </div>

      <div className="px-4 flex flex-col p-3  bg-[#eee] rounded-lg items-center justify-center">
        <ArrowLeftIcon />
      </div>

      <div className="w-1/2 h-full flex flex-col border bg-white p-3 rounded-lg overflow-hidden pb-10">
        <div className=" font-medium text-xs">THÔNG ĐƠN HÀNG</div>
        <Grid
          ref={gridRef}
          data={sampleTableA}
          columns={columnsA}
          rowHeight={5}
          bodyHeight="fitToParent"
          rowHeaders={['rowNum', 'checkbox']}
          pagination={{
            perPage: 100,
          }}
          heightResizable={true}
          usageStatistics={true}
          hoverable={true}
          scrollX={true}
          autoResize={true}
          onCheck={handleCheck}
        />
      </div>
    </div>
  )
}

export default TableTransferWaitingIqcStockIn
