/**
 * Captures d'écran réelles de l'application.
 *
 * - `null`  -> le téléphone affiche la maquette dessinée (design actuel).
 * - chemin  -> le téléphone affiche votre image à la place.
 *
 * Déposez les fichiers dans /public/screenshots puis renseignez le chemin ici.
 * Exemple : home: "/screenshots/home.png"
 */
export type ScreenshotKey = "home" | "order";

export const screenshots: Record<ScreenshotKey, string | null> = {
  home: null,
  order: null,
};
