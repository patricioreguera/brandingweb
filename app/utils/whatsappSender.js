export function whatsappSender({ services }) {
	let total = 0;
	let mensaje = `Hola, me gustaría consultar por los siguientes servicios: `;
	const numeroTelefono = +34605373537;
	// Construir el mensaje y calcular el total
	for (let i = 0; i < services.length; i++) {
		mensaje += services[i].title + " (Precio: " + services[i].price + "€), ";
		total += services[i].price;
	}

	mensaje += "Precio total: " + total + "€";

	// Codificar el mensaje para URL
	let mensajeCodificado = encodeURIComponent(mensaje);

	// Crear el enlace de WhatsApp
	/* let enlaceWhatsApp = "https://wa.me/?text=" + mensajeCodificado; */
	let enlaceWhatsApp = `https://wa.me/${numeroTelefono}?text=${mensajeCodificado}`;
	// Abrir el enlace
	window.open(enlaceWhatsApp, "_blank");
}
