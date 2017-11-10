import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Customer } from './customer';
import { CUSTOMERS } from './mock-customers';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CustomerService {
  private customersUrl = 'http://localhost:3000/api/customers';  
  
  

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('CustomerService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getCustomers(): Observable<Customer[]> {
    // return of(CUSTOMERS);
    return this.http.get<Customer[]>(this.customersUrl).pipe(
      tap(heroes => this.log(`fetched customers`)),
      catchError(this.handleError('getCustomers', []))
    );
  }


  getCustomer(id: number): Observable<Customer> {
    // this.messageService.add(`CustomerService: fetched customer id=${id}`);
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url).pipe(
      tap(() => this.log(`fetched cutomer with id=${id}`)),
      catchError(this.handleError<Customer>(`getCustomer with id = ${id}`))
    );
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, httpOptions).pipe(
      tap(() => this.log(`updated customer with id = ${customer.id}`)),
      catchError(this.handleError<any>('updateCustomer'))
    );
  } 

}