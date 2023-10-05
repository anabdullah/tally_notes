let contentList =[
"Introduction, Usage range",
"Company Create, rename, shut, select, delete",
"Tally Vault password create, vault password change, stock item create",
"Stock Groups, Ledgers",
"Capital Account , Contra [Cash transfer] , Purchase, Payment",
"Sales, Receipt, Godowns or Locations, Stock Transfer",
"Cost Centres, Price Levels, Understanding GST",
"GST Configuration, Intra State Purchase, See GST amount",
"Inter-state Purchase, Actual & Billing, Calculator",
"Understanding BRS, Steps for BRS, Orders & Configurations",
"Purchase Order Steps, [Rejection Outward]",
"Sales Order Steps, [Rejection Inward]",
"Zero-Valued Transactions, Point of Sale [POS]",
"Understanding TDS : definition, why, when, where, how",
"TDS configuration, TDS Entry",
"Payroll/Salary Slip Configuration,",
"Steps For Salary Slip",
"Seeing and printing salary slip, Problem"
]

let table = document.querySelector("#table1")

contentList.forEach((e,i)=>{
table.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${e}</td>
<td>
<a href=#${e}>View</a>
</td>
</tr>
`
})