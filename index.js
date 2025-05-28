const url_base = 'https://fakestoreapi.com';
const [, , metodo, ruta, ...args] = process.argv;

function gestor_productos() {
    try {
        if (metodo === 'GET' && ruta === 'products') {
            fetch(`${url_base}/products`)
                .then(response => response.json())
                .then(data => console.log(data));

        } else if (metodo === 'GET' && ruta.startsWith('products/')) {
            const id = ruta.split('/')[1];
            fetch(`${url_base}/products/${id}`)
                .then(response => response.json())
                .then(data => console.log(data));

        } else if (metodo === 'POST' && ruta === 'products') {
            const [title, price, category] = args;
            fetch(`${url_base}/products`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, price, category})
            })
                .then(response => response.json())
                .then(data => console.log(data));

        } else if (metodo === 'DELETE' && ruta.startsWith("products/")) {
            const id = ruta.split('/')[1];
            fetch(`${url_base}/products/${id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => console.log(data))

        } else {
            console.log('Comando no reconocido.');
        }

    } catch (err) {
        console.error('Error:', err.message);
    }
}

gestor_productos();
