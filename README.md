# CORS-LAB
>[!IMPORTANT] 
>Este Proyecto esta pensado para explicar un error de CORS y como solucionarlo, es solo un mini laboratorio practico.

## Definición
Un error de CORS (Cross-Origin Resource Sharing) ocurre cuando una aplicación web hace una solicitud HTTP desde un origen (dominio, protocolo y puerto) diferente al del servidor al que se está intentando acceder, y el servidor no permite explícitamente esa solicitud en sus configuraciones.

## Cómo funciona CORS y por qué ocurre el error

El navegador aplica políticas de seguridad conocidas como Same-Origin Policy para proteger a los usuarios de ataques malintencionados. Esto significa que solo permite que las páginas web interactúen con recursos de su mismo origen, a menos que el servidor permita explícitamente accesos de otros orígenes a través de CORS.

Si un servidor no incluye los encabezados adecuados de CORS en su respuesta, o si los encabezados son incorrectos o insuficientes, el navegador bloquea la solicitud, generando un error de CORS.

## Ejemplo de un error de CORS

Supongamos que una página web alojada en https://example.com hace una solicitud a una API alojada en https://api.anotherdomain.com. Si la API no está configurada para permitir solicitudes desde https://example.com, el navegador mostrará un error como:
```plaintext
Access to fetch at 'https://api.anotherdomain.com/resource' from origin 'https://example.com' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the 
requested resource.
```
## Posibles causas

1. Falta del encabezado Access-Control-Allow-Origin en la respuesta del servidor.
2. El encabezado Access-Control-Allow-Origin no incluye el dominio de la solicitud.
3. Configuraciones erróneas para métodos HTTP como PUT, DELETE, o encabezados personalizados.
4. Errores en solicitudes preflight (OPTIONS) para peticiones complejas.
5. Restricciones en configuraciones del servidor o en proxies intermedios.

## Solución
1. Configuración del servidor:
Asegúrate de que el servidor incluya el encabezado Access-Control-Allow-Origin con el dominio permitido o con el carácter * (para permitir cualquier origen).
```plaintext
Access-Control-Allow-Origin: https://example.com
```
2. Permitir métodos adicionales: Si se necesitan métodos distintos de GET y POST, como PUT o DELETE, incluye el encabezado:
```plaintext
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
```
3. Manejo de solicitudes preflight: Para solicitudes complejas, el servidor debe manejar correctamente las solicitudes OPTIONS enviadas antes de la solicitud real.
4. Revisar proxies o configuraciones intermedias: Asegúrate de que no haya proxies bloqueando o alterando los encabezados.

Recuerda que CORS debe configurarse cuidadosamente para no comprometer la seguridad del servidor al permitir orígenes no confiables.

##Sobre el proyecto
