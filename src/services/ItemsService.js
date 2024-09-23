import ArtistImage from "@/assets/images/artist.png"
import BuilderImage from "@/assets/images/builder.png"
import CursorIcon from "@/assets/icons/cursor.svg?component"
import CodeIcon from "@/assets/icons/code.svg?component"
import FluidImage from "@/assets/images/fluid.png"
import StarIcon from "@/assets/icons/star.svg?component"
import BreakpointImage from "@/assets/images/breakpoint.png"
import FlashIcon from "@/assets/icons/flash.svg?component"
import SecretImage from "@/assets/images/secret.png"
import SwitchIcon from "@/assets/icons/switch.svg?component"
import BoostedImage from "@/assets/images/boosted.png"
import SmileyIcon from "@/assets/icons/smiley.svg?component"

class ItemsService {
  static getItems() {  
    return [
      {
        title: "L'ARTISTE DE RENOM",
        descriptions: ["**Le design**, c’est son terrain de jeu. Il maîtrise et retranscrit correctement chaque pixel de la maquette.", "Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou de border-radius ; **Figma n’a aucun secret pour ce Dev de talent**."],
        type: "DESIGN",
        pointCount: 6,
        imageUrl: ArtistImage,
        footerIcon: CursorIcon,
        color: "purple",
        fromUsers: ["maislina_"]
      },
      {
        title: "LE BÂTISSEUR DE CODE",
        descriptions: ["Ses lignes de code sont des fondations solides. C’est **un maître du front**, capable de structurer les systèmes les plus complexes sans se casser la tête.", "**Maitre de VSCode**, il a surement fini le challenge en s’assurant d’avoir le code le plus clair et le plus propre des 36 participants."],
        type: "CODE",
        pointCount: 6,
        imageUrl: BuilderImage,
        footerIcon: CodeIcon,
        color: "pink",
        fromUsers: ["Chris"]
      },
      {
        title: "LE MAITRE DE LA FLUIDITÉ",
        descriptions: ["**Le responsive design**, c’est son dada. Il a l’œil pour les détails et s’assure que chaque élément s’adapte parfaitement à chaque résolution.", "Il a suivi le challenge de près, et a probablement fini avec un site qui s’adapte parfaitement à chaque écran."],
        type: "MOTION",
        pointCount: 3,
        imageUrl: FluidImage,
        footerIcon: CursorIcon,
        color: "green",
        fromUsers: ["Lina", "Chris"]
      },
      {
        title: "LE CHERCHEUR DE BREAKPOINT",
        descriptions: ["Quelle que soit la taille de l’écran, il garantit une expérience utilisateur sans faille. Chaque site **s’adapte à tous les supports**, du mobile au grand écran.", "Il fait attention à **chaque breakpoint** attentivement, on ne pourra pas le reprendre à l’inspection!"],
        type: "RESPONSIVE",
        pointCount: 2,
        imageUrl: BreakpointImage,
        footerIcon: FlashIcon,
        color: "blue",
        fromUsers: ["Lina", "Chris"]
      },
      {
        title: "LE MAITRE DES SECRETS",
        descriptions: ["Derrière une ligne de code bien choisie se cache un ***secret bien gardé**. Il glisse la surprise qui surprendra les utilisateurs les plus curieux.", "Dev attentif aux comportements utilisateurs il saura cacher l’**Easter Egg** au meilleur endroit."],
        type: "EASTER EGG",
        pointCount: 3,
        imageUrl: SecretImage,
        footerIcon: SwitchIcon,
        color: "yellow",
        fromUsers: ["Lina", "Chris"]
      },
      {
        title: "LE SUR-BOOSTED",
        descriptions: ["Il excelle dans tous les domaines, alliant design, propreté de code, réactivité, animations fluides et créativité cachée. **Un vrai prodige** qui a su briller dans chaque aspect du développement.", "Ce dev aux **multitalents** a reçu la standing ovation du jury."],
        type: "BIG BOSS",
        pointCount: "Infinite",
        imageUrl: BoostedImage,
        footerIcon: SmileyIcon,
        color: "orange",
        fromUsers: ["Lina", "Chris"]
      }
    ]
  }
}

export default ItemsService;