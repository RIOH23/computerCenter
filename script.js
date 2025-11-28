var elegirComponentes = document.getElementById("elegirComponentes");
        
        function calcularTodo() {
            var total = 0;
            var gabinete = elegirComponentes.gabinete.value;

            switch (gabinete) {
                case "minitorre":
                    total += 700;
                    break;
                case "torre":
                    total += 1200;
                    break;
                case "desktop":
                    total += 550;
                    break;
                case "gamer":
                    total += 2500;
                    break;
            }

            var procesador = elegirComponentes.procesador.value;

            switch (procesador) {
                case "celeron":
                    total += 900;
                    break;
                case "intelI3":
                    total += 1500;
                    break;
                case "intelI5":
                    total += 3500;
                    break;
                case "intelI7":
                    total += 5000;
                    break;
            }

            var discoDuro = elegirComponentes.discoDuro.value;

            switch (discoDuro) {
                case "500GB":
                    total += 500;
                    break;
                case "750GB":
                    total += 800;
                    break;
                case "1TB":
                    total += 1000;
                    break;
                case "250GBSSD":
                    total += 900;
                    break;
                case "500GBSSD":
                    total += 1380;
                    break;
            }

            var memoriaRam = elegirComponentes.memoriaRam.value;

            switch (memoriaRam) {
                case "4GB":
                    total += 600;
                    break;
                case "8GB":
                    total += 1050;
                    break;
                case "16GB":
                    total += 1950;
                    break;
            }

            var monitor = elegirComponentes.monitor.value;
            switch (monitor) {
                case "17":
                    total += 2000;
                    break;
                case "19":
                    total += 2500;
                    break;
                case "21.5":
                    total += 3500;
                    break;
                case "24":
                    total += 4500;
                    break;
                case "27":
                    total += 6000;
                    break;
                case "32":
                    total += 8000;
                    break;
            }

            if (elegirComponentes.mouse.checked) {
                total += 300;
            }
            if (elegirComponentes.teclado.checked) {
                total += 500;
            }
            if (elegirComponentes.bocinas.checked) {
                total += 700;
            }
            if (elegirComponentes.webcam.checked) {
                total += 600;
            }
            if (elegirComponentes.ups.checked) {
                total += 1200;
            }
            if (elegirComponentes.alfombrilla.checked) {
                total += 150;
            }
            if (elegirComponentes.controlGamer.checked) {
                total += 800;
            }
            if (elegirComponentes.luzRGB.checked) {
                total += 400;
            }
            if (elegirComponentes.sillaGamer.checked) {
                total += 3500;
            }
            if (elegirComponentes.adaptadorWiFi.checked) {
                total += 250;
            }
            if (elegirComponentes.hubUSB.checked) {
                total += 300;
            }
            if (elegirComponentes.audifonos.checked) {
                total += 900;
            }
            if (elegirComponentes.monitorAdicional.checked) {
                total += 4000;
            }
            if (elegirComponentes.soporte.checked) {
                total += 600;
            }
            if (elegirComponentes.ventilador.checked) {
                total += 350;
            }
            if (elegirComponentes.microfono.checked) {
                total += 450;
            }
            if (elegirComponentes.lectorSD.checked) {
                total += 200;
            }
            if (elegirComponentes.cableHDMI.checked) {
                total += 150;
            }
            if (elegirComponentes.baseRefrigerante.checked) {
                total += 800;
            }
            if (elegirComponentes.cajaHerramientas.checked) {
                total += 500;
            }


            // alert("El precio total de su configuración es: $" + total);
            elegirComponentes.total.value = total;

            console.log(total);
        }