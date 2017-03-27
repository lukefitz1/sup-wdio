class MyAccount {
	get loginForm() { return $('#login-form'); }
	get un() { return $('#email'); }
	get pw() { return $('#pass'); }
	get loginBtn() { return $('#send2'); }
	get registerBtn() { return $('#maincontent > div.columns > div > div.login-container > div.block.block-new-customer > div.block-content > div > div > a'); }	
	get dashboard() { return $('#maincontent'); }
	get accountCreateForm() { return $('#form-validate'); }
	get fn() { return $('#firstname'); }
	get ln() { return $('#lastname'); }
	get email() { return $('#email_address'); }
	get createPw() { return $('#password'); }
	get confirmPw() { return $('#password-confirmation'); }
	get submitBtn() { return $('#form-validate > div > div.primary > button'); }
	get successMessage() { return $('#maincontent > div.page.messages > div:nth-child(2) > div:nth-child(1) > div > div'); }

	login(un, pw) {
		this.un.setValue(un);
		this.pw.setValue(pw);

		this.loginForm.submitForm();
	}

	createAccount(fn, ln, em, pw) {
		this.fn.setValue(fn);
		this.ln.setValue(ln);
		this.email.setValue(em);
		this.createPw.setValue(pw);
		this.confirmPw.setValue(pw);

		this.accountCreateForm.submitForm();
	}

}

module.exports = new MyAccount();