import { withBasePath } from '@/lib/paths';

export const PRODUCTS = {
  cakes: [
    {
      id: "c1",
      title: "🍪Cookie New York Classic",
      price: 3300,
      tag: `Nuestra versión del clásico neoyorquino:
            Una cookie tierna y un centro irresistible de manjar o chocolate.
            Crujiente por fuera, suave por dentro, y con ese toque que hace que cada mordida se sienta como un abrazo dulce ₊˚⊹ᰔ`,
      img: withBasePath('/images/cookies/newyork.jpg'),
    },
    {
      id: "c2",
      title: "🍋Cookies Lemon Pie",
      price: 3300,
      tag: `Refrescante, delicada y con un toque gourmet.
      Una galleta de limón con relleno de ganache cítrica, perfecta para quienes buscan un dulce equilibrio entre frescura y amor.
      Cada mordida es un rayito de sol. ₊˚⊹ᰔ`,
      img: withBasePath('/images/cookies/lemon.jpg'),
    },
    {
      id: "c3",
      title: "🌈Cookies Lucky Charms",
      price: 3500,
      tag: `La magia también se hornea.
            Galleta suave, rellena de malvavisco fundido y coronada con los coloridos Lucky Charms.
            Un viaje directo a la infancia, donde cada bocado sabe a ilusión y ternura. ₊˚⊹ᰔ`,
      img: withBasePath('/images/cookies/luckycharms.jpg'),
    },
    {
      id: "c4",
      title: "🎨Cookies Oreo",
      price: 3700,
      tag: `Colores, textura y pura felicidad en forma de galleta.
            Crujiente por fuera, suave por dentro, con trocitos de Oreo que derriten el corazón.
            Hecha para los que creen que la vida —y el postre— deben ser alegres y dulces. ₊˚⊹ᰔ`,
      img: withBasePath('/images/cookies/oreo.jpg'),
    },
    {
      id: "c5",
      title: "🥜Cookies Peanuts",
      price: 3700,
      tag: `Chocolate intenso, trozos de maní tostado y un centro cremoso de mantequilla de maní.
            Una combinación perfecta entre lo dulce y lo salado, pensada para quienes aman los contrastes que conquistan desde el primer bocado ₊˚⊹ᰔ`,
      img: withBasePath('/images/cookies/peanuts.jpg'),
    }
    // ,
    // {
    //   id: "c6",
    //   title: "Caja de 3 Galletas Sorpresa",
    //   price: 8990,
    //   tag: `La caja definitiva con tus galletas preferidas (Puede venir cualquiera de los 5 tipos de galleta. ). ₊˚⊹ᰔ`,
    //   img: withBasePath('/images/cookies/peanuts.jpg'),
    // },
  ],
  scoops: [
    { id: "s1", title: "Mystery Scoop — Básico",  price: 2500, rarity: "⭐",   img: "/images/scoops/scoops1.png" },
    { id: "s2", title: "Mystery Scoop — Premium", price: 3900, rarity: "⭐⭐",  img: "/images/scoops/scoops2.png" },
    { id: "s3", title: "Mystery Scoop — Ultra",   price: 5900, rarity: "⭐⭐⭐", img: "/images/scoops/scoops3.png" },
  ],
} as const;

export type Kind = keyof typeof PRODUCTS;
export type LineItem = { id: string; title: string; price: number; qty: number; kind: Kind };
