export interface IEmail {
  service: string;
  auth: {
    user: string;
    pass: string;
  }
}

export interface IEmailOption {
  from: string;
  to: string
  subject: string;
  html: string;

}

export const EmailConfig = {
  host: "smtp.ruaysombatcar.com",
  secure: false, // true for 465, false for other ports
  auth: {
    user: "admin@ruaysombatcar.com", // generated ethereal user
    pass: "@Toey12345678" // generated ethereal password
  },
  tls: {
    "rejectUnauthorized": false
  }
};

export const EmailOptionSend: IEmailOption = {
  from: "admin@ruaysombatcar.com",
  to: "wniichya@gmail.com",
  subject: "แบบฟอร์มแจ้งข้อมูลการติดต่อจากลูกค้า",
  html: ''
};
