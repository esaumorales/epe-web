import ModulesGrid from "@/modules/users/components/ModulesGrid";
import HeroModules from "@/modules/users/components/HeroModules";
import ModulesFooter from "@/modules/users/components/ModulesFooter";
import WaveClipDefs from "@/modules/users/components/WaveClipDefs";

export default function UsersModulesPage() {
  return (
    <>
      {/* Definiciones de los recortes curvos, compartidas por el hero y las cards */}
      <WaveClipDefs />

      {/* Fondo en tres capas: base casi blanca, un degradado verde que sube desde
          abajo, y encima las ondas del asset en `multiply` para que su blanco deje
          pasar lo que hay debajo en vez de taparlo. */}
      <div className="absolute inset-0 z-0 bg-surface-page" aria-hidden="true">
        {/* El verde entra solo por abajo y se apaga a media altura, así el hero y
            la zona de cards quedan limpios. Mezclas bajas a propósito: el tinte
            tiene que leerse como un matiz del fondo, no como una capa de color. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top," +
              " color-mix(in srgb, var(--brand) 12%, transparent) 0%," +
              " color-mix(in srgb, var(--brand) 4%, transparent) 22%," +
              " transparent 50%)",
          }}
        ></div>

        <div
          className="absolute inset-0 mix-blend-multiply opacity-70"
          style={{
            // El asset viene en tono olivo y desaturado, y al multiplicarse daba un
            // verde apagado (tono 83, saturacion 29%). Estos valores lo dejan sobre
            // el tono del brand (95deg) sin subirle la saturacion de mas: la idea es
            // corregir el tono, no pintar la imagen.
            
            backgroundImage: "url('/image/fondo_modules.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* `overflow-hidden` + altos relativos: la vista entra completa en pantalla
          y nunca aparece scroll, sea cual sea el alto del viewport */}
      <div className="relative z-10 w-full h-full flex flex-col overflow-hidden">
        <HeroModules />
        <ModulesGrid />
        <ModulesFooter />
      </div>
    </>
  );
}
