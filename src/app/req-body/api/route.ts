import { NextResponse } from "next/server";
import { Resend } from "resend";


const handler= async (req)=> {
    const formData = await req.formData();
    console.log('formData______',formData.cv);   
    const fileData = formData.get('cv');
    console.log('fileData______',fileData);
    const fileBuffer = await fileData.arrayBuffer();
    const fileArray = new Uint8Array(fileBuffer);
    const fileBinary = Buffer.from(fileArray).toString('base64');
    
    try {    
    
    const emailData = {
        from: "carlosck@soltop.com.mx",
        to: "carlosck@gmail.com",
        subject: "Nuevo Formulario Enviado",
        
        text: `Nombre: ${ formData.nombre }\nPaterno: ${formData.paterno}\nMaterno: ${formData.materno}\nCorreo: ${formData.correo}\nCelular: ${formData.celular}`,
        attachments: [
            {
                filename: formData.cv.name,
                content: fileBinary,
                type: formData.cv.type
            }
        ]
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
export { handler as POST }
