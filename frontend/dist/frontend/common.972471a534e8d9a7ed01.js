"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[592],{6369:(f,c,s)=>{s.d(c,{l:()=>t});class t{constructor(){}}},9841:(f,c,s)=>{s.d(c,{i:()=>_});var t=s(7716),p=s(1841);let _=(()=>{class u{constructor(e){this.http=e,this.url="https://jsonplaceholder.typicode.com/todos/",this.urlSoberanis="http://localhost:3000/furniture",this.URL="https://furniture-app-3.herokuapp.com/fabricate"}getAllFurnitures(){return this.http.get(this.url)}getAvailableFurniture(e=""){return this.http.get(this.url)}getFurniture(e){return this.http.get(this.URL+"/furniture/get-furniture",{withCredentials:!0,params:{code:e}})}getFurnituresOnSale(e,o){return this.http.get(this.URL+"/furniture/on-sale"+(0!=o?"?page="+o+(""!=e?"&name="+e:""):""!=e?"?name="+e:""))}getFurnituresOnStorage(e,o){return this.http.get(this.URL+"/furniture/on-storage"+(0!=o?"?page="+o+(""!=e?"&name="+e:""):""!=e?"?name="+e:""))}getFurnituresOnSession(){return this.http.get("https://furniture-app-3.herokuapp.com/sales/furniture-in-bill/on-session")}registerFurnitureOnSession(e){return this.http.post("https://furniture-app-3.herokuapp.com/sales/furniture-in-bill/on-session",e)}deleteFurnitureOnSession(e){return this.http.delete("https://furniture-app-3.herokuapp.com/sales/furniture-in-bill/on-session/"+e)}deleteAllFurnituresOnSession(){return this.http.delete("https://furniture-app-3.herokuapp.com/sales/furniture-in-bill/on-session")}postFurniture(e,o){return this.http.post(this.URL+"/furniture/register-furniture",o,{withCredentials:!0})}getAllFurnitureListFilter(e,o){return this.http.get(this.URL+"/furniture/get-allFurniture-filter?page="+e,{withCredentials:!0,params:o})}getAllFurnitureList(e){return this.http.get(this.URL+"/furniture/get-allFurniture?page="+e,{withCredentials:!0})}updateStatus(e){return this.http.put(this.URL+"/furniture/put-furniture-on-sale/"+e,{withCredentials:!0})}putOnSale(e){return this.http.put(this.URL+"/furniture/put-furniture-on-sale/",e)}getListPlans(e){return this.http.get("https://furniture-app-3.herokuapp.com/admin/plan",{withCredentials:!0,params:e})}getListPiecesPlan(e){return this.http.get(`https://furniture-app-3.herokuapp.com/fabricate/piece/get-pla-id/${e}`,{withCredentials:!0})}}return u.\u0275fac=function(e){return new(e||u)(t.LFG(p.eN))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1944:(f,c,s)=>{s.d(c,{q:()=>_});var t=s(7716),p=s(1841);let _=(()=>{class u{constructor(e){this.http=e,this.url="http://localhost:3000/piece",this.URL="https://furniture-app-3.herokuapp.com/fabricate/piece/"}getAllPieces(e,o){return this.http.get(this.URL+"get-all"+(0!=e?"?page="+e+(""!=o?"&name="+o:""):""!=o?"?name="+o:""))}getPiece(e){return this.http.get(this.url+"/"+e)}savePiece(e){return this.http.post(this.URL+"register-piece",e)}saveUpdate(e){return this.http.post(this.URL+"update-piece",e)}getPieceById(e){return this.http.get(this.URL+"get-piece/"+e)}deletePiece(e){return this.http.delete(this.URL+"delete/"+e)}postProvidePiece(e){return this.http.post(`${this.URL}add-in-stock/${e.id}/${e.stock}/${e.cost}`,{},{withCredentials:!0})}}return u.\u0275fac=function(e){return new(e||u)(t.LFG(p.eN))},u.\u0275prov=t.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1616:(f,c,s)=>{s.d(c,{h:()=>m});var t=s(7716),p=s(8583);function _(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return r.updateOutputId(),r.updateIsEdit(!1),r.updatePressedButton("view")}),t._uU(1,"Visualizar"),t.qZA()}if(2&i){const n=t.oxw();t.uIk("data-target","#"+n.infModalId)}}function u(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return r.updateOutputId(),r.updateIsEdit(!0),r.updatePressedButton("edit")}),t._uU(1,"Editar"),t.qZA()}if(2&i){const n=t.oxw();t.uIk("data-target","#"+n.formModalId)}}function h(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"button",8),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return r.updateOutputId(),r.updatePressedButton("delete")}),t._uU(1,"Eliminar"),t.qZA()}if(2&i){const n=t.oxw();t.uIk("data-target","#"+n.deleteModalId)}}function e(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"button",9),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return r.updateOutputId(),r.updatePressedButton("add")}),t._uU(1,"Agregar"),t.qZA()}}function o(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return r.updateOutputId(),r.updatePressedButton("remove")}),t._uU(1,"Remover"),t.qZA()}}function d(i,a){if(1&i){const n=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){return t.CHM(n),t.oxw().updateOutputId()}),t._uU(1,"Agregar a venta"),t.qZA()}if(2&i){const n=t.oxw();t.uIk("data-target","#"+n.putOnSaleModalId)}}const g=["*"];let m=(()=>{class i{constructor(){this.infModalId="undefined",this.formModalId="undefined",this.deleteModalId="undefined",this.putOnSaleModalId="undefined",this.addButton=!1,this.removeButton=!1,this.messageEvent=new t.vpe,this.isEditEvent=new t.vpe,this.pressedButtonTypeEvent=new t.vpe}ngOnInit(){}updateOutputId(){null==this.id&&(this.id=0),this.messageEvent.emit(this.id)}updateIsEdit(n){this.isEditEvent.emit(n)}updatePressedButton(n){this.pressedButtonTypeEvent.emit(n)}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-actions"]],inputs:{infModalId:"infModalId",formModalId:"formModalId",deleteModalId:"deleteModalId",putOnSaleModalId:"putOnSaleModalId",addButton:"addButton",removeButton:"removeButton",model:"model",id:"id"},outputs:{messageEvent:"messageEvent",isEditEvent:"isEditEvent",pressedButtonTypeEvent:"pressedButtonTypeEvent"},ngContentSelectors:g,decls:8,vars:6,consts:[[1,"btn-group","btn-online","btn-group-sm"],["class","btn btn-outline-dark","href","#","data-toggle","modal",3,"click",4,"ngIf"],["class","btn btn-outline-warning","href","#","data-toggle","modal",3,"click",4,"ngIf"],["class","btn btn-outline-danger","href","#","data-toggle","modal",3,"click",4,"ngIf"],["class","btn btn-outline-success","type","button",3,"click",4,"ngIf"],["class","btn btn-outline-danger","href","#",3,"click",4,"ngIf"],["href","#","data-toggle","modal",1,"btn","btn-outline-dark",3,"click"],["href","#","data-toggle","modal",1,"btn","btn-outline-warning",3,"click"],["href","#","data-toggle","modal",1,"btn","btn-outline-danger",3,"click"],["type","button",1,"btn","btn-outline-success",3,"click"],["href","#",1,"btn","btn-outline-danger",3,"click"]],template:function(n,l){1&n&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.YNc(2,_,2,1,"button",1),t.YNc(3,u,2,1,"button",2),t.YNc(4,h,2,1,"button",3),t.YNc(5,e,2,0,"button",4),t.YNc(6,o,2,0,"button",5),t.YNc(7,d,2,1,"button",1),t.qZA()),2&n&&(t.xp6(2),t.Q6J("ngIf","undefined"!=l.infModalId),t.xp6(1),t.Q6J("ngIf","undefined"!=l.formModalId),t.xp6(1),t.Q6J("ngIf","undefined"!=l.deleteModalId),t.xp6(1),t.Q6J("ngIf",l.addButton),t.xp6(1),t.Q6J("ngIf",l.removeButton),t.xp6(1),t.Q6J("ngIf","undefined"!=l.putOnSaleModalId))},directives:[p.O5],styles:[""]}),i})()}}]);