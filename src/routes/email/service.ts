
import * as nodemailer from 'nodemailer';
import { EmailConfig } from './../../../configs/email';
import { EmailOptionSend } from './../../../configs/email';

export default class Service {

    public mailer = async (datas: any) => {
        try {
            return new Promise((resolve, reject) => {
                nodemailer.createTestAccount((err, account) => {
                    EmailOptionSend.html = (`<h4>ระบบแจ้งเตือนอัตโนมัติจากเว็บไซต์ รวยสมบัติคาร์เซ็นเตอร์ มีลูกค้าฝากข้อมูลการติดต่อไว้ตามรายละเอียด</h4>`+
                    `<html>`+
                        `<head>`+
                        `<style>`+
                        `table, th, td {`+
                        `  border: 1px solid black;`+
                        `  border-collapse: collapse;`+
                        `}`+
                        `th, td {`+
                        `  padding: 5px;`+
                        `}`+
                        `th {`+
                        `  text-align: left;`+
                        `}`+
                        `th {`+
                        `   font-size: 15px;`+
                        `}`+
                        `</style>`+
                        `</head>`+
                        `<body>`+
                        ``+
                        ``+
                        `<table style="width:30%">`+
                        `  <tr>`+
                        `    <th>ชื่อ :</th>`+
                        `    <td>${datas.name}</td>`+
                        `  </tr>`+
                        `  <tr>`+
                        `    <th>เบอร์โทรศัพท์ :</th>`+
                        `    <td>${datas.tel}</td>`+
                        `  </tr>`+
                        `  <tr>`+
                        `    <th>ไลน์ไอดีหรือเฟสบุ๊ค :</th>`+
                        `    <td>${datas.idline}</td>`+
                        `  </tr>`+
                        `  <tr>`+
                        `    <th>รายละเอียดเพิ่มเติม :</th>`+
                        `    <td>${datas.detail}</td>`+
                        `  </tr>`+
                        `</table>`+
                        ``+
                        `</body>`+
                        `</html>`);
                    const transporter = nodemailer.createTransport(EmailConfig);
                    transporter.sendMail(EmailOptionSend, function (err, info) {
                        if (err) reject(err);
                        else resolve({ result_code: "success" });
                        transporter.close();
                    });
                });
            }).catch((err) => {
                console.log(err);
                throw err;
            });
        } catch (err) {
        }
    }
}
