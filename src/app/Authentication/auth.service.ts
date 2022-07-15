import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {
	public postlogin = null;
	public allowroute: boolean = false;
	private redirectUrl: string = '/';
	private loginUrl: string = '/Login';
	public isloggedIn: boolean = false;
	constructor() {

	}
	isUserAuthenticated(): boolean {
		if (this.postlogin) {
			this.isloggedIn = true;
		}
		else
			this.isloggedIn = false;
		return this.isloggedIn;
	}
	isUserLoggedIn(): boolean {
		return this.isloggedIn;
	}
	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getLoginUrl(): string {
		return this.loginUrl;
	}
} 