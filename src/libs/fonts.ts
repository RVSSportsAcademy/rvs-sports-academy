import {
  Outfit,
  Roboto,
  Montserrat,
  Oswald,
  Roboto_Condensed,
  Inter,
  Manrope,
} from "next/font/google";

/*
|--------------------------------------------------------------------------
| Existing Fonts
|--------------------------------------------------------------------------
| Keeping these for compatibility while we redesign each slice.
| They will be removed once the migration is complete.
|--------------------------------------------------------------------------
*/

const outfit_init = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "500", "700"],
});

const roboto_init = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

const montserrat_init = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

const oswald_init = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "500", "700"],
});

const roboto_condensed_init = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-condensed",
  weight: ["400", "700"],
});

/*
|--------------------------------------------------------------------------
| New Design System Fonts
|--------------------------------------------------------------------------
*/

const inter_init = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const manrope_init = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
});

/*
|--------------------------------------------------------------------------
| Exports
|--------------------------------------------------------------------------
*/

export const outfit = outfit_init.variable;
export const roboto = roboto_init.variable;
export const montserrat = montserrat_init.variable;
export const oswald = oswald_init.variable;
export const roboto_condensed = roboto_condensed_init.variable;

/* New Fonts */

export const inter = inter_init.variable;
export const manrope = manrope_init.variable;