import Image from "next/image";
import type { ReactNode } from "react";

type PhoneProps = {
  /** Chemin d'une vraie capture (ex. "/screenshots/home.png"). Si absent : la maquette dessinée s'affiche. */
  screenshot?: string | null;
  alt: string;
  width?: number;
  height?: number;
  /** true : le bas du téléphone est coupé par le conteneur (effet "qui sort du bas"). */
  clipBottom?: boolean;
  /** Maquette dessinée affichée tant qu'aucune capture n'est fournie. */
  children: ReactNode;
};

/**
 * Cadre de téléphone. Le design autour (cadre, ombre, position) reste identique ;
 * seul l'écran change : capture réelle si fournie, sinon maquette dessinée.
 */
export default function Phone({
  screenshot,
  alt,
  width = 300,
  height = 540,
  clipBottom = true,
  children,
}: PhoneProps) {
  return (
    <div
      className={`phone ${clipBottom ? "phone--clip" : "phone--full"}`}
      // `aspectRatio` plutôt qu'une hauteur fixe : sur un écran étroit le cadre
      // se réduit proportionnellement au lieu de s'étirer.
      style={{ width, aspectRatio: `${width} / ${height}`, maxWidth: "100%" }}
    >
      <div className="phone-screen">
        {screenshot ? (
          <Image src={screenshot} alt={alt} fill sizes={`${width}px`} priority={false} />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
