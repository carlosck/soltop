import { NextResponse } from "next/server";
import { Resend } from "resend";


async function POST(req: Request) {
    const formData = await req.formData();
    console.log('formData______',req);    
    
    
    try {    
    
    const emailData = {
        from: "carlosck@soltop.com.mx",
        to: "carlosck@gmail.com",
        subject: "Nuevo Formulario Enviado",
        text: `Nombre: ${ formData.get('nombre') }\nPaterno: ${formData.get('paterno')}\nMaterno: ${formData.get('materno')}\nCorreo: ${formData.get('correo')}\nCelular: ${formData.get('celular')}`,
        attachments: [
            {
              filename: 'invoice.pdf',
              content: Buffer.from(await (formData.get('cv') as File).arrayBuffer()),
            },
          ]
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