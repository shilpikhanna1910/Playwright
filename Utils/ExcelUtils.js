import XLSX from 'xlsx';//Imports the xlsx library, which is used to read and write Excel files.

export function readExcel(filePath) {
// readExcel is a custom function.
// filePath is the location of the Excel file.
// export allows other files to use this function.
    const workbook = XLSX.readFile(filePath);//Read the Excel file
    //This opens the Excel workbook.
    // Think of a workbook as the entire Excel file.
    // TestData.xlsx
    // ├── Sheet1
    // ├── Sheet2
    // └── Sheet3
    const sheetName = workbook.SheetNames[0];//Get the first sheet name
    // If your workbook contains:
    // Sheet1
    // Sheet2
    // Sheet3
    // then:// sheetName = "Sheet1";[0] means first sheet.
    const sheet = workbook.Sheets[sheetName];//This retrieves the data from that sheet.

    return XLSX.utils.sheet_to_json(sheet);//Convert Excel data to JSON
//     [
//   {
//     Username: "Admin",
//     Password: "admin123"
//   },
//   {
//     Username: "Admin",
//     Password: "Admin123"
//   }
// ]

// This array is returned to the calling test.
}