
import { AfterViewInit, Input, Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


/**
 * @field dataSource  : MatTableDataSource<T> T is an Entity type.
 * @field navigateToView : when it is set true, when user clicks on the item, it displays the item details on the dedicated component
 */
export interface AeTable<T = any> {
  dataSource: MatTableDataSource<T>;
  onClick?: (id: string) => void;
}


const sampleData: AeTable = {
  dataSource: new MatTableDataSource([
    { id: '1', firstName: '1', lastName: '1' },
    { id: '2', firstName: '2', lastName: '2' },
    { id: '3', firstName: '3', lastName: '3' },
    { id: '4', firstName: '4', lastName: '4' },
    { id: '5', firstName: '5', lastName: '5' },
    { id: '6', firstName: '6', lastName: '6' },
    { id: '7', firstName: '7', lastName: '7' },
  ]),
  onClick: (id) => {
    alert(`You clicked the item with the id ${id}`);
  }
};


@Component({
  selector: 'ae-table',
  templateUrl: './ae-table.component.html',
  styleUrls: ['./ae-table.component.css']
})
export class AeTableComponent implements AfterViewInit, OnDestroy, OnInit {

  @Input() input: AeTable = sampleData;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  tableDataSub: Subscription;
  displayedColumns: string[];


  sortBy: string;
  sortType: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    if (this.input) {
      this.displayedColumns = Object.keys(this.input.dataSource.data[0]);
    } else {
      this.tableDataSub = this.activatedRoute.data
        .pipe(map(d => d.resolved))
        .subscribe(tableData => {
          if (tableData) {
            this.input.dataSource = new MatTableDataSource(tableData);
            this.displayedColumns = Object.keys(tableData[0]);
          } else {
            throw new Error('You did not pass any data to the table');
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.tableDataSub?.unsubscribe();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.input.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.input.dataSource.paginator = this.paginator;
  }

  sort(col: string): void {
    if (col === this.sortBy) {
      this.sortType = !this.sortType;
    }
    this.sortBy = col;
    this.input.dataSource = new MatTableDataSource(this.input.dataSource.data.sort((a, b) => {

      // tslint:disable-next-line: radix
      a = parseInt(a[col]) || a[col];
      // tslint:disable-next-line: radix
      b = parseInt(b[col]) || b[col];

      const srt = (c: any, d: any) => c > d ? 1 : c < d ? -1 : 0;
      return this.sortType ? srt(a, b) : srt(b, a);
    }));
  }

  clicked(row: { [key: string]: any }): void {
    this.input.onClick(row.id);
  }

}
