import { useRef, useState, useEffect } from 'react'
import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import { encodeBase64Url } from '../../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'

function TableDeliveryList({
  data,
  loading,
  handleCheck,
  gridRef,
  setKeyPath,
  checkedPath,
  setCheckedPath,
}) {
  const navigate = useNavigate()

  const columns = [
    {
      name: 'DelvNo',
      header: 'DelvNo',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'DelvMngNo',
      header: 'DelvMngNo',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'ImpType',
      header: 'ImpType',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'TotalQty',
      header: 'TotalQty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'OkQty',
      header: 'OkQty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'RemainQty',
      header: 'RemainQty',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'DelvDate',
      header: 'DelvDate',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'CustSeq',
      header: 'Customer Code',
      sortable: true,
      resizable: true,
      width: 140,
    },
    {
      name: 'CustNm',
      header: 'Customer Name',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'DomOrImp',
      header: 'Purchase Type Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'PurchaseType',
      header: 'Purchase Type',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'BizUnitName',
      header: 'BizUnitName',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'BizUnit',
      header: 'BizUnit',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 100,
    },
    {
      name: 'EmpSeq',
      header: 'Employee Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'EmpName',
      header: 'Employee Name',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'DeptSeq',
      header: 'Department Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'DeptName',
      header: 'Department Name',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'CurrSeq',
      header: 'Currency Seq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
    {
      name: 'CurrName',
      header: 'Currency Name',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 200,
    },
    {
      name: 'ExRate',
      header: 'Exchange Rate',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140,
    },
  ]
  useEffect(() => {
    if (checkedPath === true) {
      setKeyPath(null)
      setCheckedPath(false)
    }
  }, [checkedPath])

  const handleRowDoubleClick = (e) => {
    const { rowKey } = e
    const clickedRowData = e.instance.getRow(rowKey)
    const filteredData = {
      DelvNo: clickedRowData?.DelvNo,
      DelvMngNo: clickedRowData?.DelvMngNo,
      ImpType: clickedRowData?.ImpType,
      TotalQty: clickedRowData?.TotalQty,
      OkQty: clickedRowData?.OkQty,
      RemainQty: clickedRowData?.RemainQty,
      DelvDate: clickedRowData?.DelvDate,
      CustSeq: clickedRowData?.CustSeq,
      CustNm: clickedRowData?.CustNm,
      DomOrImp: clickedRowData?.DomOrImp,
      PurchaseType: clickedRowData?.PurchaseType,
      BizUnitName: clickedRowData?.BizUnitName,
      BizUnit: clickedRowData?.BizUnit,
      EmpSeq: clickedRowData?.EmpSeq,
      EmpName: clickedRowData?.EmpName,
      DeptSeq: clickedRowData?.DeptSeq,
      DeptName: clickedRowData?.DeptName,
      CurrSeq: clickedRowData?.CurrSeq,
      CurrName: clickedRowData?.CurrName,
      ExRate: clickedRowData?.ExRate,
    }

    const secretKey = 'TEST_ACCESS_KEY'
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(filteredData),
      secretKey,
    ).toString()
    const encryptedToken = encodeBase64Url(encryptedData)

    /*  navigate(`/u/warehouse/material/waiting-iqc-stock-in/${encryptedToken}`) */
  }

  TuiGrid.applyTheme('striped')

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center">
      <div className="w-full h-full flex flex-col border bg-white p-3 rounded-lg overflow-hidden pb-5">
        <Grid
          ref={gridRef}
          data={data}
          columns={columns}
          rowHeight={40}
          bodyHeight="fitToParent"
          onDblclick={handleCheck}
          rowHeaders={['rowNum', 'checkbox']}
          pagination={{ perPage: 100 }}
          scrollX={true}
          heightResizable={true}
          usageStatistics={true}
          hoverable={true}
          autoResize={true}
          onCheck={handleCheck}
        />
      </div>
    </div>
  )
}

export default TableDeliveryList
