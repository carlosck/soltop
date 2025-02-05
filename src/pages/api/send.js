import { NextResponse } from "next/server";
import { Resend } from "resend";

export const config = {
  runtime: "edge",
};

export async function POST(req) {
    const formData = await req.formData();
    console.log('formData______',formData);    
    const jsonData = await req.json();
    console.log('jsonData______',jsonData);
    
    try {    
    
    const emailData = {
        from: "carlosck@soltop.com.mx",
        to: "carlosck@gmail.com",
        subject: "Nuevo Formulario Enviado",
        text: `Nombre: ${formData.nombre ? formData.nombre : jsonData.nombre}\nPaterno: ${formData.paterno}\nMaterno: ${formData.materno}\nCorreo: ${formData.correo}\nCelular: ${formData.celular}`,
        //text: `pruweba`,
    };

    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log('resend',resend);
    await resend.emails.send(emailData);
    return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
    console.log('error',error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export default POST;