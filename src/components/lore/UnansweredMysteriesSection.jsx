import "/src/css/lore/UnansweredMysteriesSection.css";

const mysteries = [
  {
    id: "void-origin",
    title: "Void Nereden Geldi?",
    description:
      "Void’un Mytherra’ya dışarıdan mı sızdığı, yoksa dünyanın yaratımında mı var olduğu hâlâ bilinmiyor."
  },
  {
    id: "first-god",
    title: "İlk Varlık Kimdi?",
    description:
      "Tüm kadim metinler varlıklardan bahseder, ancak onları yaratan ilk varlığa dair hiçbir kayıt yoktur."
  },
  {
    id: "shadow-sovereign",
    title: "Gölge Hükümdar Gerçek mi?",
    description:
      "Bazı efsaneler gölgelerin tek bir bilinç tarafından yönetildiğini iddia eder. Kanıt yok, izler var."
  },
  {
    id: "vanished-age",
    title: "Kayıp Çağ",
    description:
      "Takvimlerden silinmiş bir çağın varlığına dair kalıntılar bulunmuştur. Ancak kimse bu çağda ne olduğunu bilmiyor."
  }
];

export default function UnansweredMysteriesSection() {
  return (
    <section className="unanswered-mysteries-section" aria-labelledby="mysteries-heading">
      <header className="mysteries-header">
        <h2 id="mysteries-heading">Cevapsız Gizemler</h2>
        <p>
          Tarih yazıldı, mitler anlatıldı…  
          Ancak Mytherra’da bazı sorular hâlâ yanıt bekliyor.
        </p>
      </header>

      <div className="mysteries-grid">
        {mysteries.map((mystery) => (
          <article key={mystery.id} className="mystery-card">
            <h3>{mystery.title}</h3>
            <p>{mystery.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
