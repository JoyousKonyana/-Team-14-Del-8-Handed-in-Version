import { EmployeeService, AlertService } from './../_services';
import { Component, VERSION ,ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';

  export class CsvData {
    public DepartmentId!: any;
    public UserRoleID!: any;
    public GenderId!: any;
    public FirstName!: any;
    public LastName!: any;
    public MiddleName!: any;
    public Idnumber!: any;
    public EmailAddress!: any;
    public ContactNumber!: any;
    public EmployeeJobTitle!: any;
    public TitleId!: any;
    public SuburbId!: any;
    public ProvinceId!: any;
    public CityId!: any;
    public CountryId!: any;
    public StreetNumber!: any;
    public StreetName!: any;
}

@Component({
  selector: 'my-app',
  templateUrl: './import_employee.component.html',
  
})
export class Import_EmployeeComponent  {

  name = 'Angular ' + VERSION.major;
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;
  jsondatadisplay:any;

  constructor(
    private employeeService: EmployeeService,
    private alertService: AlertService
  ) {

  } 

  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CsvData = new CsvData();

        csvRecord.DepartmentId = curruntRecord[0].trim();
        csvRecord.UserRoleID = curruntRecord[1].trim();
        csvRecord.GenderId = curruntRecord[2].trim();
        csvRecord.FirstName = curruntRecord[3].trim();
        csvRecord.LastName = curruntRecord[4].trim();
        csvRecord.MiddleName = curruntRecord[5].trim();
        csvRecord.Idnumber = curruntRecord[6].trim();
        csvRecord.EmailAddress = curruntRecord[7].trim();
        csvRecord.ContactNumber = curruntRecord[8].trim();
        csvRecord.EmployeeJobTitle = curruntRecord[9].trim();
        csvRecord.TitleId = curruntRecord[10].trim();
        csvRecord.SuburbId = curruntRecord[11].trim();
        csvRecord.ProvinceId = curruntRecord[12].trim();
        csvRecord.CityId = curruntRecord[13].trim();
        csvRecord.CountryId = curruntRecord[14].trim();
        csvRecord.StreetNumber = curruntRecord[15].trim();
        csvRecord.StreetName = curruntRecord[16].trim();

        csvArr.push(csvRecord);
      }
      else{
        this.alertService.error('Error, Import Feilds are too short, so Import was unsuccesful');
      }
    }
    return csvArr;
  }

//check etension
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  pushData(){
    this.employeeService.RegisterEmployeeFromImport(this.records)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Import was successful', true);
                },
                error => {
                  this.alertService.error('Error, Import was unsuccesful');
              });
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
    this.jsondatadisplay = '';
  }

  getJsonData(){
    this.jsondatadisplay = JSON.stringify(this.records);
  }

  // let arr: any[] = [];  
  // Object.keys(csvArr).map(function(key){  
  //   arr.push({[key]:employees[key]})  
  //   return arr;  
  // }); 

}
