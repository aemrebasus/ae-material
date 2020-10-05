
import { AfterViewInit, Input, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


export interface AeTable<T = any> {
  // displayedColumns?: string[];
  dataSource: MatTableDataSource<T>;

}


const sampleData: AeTable = {
  dataSource: new MatTableDataSource([
    { firstName: '1', lastName: '1' },
    { firstName: '2', lastName: '2' },
    { firstName: '3', lastName: '3' },
    { firstName: '4', lastName: '4' },
    { firstName: '5', lastName: '5' },
    { firstName: '6', lastName: '6' },
    { firstName: '7', lastName: '7' },

  ])
};


@Component({
  selector: 'ae-table',
  templateUrl: './ae-table.component.html',
  styleUrls: ['./ae-table.component.css']
})
export class AeTableComponent implements AfterViewInit, OnDestroy, OnInit {

  tableDataSub: Subscription;

  @Input() input: AeTable = sampleData;


  displayedColumns: string[];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  sortBy: string;
  sortType: boolean;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.tableDataSub = this.activatedRoute.data
      .pipe(map(d => d.resolved))
      .subscribe(tableData => {
        if (tableData) {

          this.dataSource = new MatTableDataSource(tableData);
          this.displayedColumns = Object.keys(tableData[0]);
        } else {

          this.dataSource = this.input.dataSource;
          this.displayedColumns = Object.keys(this.input.dataSource.data[0]);
        }
      });
  }

  ngOnDestroy(): void {
    this.tableDataSub.unsubscribe();
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  sort(col: string): void {
    if (col === this.sortBy) {
      this.sortType = !this.sortType;
    }
    this.sortBy = col;
    this.dataSource = new MatTableDataSource(this.dataSource.data.sort((a, b) => {

      // tslint:disable-next-line: radix
      a = parseInt(a[col]) || a[col];
      // tslint:disable-next-line: radix
      b = parseInt(b[col]) || b[col];

      const srt = (c: any, d: any) => c > d ? 1 : c < d ? -1 : 0;
      return this.sortType ? srt(a, b) : srt(b, a);
    }));
  }


  selected(row: { [key: string]: any }): void {
    console.log(row.id);
  }

}
