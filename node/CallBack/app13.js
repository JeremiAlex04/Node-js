/*
Crea una función que simule el proceso de compra usando callbacks:
- verificarInventario() - verifica si hay stock
- procesarPago() - procesa el pago
- enviarEmailConfirmacion() - envía email de confirmación
*/


function verificarInventario(producto, callback) {
    console.log(`Verificando inventario para: ${producto}`);
    setTimeout(() => {
        const hayStock = Math.random() > 0.3; 
        if (hayStock) {
            callback(null, `Stock disponible para ${producto}`);
        } else {
            callback(`No hay stock para ${producto}`, null);
        }
    }, 1000);
}

function procesarPago(monto, callback) {
    console.log(`Procesando pago de $${monto}`);
    setTimeout(() => {
        const pagoExitoso = Math.random() > 0.2; 
        if (pagoExitoso) {
            callback(null, `Pago de $${monto} procesado exitosamente`);
        } else {
            callback(`Error en el pago de $${monto}`, null);
        }
    }, 1500);
}

function enviarEmailConfirmacion(email, callback) {
    console.log(`Enviando email a: ${email}`);
    setTimeout(() => {
        const emailEnviado = Math.random() > 0.1; 
        if (emailEnviado) {
            callback(null, `Email de confirmación enviado a ${email}`);
        } else {
            callback(`Error al enviar email a ${email}`, null);
        }
    }, 800);
}

// Proceso de compra con callbacks anidados
function procesoDeCompra(producto, monto, email) {
    console.log("=== INICIANDO PROCESO DE COMPRA ===");
    
    verificarInventario(producto, (errorInventario, resultadoInventario) => {
        if (errorInventario) {
            console.error(`Error: ${errorInventario}`);
            return;
        }
        console.log(`${resultadoInventario}`);
        
        procesarPago(monto, (errorPago, resultadoPago) => {
            if (errorPago) {
                console.error(`Error: ${errorPago}`);
                return;
            }
            console.log(`${resultadoPago}`);
            
            enviarEmailConfirmacion(email, (errorEmail, resultadoEmail) => {
                if (errorEmail) {
                    console.error(`Error: ${errorEmail}`);
                    return;
                }
                console.log(`${resultadoEmail}`);
                console.log("¡Compra completada exitosamente!");
            });
        });
    });
}

// Ejecutar el proceso
procesoDeCompra("Laptop Gaming", 1200, "cliente@ejemplo.com");







