# 🎂 Yaş Hesablayıcı - Progressive Web App

Modern və funksional yaş hesablayıcı tətbiqi. Doğum gününüzü daxil edin və yaşınızı, yaşadığınız günləri və növbəti ad gününüzə qalan vaxtı öyrənin.

## ✨ Xüsusiyyətlər

### Əsas Funksiyalar
- ✅ **Yaş hesablama** - Dəqiq yaş hesablama (il, ay, gün)
- ✅ **Yaşadığınız günlər** - Ümumi gün sayı və əlavə saat/dəqiqə məlumatı
- ✅ **Növbəti ad günü** - Növbəti doğum gününüzə qalan vaxt (ay və gün)
- ✅ **Tarix formatı** - Azərbaycan formatı (GG.AA.İİİİ - Gün.Ay.İl)
- ✅ **Avtomatik format** - Yazdıqca avtomatik nöqtə əlavə edir

### PWA Xüsusiyyətləri
- 📱 **Quraşdırıla bilən** - Tətbiq kimi telefona/kompüterə quraşdırıla bilər
- 🔌 **Offline işləyir** - İnternet olmadan da istifadə edə bilərsiniz
- ⚡ **Sürətli** - Cache texnologiyası ilə ani yüklənmə
- 📲 **Standalone mode** - App kimi fərqli pəncərədə açılır
- 🎨 **Responsive dizayn** - Bütün cihazlarda mükəmməl görünür

## 🚀 Canlı Demo

**Layihə URL-ləri:**
- GitHub: https://github.com/gupi9163-lab/ya-hesablay-c-
- Deploy: Render.com-da static site olaraq deploy ediləcək

## 📱 Quraşdırma

### Mobil Cihazlarda (Chrome, Safari, Firefox)
1. Saytı açın
2. "Tətbiq kimi quraşdır" düyməsinə klikləyin
3. Və ya brauzer menyusundan "Ana ekrana əlavə et" seçin

### Kompüterdə (Chrome, Edge)
1. URL panelindəki quraşdırma ikonuna klikləyin
2. Və ya "Tətbiq kimi quraşdır" düyməsinə klikləyin

## 💻 Texnologiyalar

- **Frontend:** Vanilla JavaScript (xarici kitabxanasız)
- **Styling:** Modern CSS3 (gradient, animations, responsive)
- **PWA:** Service Worker, Web App Manifest
- **Icons:** SVG və PNG (192x192, 512x512)
- **Deployment:** Render.com Static Site

## 📂 Fayl Strukturu

```
webapp/
├── index.html          # Əsas HTML fayl
├── manifest.json       # PWA manifest
├── sw.js              # Service Worker (offline dəstək)
├── icon-192.png       # Kiçik ikon
├── icon-512.png       # Böyük ikon
├── screenshot.png     # Tətbiq ekran görüntüsü
└── README.md          # Sənədləşdirmə
```

## 🎯 İstifadə

1. Doğum gününüzü daxil edin (məsələn: **15.06.1990**)
2. "Hesabla" düyməsinə klikləyin
3. Nəticələri görün:
   - Yaşınız
   - Yaşadığınız gün sayı (saat və dəqiqə ilə)
   - Növbəti ad gününüzə qalan vaxt

## 🔧 Local Development

```bash
# Layihəni klonlayın
git clone https://github.com/gupi9163-lab/ya-hesablay-c-.git

# Faylları açın
cd ya-hesablay-c-

# index.html faylını brauzerə açın
# Və ya Python HTTP server:
python -m http.server 8000

# Və ya Node.js HTTP server:
npx http-server
```

## 🌐 Render.com-a Deploy

### Avtomatik Deploy
1. Render.com hesabınıza daxil olun
2. "New" → "Static Site" seçin
3. GitHub repository-ni bağlayın
4. Build settings:
   - **Build Command:** (boş qoyun)
   - **Publish Directory:** `.` (root)
5. "Create Static Site" düyməsinə klikləyin

### Manual Deploy
```bash
# Git repository yaradın
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/gupi9163-lab/ya-hesablay-c-.git
git push -u origin main
```

## 📊 Məlumat Saxlanması

- ❌ Heç bir məlumat server-də saxlanmır
- ✅ Bütün hesablamalar brauzerdə aparılır
- ✅ Tam məxfilik və təhlükəsizlik

## 🎨 Dizayn Xüsusiyyətləri

- Modern gradient arxa plan (mor-bənövşəyi)
- Smooth animasiyalar və keçidlər
- Responsive dizayn (mobil, tablet, desktop)
- Əlçatan və oxunaqlı şrift
- Hover effektləri
- Loading və error state-ləri

## 🐛 Problem Həlli

### PWA quraşdırılmır?
- HTTPS protokolu tələb olunur (localhost istisna)
- Manifest və Service Worker düzgün yüklənməlidir
- Brauzer PWA dəstəkləməlidir

### Offline işləmir?
- İlk dəfə online açmalısınız (cache üçün)
- Service Worker aktivləşməlidir
- Brauzer cache-i təmizləməyin

### Tarix formatı işləmir?
- GG.AA.İİİİ formatını istifadə edin
- Məsələn: 15.06.1990 (15 iyun 1990)
- Yalnız rəqəm daxil edin, nöqtələr avtomatik əlavə olunur

## 📝 Lisenziya

MIT License - istənilən məqsədlə sərbəst istifadə edə bilərsiniz.

## 👨‍💻 Müəllif

Yaş Hesablayıcı PWA - 2024

---

**Qeyd:** Bu layihə heç bir xarici kitabxana və dependency istifadə etmir. Tam vanilla JavaScript/CSS/HTML ilə hazırlanıb və Render.com-da problemsiz deploy edilə bilir.
