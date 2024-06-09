import globo from "@/assets/planeta.png";
import ONU from "@/assets/Rectangle 14.png";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div>
      <Header currentPage="home"/>
      <Separator/>
      <div className="flex justify-center">
        <Card calendar="08/06/2024" comments={100} description="A imagem mostra a entrada de um prédio da ONU, ladeada por bandeiras de vários países, alinhadas em duas filas que formam um corredor visual até o edifício central. O ambiente é cercado por árvores e o céu está parcialmente nublado, transmitindo solenidade e importância institucional." image={ONU} title="Entrada da Sede da ONU com as Bandeiras de Todo o Mundo"/>
        <Card calendar="08/06/2024" comments={100} description="A imagem mostra um globo terrestre em destaque, focado na África, Europa e partes da Ásia, sobre uma mesa de madeira em um ambiente interno com iluminação suave e um fundo desfocado que sugere uma sala aconchegante e rústica." image={globo} title="Our Planet"/>
      </div>
    </div>
  )
}
