import {Directive, Component, ElementRef, HostListener} from '@angular/core';

//装饰器是给编译器看的，装饰器类似于Spring里面的注解
@Component({
	selector: 'home',
	styleUrls: ['./home.css'],
	templateUrl: './home.html'
})
//实际上就像写一个Java类
export class Home {
	welcome: string;
	items: string[];
	constructor() {
		this.welcome = "欢迎访问网上商城！";
		this.items = ["智能电视", "冰箱", "洗衣机", "路由器", "空调"];
	}
	addItem(newItemName: string) {
		if (!newItemName) {
			alert("请输入商品名称");
			return;
		}
		this.items.push(newItemName);
	}
}
