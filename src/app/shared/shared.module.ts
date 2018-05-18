import { NgModule } from "@angular/core";
import { DropdownDirective } from "app/shared/dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        DropdownDirective
    ],
    exports:[
        CommonModule,//not need to write in imports still available to exports and its gives access to directive where we use DropdownDirective module
        DropdownDirective
    ]
})

export class SharedModule{

}