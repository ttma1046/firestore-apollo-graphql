import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloBoostModule, ApolloBoost } from 'apollo-angular-boost`';
@NgModule({
  imports: [
    HttpClientModule,
    ApolloBoostModule
  ]
})
export class GraphqlModule { 
    constructor(
        apolloBoost: ApolloBoost) {
        apolloBoost.create({
            uri: 'http://localhost:4000/graphql'
        })
    }
}
