import "dotenv/config";
import { prisma } from "./src/config/db.js";
import { randomUUID } from "crypto";

const j = (v) => JSON.stringify(v ?? []);

async function bulkCreate(model, rows) {
  for (const row of rows) {
    await model.create({ data: { id: randomUUID(), ...row } });
  }
}

async function seed() {
  await bulkCreate(prisma.champion, [
    { name: "Aerrai", title: "The Shapeshifter", role: "Adaptive DPS / Utility", element: "Primal", description: "Aerrai, kadim sekil degistirme buyusunu kullanarak savas alaninda form degistirir.", abilities: j(["Beast Form","Spirit Spear","Wild Recall"]) },
    { name: "Anwen", title: "The Arcane Vanguard", role: "Mage / Control", element: "Arcane", description: "Anwen, kadim buyuleri modern savas teknikleriyle harmanlar.", abilities: j(["Shadow Burden","Umbral Veil","Shadow Brand","Umbral Assault","Sovereign of Shadows"]) },
    { name: "Myrkann", title: "The Shadow Sovereign", role: "Suikastci", element: "Shadow", description: "Myrkann golgelerden gelir, dusman fark ettiginde coktan gecmistir.", abilities: j(["Shadow Burden","Umbral Veil","Shadow Brand","Umbral Assault","Sovereign of Shadows"]) },
  ]);
  console.log("Champions OK");

  await bulkCreate(prisma.boss, [
    { name: "Solaryx", title: "Ebedi Gunes Muhafizi", region: "Elarion Citadel", phaseCount: 3, difficulty: "Legendary", alignment: "Light", elements: j(["Light","Fire"]), role: "Guardian", shortLore: "Elarion kalbini korumakla gorevlendirilmis kadim bir muhafiz." },
    { name: "Nyxara", title: "Perdenin Anasi", region: "Veil Depths", phaseCount: 4, difficulty: "Mythic", alignment: "Shadow", elements: j(["Shadow","Void"]), role: "Matron", shortLore: "Gerceklik ile golgenin arasinda hukum suren bilinçli bir varlik." },
    { name: "Tharok", title: "Dunyakiran", region: "Ferraterra Core", phaseCount: 2, difficulty: "Legendary", alignment: "Neutral", elements: j(["Earth","Fire"]), role: "Worldbreaker", shortLore: "Topragin derinliklerinden uyanan devasa bir yikim gucu." },
    { name: "Aelthryn", title: "Kadim Agac Efendisi", region: "Verdant Wilds", phaseCount: 3, difficulty: "Epic", alignment: "Nature", elements: j(["Nature","Arcane"]), role: "Treelord", shortLore: "Doganin dengesini bozanlara karsi uyanan ormanin iradesi." },
    { name: "Kaelor", title: "Dusmuss Kral", region: "Crimson Throne", phaseCount: 3, difficulty: "Epic", alignment: "Corrupted", elements: j(["Blood","Dark"]), role: "Fallen King", shortLore: "Bir zamanlar adaletle hukumeden kral, yozlasmis bir tirana donustu." },
    { name: "Velmora", title: "Ucurumun Sarkicisi", region: "Abyssal Shores", phaseCount: 2, difficulty: "Epic", alignment: "Hostile", elements: j(["Water","Void"]), role: "Siren", shortLore: "Sarkisiyla zihinleri ele geciren kadim bir varlik." },
    { name: "Ignivar", title: "Kul Efendisi", region: "Ashen Caldera", phaseCount: 4, difficulty: "Mythic", alignment: "Fire", elements: j(["Fire","Chaos"]), role: "Cinder Lord", shortLore: "Sonmeyen alevlerle cevrili yikim yaratigi." },
    { name: "Xaroth", title: "Perdenin Gozcusu", region: "Ancient Observatory", phaseCount: 5, difficulty: "Mythic", alignment: "Unknown", elements: j(["Arcane","Void"]), role: "Observer", shortLore: "Zamani gozlemleyen, niyetleri bilinmeyen kozmik varlik." },
  ]);
  console.log("Bosses OK");

  await bulkCreate(prisma.npc, [
    { name: "Aurelion Valcrest", title: "Gunesin Koruyucusu", region: "Elarion", role: "King", alignment: "Light", shortLore: "Elarion Kralligi'nin kadim hukumdari." },
    { name: "Seraphine Dawnblade", title: "Altin Muhafizlarin Komutani", region: "Elarion", role: "General", alignment: "Light", shortLore: "Gunes ordularini yoneten komutan." },
    { name: "High Priest Solmar", title: "Isigin Sesi", region: "Elarion", role: "Priest", alignment: "Light", shortLore: "Gunes Tapinagi'nin en bilge rahibi." },
    { name: "Noctyrr", title: "Golgelerin Efendisi", region: "Mytherra", role: "Shadow Lord", alignment: "Dark", shortLore: "Ay isiginda hukumeden kadim bir varlik." },
    { name: "Elarys Moonveil", title: "Ay Arsivci si", region: "Mytherra", role: "Scholar", alignment: "Neutral", shortLore: "Kadim metinleri koruyan gizemli bir bilgin." },
    { name: "Kael", title: "Golgeler Arasinda", region: "Mytherra", role: "Wanderer", alignment: "Neutral", shortLore: "Gecmisi bilinmeyen bir yolcu." },
    { name: "Queen Thalara", title: "Topragin Anasi", region: "Ferraterra", role: "Queen", alignment: "Neutral", shortLore: "Ferraterra'nin dogayla uyumlu krali cesi." },
    { name: "Bram Earthroot", title: "Yesil Muhafiz", region: "Ferraterra", role: "Druid", alignment: "Friendly", shortLore: "Ormanlarin ve canlilarin koruyucusu." },
    { name: "Alvor", title: "Anwen'in Babasi", region: "Ferraterra", role: "Blacksmith", alignment: "Friendly", shortLore: "Anwen'in babasi, yetenekli bir demirci." },
    { name: "Rogar Steelhand", title: "Parali Asker Kaptani", region: "Wandering", role: "Mercenary", alignment: "Neutral", shortLore: "Altin icin savasan deneyimli bir lider." },
    { name: "Veyra Nightwhisper", title: "Sessiz Bicak", region: "Unknown", role: "Assassin", alignment: "Dark", shortLore: "Golgeden gelen olum." },
  ]);
  console.log("NPCs OK");

  await bulkCreate(prisma.ability, [
    { name: "Beast Form", title: "Ilkel Donusum", region: "Elarion Wilds", type: "Beast", difficulty: "Medium", alignment: "Neutral", element: "Nature", shortLore: "Insan formunu terk ederek ilkel bir yaratiga donusmeyi saglar." },
    { name: "Spirit Spear", title: "Ruh Mizragi", region: "Ancestral Plains", type: "Spirit", difficulty: "Easy", alignment: "Neutral", element: "Spirit", shortLore: "Ruh enerjisinden olusan mizrak ruhu da deler." },
    { name: "Wild Recall", title: "Doganin Cagrisi", region: "Verdant Circle", type: "Ritual", difficulty: "Easy", alignment: "Friendly", element: "Nature", shortLore: "Cagrilan varliklar sahibine geri doner." },
    { name: "Shadow Burden", title: "Golgenin Yuku", region: "Noctyra Depths", type: "Curse", difficulty: "Medium", alignment: "Hostile", element: "Shadow", shortLore: "Golge yukleri zamanla bedeni ve iradeyi ezer." },
    { name: "Umbral Veil", title: "Karanlik Pece", region: "Veiled Sanctum", type: "Shadow", difficulty: "Easy", alignment: "Neutral", element: "Shadow", shortLore: "Kullaniciyi golgelerle saran bu pece gozlerden saklar." },
    { name: "Shadow Brand", title: "Golge Muhru", region: "Black Sigil Ruins", type: "Mark", difficulty: "Hard", alignment: "Hostile", element: "Shadow", shortLore: "Muhurlenen hedef golgeler tarafindan isaretlenir." },
    { name: "Shadow Execution", title: "Karanlik Infaz", region: "Black Sigil Ruins", type: "Execution", difficulty: "Hard", alignment: "Hostile", element: "Shadow", shortLore: "Zayiflayan ruhlar karanlikta yok edilir." },
    { name: "Umbral Assault", title: "Golge Hucumu", region: "Noctyra Streets", type: "Assault", difficulty: "Medium", alignment: "Hostile", element: "Shadow", shortLore: "Golgeden golgeye sicray an oldumcul saldiri teknigi." },
    { name: "Sovereign of Shadows", title: "Golgelerin Hakimi", region: "Throne of Night", type: "Ascension", difficulty: "Hard", alignment: "Hostile", element: "Shadow", shortLore: "Bu guce ulasanlar golgenin kendisi olur." },
  ]);
  console.log("Abilities OK");

  await bulkCreate(prisma.item, [
    { name: "Shadow Fang", type: "Weapon", slot: "Main Hand", rarity: "Rare", element: "Shadow", levelReq: 5, shortLore: "Golge varliklarinin ozunden sekillenmis keskin bir dis.", stats: j({attack:14,critChance:6}), effects: j(["Shadow abilities +5% damage","Critical hits apply Shadow Brand"]), source: "Shadow mobs" },
    { name: "Spirit Totem", type: "Trinket", slot: "Relic", rarity: "Uncommon", element: "Spirit", levelReq: 3, shortLore: "Atalarin ruhlarini cagiran eski bir totem.", stats: j({mana:40,cooldownReduction:5}), effects: j(["Spirit Spear cooldown -1s"]), source: "Quest reward" },
    { name: "Beast Hide Armor", type: "Armor", slot: "Chest", rarity: "Common", element: "Beast", levelReq: 2, shortLore: "Vahsi yaratik derisinden yapilmis dayanikli zirh.", stats: j({defense:18,health:60}), effects: j(["Beast Form duration +10%"]), source: "Crafted" },
    { name: "Umbral Cloak", type: "Armor", slot: "Back", rarity: "Epic", element: "Shadow", levelReq: 8, shortLore: "Golgenin kendisiyle dokunmus bir pelerin.", stats: j({evasion:12,shadowResistance:15}), effects: j(["Umbral Veil grants invisibility 2s"]), source: "Boss drop" },
    { name: "Seal of the Sovereign", type: "Relic", slot: "Relic", rarity: "Legendary", element: "Shadow", levelReq: 12, shortLore: "Golge Hukumdari'nin gucunu muhurlernyen sembol.", stats: j({attack:20,mana:80}), effects: j(["Shadow Execution +20%"]), source: "Ancient ritual boss" },
    { name: "Wild Recall Charm", type: "Consumable", slot: null, rarity: "Uncommon", element: "Nature", levelReq: 1, shortLore: "Doganin cagrisina cevap veren kucuk bir tilsim.", stats: j({}), effects: j(["Instantly resets Wild Recall cooldown"]), source: "Vendor" },
  ]);
  console.log("Items OK");

  await bulkCreate(prisma.equipment, [
    { name: "Shadowfang Blade", category: "Weapon", slot: "MainHand", weaponType: "Spear", rarity: "Rare", element: "Shadow", levelReq: 5, shortLore: "Golge varliklarinin dislerinden dovulmus mizrak.", stats: j({attack:22,critChance:8,attackSpeed:5}), effects: j(["Spirit Spear applies Shadow Brand"]), synergy: j(["Spirit Spear","Shadow Brand"]), source: "Shadow elite mobs" },
    { name: "Veilborn Helm", category: "Armor", slot: "Head", rarity: "Uncommon", element: "Shadow", levelReq: 4, shortLore: "Umbral Veil icinden dogmus migfer.", stats: j({defense:14,mana:30,shadowResistance:10}), effects: j(["Umbral Veil +15%"]), synergy: j(["Umbral Veil"]), source: "Crafted" },
    { name: "Beastbound Chestplate", category: "Armor", slot: "Chest", rarity: "Common", element: "Beast", levelReq: 3, shortLore: "Vahsi formlarla uyumlu agir zirh.", stats: j({defense:20,health:80}), effects: j(["Beast Form bonus armor"]), synergy: j(["Beast Form"]), source: "Beast mobs" },
    { name: "Umbral Striders", category: "Armor", slot: "Feet", rarity: "Rare", element: "Shadow", levelReq: 6, shortLore: "Golgeyle adim atanlara ait botlar.", stats: j({movementSpeed:10,evasion:12}), effects: j(["Umbral Veil cikisinda hiz patlamasi"]), synergy: j(["Umbral Veil"]), source: "Boss drop" },
    { name: "Wildcall Ring", category: "Accessory", slot: "Ring", rarity: "Epic", element: "Nature", levelReq: 7, shortLore: "Doganin cagrisini tasy an kadim yuzuk.", stats: j({cooldownReduction:8,stamina:40}), effects: j(["Wild Recall resets random cooldown"]), synergy: j(["Wild Recall"]), source: "Ancient shrine" },
    { name: "Crown of the Sovereign", category: "Relic", slot: "Relic", rarity: "Legendary", element: "Shadow", levelReq: 12, shortLore: "Golge Hukumdari'nin iradesini tasiy an tac.", stats: j({attack:25,mana:100,shadowDamage:15}), effects: j(["Sovereign of Shadows +30%","Shadow Execution AoE"]), synergy: j(["Sovereign of Shadows","Shadow Execution"]), source: "Final boss" },
  ]);
  console.log("Equipments OK");

  await bulkCreate(prisma.region, [
    { name: "Solterra", title: "The Land of Sunlight", description: "Solterra, gunes enerjisiyle guclenen canli bir bolgedir.", info: "Solterra, zengin biyomlari ve cesitli ekosistemleriyle bilinir." },
    { name: "Mytherra", title: "The Land of Shadows", description: "Mytherra, ay isigiyla beslenen ve golgelerde yasanan bir bolge.", info: "Mytherra, mistik enerjileri ve gizemli yaratiklariyla unludur." },
    { name: "Ferraterra", title: "The Land of Earth", description: "Ferraterra, toprak ve doga ile beslenen bir bolge.", info: "Ferraterra, verimli topraklari ve zengin mineralleriyle taninir." },
    { name: "Aqualerra", title: "The Land of Water", description: "Aqualerra, su elementinin gucuyle sekillenen bir bolge.", info: "Aqualerra, genis su kutleleri ve deniz yasamiyla dikkat ceker." },
  ]);
  console.log("Regions OK");

  await bulkCreate(prisma.faction, [
    { name: "Elarion Kralligi", continent: "Solterra", country: "Valerith", title: "Gunesin Koruyuculari", info: "Elarion Kralligi, zengin tarihi ve kulturel mirasiy la taninir.", description: "En eski ve en gorkemli kralliklardandir." },
    { name: "Myrraver Kralligi", continent: "Solterra", country: "Valerith", title: "Ayin Golgesindeki Krallik", info: "Mistik guclere sahip buyuculerle dolu.", description: "Ay isigiyla beslenen bir bolge." },
    { name: "Thaerindor Kralligi", continent: "Solterra", country: "Valerith", title: "Ormanlarin Gizemi", info: "Kadim ormanlarin derinliklerinde gizlenmis.", description: "Kadim ormanlarin derinliklerinde gizlenmis bir krallik." },
    { name: "Ulgrath Kralligi", continent: "Ferraterra", country: "Grondemith", title: "Karanlikta Yuzen Krallik", info: "Gok yuzunde yildizlarla dolu bir bolge.", description: "Gok yuzunde yildizlarla dolu bir bolge." },
    { name: "Aerenthae Kralligi", continent: "Aqualerra", country: "Olyndarith", title: "Sularin Hukumdarlari", info: "Su elementinin gucuyle sekillenen bir bolge.", description: "Su elementinin gucuyle sekillenen bir bolge." },
  ]);
  console.log("Factions OK");

  await bulkCreate(prisma.update, [
    { type: "devlog", title: "Veil Sisteminin Temelleri", date: "2025-04-12", summary: "Veil mekaniginin ilk teknik ve anlatısal temelleri.", content: "Veil sistemi, oyunun temel mekanigin olusturuyor...", tags: j(["Lore","Systems"]), author: "Mytherra Team" },
    { type: "patch", title: "Patch 0.1.2", date: "2025-04-20", version: "0.1.2", summary: "Denge duzenlemeleri ve yeni icerikler.", tags: j(["Balance","Content"]), changes: j({added:[],changed:[],fixed:[]}) },
  ]);
  console.log("Updates OK");

  await prisma.$disconnect();
  console.log("\nTum veriler Neon aktarildi!");
}

seed().catch(console.error);
