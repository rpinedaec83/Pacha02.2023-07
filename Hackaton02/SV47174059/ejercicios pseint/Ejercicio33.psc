Algoritmo ContinuarPrograma
    Definir continuar como Caracter
	
    Mientras continuar = 'S' o continuar = 's' Hacer
        Escribir "¡Hola! ¿Deseas continuar con el programa? (S/N): "
        Leer continuar
		
        Si continuar = 'S' o continuar = 's' Entonces
            // Aquí colocas el código que deseas que se ejecute cuando el usuario continúa
            Escribir "Continuando con el programa..."
        Sino
            Si continuar = 'N' o continuar = 'n' Entonces
                Escribir "Hasta luego. Programa finalizado."
            Sino
                Escribir "Opción inválida. Por favor, ingresa: S o N"
            Fin Si
        Fin Si
    Fin Mientras
Fin Algoritmo
