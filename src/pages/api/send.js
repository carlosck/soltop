import { NextResponse } from "next/server";
import { Resend } from "resend";

export const config = {
  runtime: "edge",
};

export async function POST(req) {
    const formData = await req.formData();
    console.log('formData______',formData);
    
    try {    
    
    const emailData = {
        from: "noreply@tuapp.com",
        to: "carlosck@gmail.com",
        subject: "Nuevo Formulario Enviado",
        //text: `Nombre: ${formData.nombre}\nPaterno: ${formData.paterno}\nMaterno: ${formData.materno}\nCorreo: ${formData.correo}\nCelular: ${formData.celular}`,
        text: `pruweba`,
    };

    const resend = new Resend('re_V37JkJCC_3vfA8L9zAZz1cqiTVfkyMcyb');
    console.log('resend',resend);
    await resend.emails.send(emailData);
    return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
    console.log('error',error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export default POST;