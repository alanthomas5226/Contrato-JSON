const contractData = {
    contractId: "12345",
    client: {
        name: "Juan Pérez",
        email: "juan.perez@example.com",
        phone: "+123456789"
    },
    service: {
        type: "Consultoría",
        description: "Consultoría en desarrollo de software",
        price: 1500.00
    },
    duration: {
        startDate: "2024-01-01",
        endDate: "2024-06-30"
    },
    terms: [
        "El pago se realizará al inicio del contrato.",
        "Se requiere una notificación de 30 días para cancelar el contrato."
    ],
    signature: {
        clientSignature: "Juan Pérez",
        date: "2024-01-01"
    }
};

fetch('http://localhost:3000/api/contracts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(contractData)
})
.then(response => response.json())
.then(data => {
    console.log('Contrato enviado exitosamente:', data);
})
.catch(error => console.error('Error al enviar el contrato:', error));
