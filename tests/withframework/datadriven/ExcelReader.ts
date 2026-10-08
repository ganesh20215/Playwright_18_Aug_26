
import * as xlsx from "xlsx";

export class ExcelReader {

    static readExcel(filePath : string, sheetName : string) : any{

        //read data from excel file
        const wb = xlsx.readFile(filePath);

        //Select sheet name
        const sh = wb.Sheets[sheetName];

        //convert sheet into json 
        const data = xlsx.utils.sheet_to_json(sh);

        return data;
    }

}