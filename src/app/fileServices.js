//
import readXlsxFile from 'read-excel-file'
import XLSX from 'xlsx'

export function readExcelFile2 (fileData) {

    var wb = XLSX.read(fileData, {type : 'binary'});
    wb.SheetNames.forEach((sheetName) => {
      var rowObj =XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);	        
      this.excelData = JSON.stringify(rowObj)
    })
} 

export function readExcelFile (file, sheet) {
  //* * read file excel */
  return readXlsxFile(file, { sheet: sheet }).then(rows => {
    console.log(JSON.stringify(rows))
    //* * convert array to json object */
    var keys = rows[0]
    // vacate keys from main array
    var newArr = rows.slice(1, rows.length)

    var formatted = []
    var data = newArr
    var cols = keys
    var l = cols.length
    for (var i = 0; i < data.length; i++) {
      var d = data[i]
      var o = {}
      for (var j = 0; j < l; j++) o[cols[j]] = d[j]
      formatted.push(o)
    }
    console.log(JSON.stringify(formatted))
    return formatted
  })
}
