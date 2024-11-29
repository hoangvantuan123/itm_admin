import {
  j as e,
  B as l,
  R as c,
  u,
  a as m,
  H as h,
  T as p,
} from './index-CseeQvkc.js'
import {
  R as x,
  T as f,
  G as y,
  h as o,
  a as b,
  A as g,
} from './moment-C8rVX7B7.js'
function v() {
  return e.jsxs('div', {
    className: 'flex items-center gap-2',
    children: [
      e.jsx(
        l,
        {
          type: 'default',
          icon: e.jsx(x, {}),
          size: 'middle',
          className: 'uppercase',
          color: 'default',
          variant: 'filled',
          style: { backgroundColor: '#f0f0f0', borderColor: '#d9d9d9' },
          children: 'STOCK IN (IQC)',
        },
        'Reset',
      ),
      e.jsx(
        l,
        {
          type: 'primary',
          icon: e.jsx(c, {}),
          size: 'middle',
          className: 'uppercase',
          children: 'SEARCH',
        },
        'Save',
      ),
    ],
  })
}
const w = (a = 20) => {
  const r = []
  for (let t = 0; t < a; t++)
    r.push({
      deliveryseq: String(t + 1).padStart(3, '0'),
      deliveryno: `DLV-${o().format('YYYYMMDD')}-${String(t + 1).padStart(2, '0')}`,
      deliverytype: t % 2 === 0 ? 'Express' : 'Standard',
      totalqty: Math.floor(Math.random() * 500) + 100,
      okqty: Math.floor(Math.random() * 500) + 50,
      remainqty: Math.floor(Math.random() * 100) + 10,
      deliverdate: o()
        .subtract(t % 5, 'days')
        .format('YYYY-MM-DD'),
      customercode: `CUST${String(t + 1).padStart(3, '0')}`,
      customername: `Customer ${String(t + 1).padStart(3, '0')}`,
      purchasetypeseq: `PT${String(t + 1).padStart(3, '0')}`,
      purchasetype: t % 2 === 0 ? 'Online' : 'Retail',
      bizunitname: `Biz Unit ${String(t + 1).padStart(3, '0')}`,
    })
  return r
}
function j() {
  const a = u(),
    r = [
      {
        name: 'deliveryseq',
        header: 'Delivery Seq',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'deliveryno',
        header: 'Delivery No',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'deliverytype',
        header: 'Delivery Type',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'totalqty',
        header: 'Total Qty',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'okqty',
        header: 'OK Qty',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'remainqty',
        header: 'Remain Qty',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'deliverdate',
        header: 'Deliver Date',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'customercode',
        header: 'Customer Code',
        sortable: !0,
        resizable: !0,
        width: 200,
      },
      {
        name: 'customername',
        header: 'Customer Name',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'purchasetypeseq',
        header: 'Purchase Type Seq',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'purchasetype',
        header: 'Purchase Type',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
      {
        name: 'bizunitname',
        header: 'Biz Unit Name',
        sortable: !0,
        filter: 'text',
        resizable: !0,
        width: 200,
      },
    ],
    t = w(1e4),
    n = (s) => {
      const { rowKey: d } = s,
        i = s.instance.getRow(d)
      console.log('Double click - Dữ liệu hàng:', i),
        a(`/details/${i.deliveryno}`)
    }
  return (
    f.applyTheme('striped'),
    e.jsx(y, {
      data: t,
      columns: r,
      rowHeight: 40,
      bodyHeight: 'fitToParent',
      onDblclick: n,
      rowHeaders: ['rowNum', 'checkbox'],
      pagination: { perPage: 100 },
      scrollX: !0,
      heightResizable: !0,
      usageStatistics: !0,
      hoverable: !0,
    })
  )
}
const { Title: D, Text: S } = p
function T({ permissions: a, isMobile: r }) {
  const { t } = m()
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(h, {
        children: e.jsxs('title', { children: ['ITM - ', t('Delivery List')] }),
      }),
      e.jsx('div', {
        className:
          'bg-slate-50 p-3  h-screen overflow-auto md:h-full md:overflow-hidden',
        children: e.jsxs('div', {
          className:
            'flex  flex-col gap-4 md:grid md:grid-cols-4 md:grid-rows-5 md:gap-4 h-full',
          children: [
            e.jsxs('div', {
              className:
                'col-start-1 col-end-5 row-start-1 row-end-2  w-full min-h-auto rounded-lg',
              children: [
                e.jsxs('div', {
                  className: 'flex item-center mb-2 justify-between',
                  children: [
                    e.jsx(D, {
                      level: 4,
                      className: 'mt-2 uppercase opacity-85 ',
                      children: t('Delivery List'),
                    }),
                    e.jsx(v, {}),
                  ],
                }),
                e.jsxs('details', {
                  className:
                    'group p-2  [&_summary::-webkit-details-marker]:hidden  bg-white border rounded-lg',
                  children: [
                    e.jsxs('summary', {
                      className:
                        'flex cursor-pointer items-center justify-between gap-1.5 text-gray-900',
                      children: [
                        e.jsxs('h2', {
                          className:
                            'text-xs font-medium flex items-center gap-2 text-blue-600',
                          children: [e.jsx(b, {}), t('Điều kiện truy vấn')],
                        }),
                        e.jsx('span', {
                          className: 'relative size-5 shrink-0',
                          children: e.jsx(g, {}),
                        }),
                      ],
                    }),
                    e.jsx('div', { className: 'flex p-2 gap-4' }),
                  ],
                }),
              ],
            }),
            e.jsx('div', {
              className:
                'col-start-1 col-end-5 row-start-2 row-end-6 w-full min-h-auto rounded-lg',
              children: e.jsx(j, {}),
            }),
          ],
        }),
      }),
    ],
  })
}
export { T as default }
