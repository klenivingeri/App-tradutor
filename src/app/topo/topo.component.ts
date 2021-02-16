import { Component } from '@angular/core'

@Component({
    selector: 'app-topo', /* baseado em div [app-topo] , baseado em class .app-topo  */
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']
})

export class TopoComponent{
    public titulo:string = "Duolingo pirata"
}