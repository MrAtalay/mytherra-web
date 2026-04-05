import "/src/css/lore/LoreAgesSection.css";

const ages = [
  {
    id: "creation",
    title: "Yaratılış Çağı",
    tag: "İlksel Denge",
    description:
      "Mytherra, Varlık, İrade ve Dönüşüm akımlarının kesişiminde doğdu. Bu çağda dünya henüz bilinçli değildi; ancak hatırlamaya başlamıştı.",
  },
  {
    id: "ancient-magi",
    title: "Kadim Büyücüler Çağı",
    tag: "Mana ile İlk Antlaşma",
    description:
      "İlk büyücüler manayı kontrol etmeyi değil, onunla konuşmayı öğrendi. Güç arttı; bedeller henüz anlaşılmadı.",
  },
  {
    id: "silent-collapse",
    title: "Sessiz Çöküş",
    tag: "Zamanın Yarılması",
    description:
      "Mutatio kırıldığında dünya bağırmadı. Zaman büküldü, ölüm anlamını yitirdi ve gerçeklik kendi üzerine kapandı.",
  },
  {
    id: "fracture-age",
    title: "Parçalanma Dönemi",
    tag: "Boss Çağları",
    description:
      "Okyanus bilinç kazandı, gölgeler konuştu, küller hatırladı. Her bölge kendi iradesini doğurdu.",
  },
  {
    id: "present",
    title: "Şimdiki Çağ",
    tag: "Seçim ve Yankı",
    description:
      "Dünya artık beklemiyor. Mytherra, onu değiştirecek olanın kim olacağını izliyor.",
  },
];

export default function LoreAgesSection() {
  return (
    <section className="lore-ages-section" aria-labelledby="ages-heading">
      <div className="lore-ages-inner">
        <h2 id="ages-heading" className="section-title">
          Kadim Çağlar
        </h2>

        <div className="ages-grid">
          {ages.map(age => (
            <article key={age.id} className="age-card">
              <span className="age-tag">{age.tag}</span>
              <h3>{age.title}</h3>
              <p>{age.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
