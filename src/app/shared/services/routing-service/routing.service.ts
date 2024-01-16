import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(public router: Router, private activatedRoute: ActivatedRoute) { }


  route(page:string){
    this.router.navigateByUrl(page)
  }

  detail(page:string, id:any){
    if(page=='student'){
      this.router.navigateByUrl('app/student/' + id)
    }
    if(page=='parent'){
      this.router.navigateByUrl('app/parent/' + id)
    }
    if(page=='teacher'){
      this.router.navigateByUrl('app/teacher/' + id)
    }
    if(page=='class'){
      this.router.navigateByUrl('app/class/' + id)
    }
  }

  goBack(page:string){
    if(page=='Student'){
      this.router.navigate(['/students'], { relativeTo: this.activatedRoute });
    }
    if(page=='Parent'){
      this.router.navigate(['/parents'], { relativeTo: this.activatedRoute });
    }
    if(page=='Teacher'){
      this.router.navigate(['/teachers'], { relativeTo: this.activatedRoute });
    }
    if(page=='Class'){
      this.router.navigate(['/classes'], { relativeTo: this.activatedRoute });
    }
  }
}
