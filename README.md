# ScanPeau - Application d'Analyse Dermatologique IA

Une application web progressive (PWA) complète pour l'analyse dermatologique utilisant l'intelligence artificielle.

## 🚀 Fonctionnalités

- **Analyse IA Avancée** : Analyse d'images avec algorithmes multiples
- **Scanner Temps Réel** : Détection automatique via caméra
- **Téléconsultation** : Appels vidéo avec dermatologues
- **Chat Médecin** : Messagerie sécurisée en temps réel
- **Géolocalisation** : Trouver des médecins à proximité
- **Suivi Médical** : Rappels et suivi de traitement
- **PWA** : Installation native et fonctionnement hors ligne
- **Notifications Push** : Alertes intelligentes
- **Dashboard Santé** : Analytics et métriques personnalisées

## 🛠️ Technologies

- **Frontend** : Next.js 14, React 18, TypeScript
- **Styling** : Tailwind CSS, shadcn/ui
- **Base de données** : Supabase (PostgreSQL)
- **Authentification** : NextAuth.js
- **Paiements** : Stripe
- **Déploiement** : Vercel
- **PWA** : Service Workers, Web Push API

## 📦 Installation Locale

\`\`\`bash
# Cloner le repository
git clone https://github.com/votre-username/scanpeau-app.git
cd scanpeau-app

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos clés

# Lancer en développement
npm run dev
\`\`\`

## 🚀 Déploiement sur Vercel

### Méthode 1 : Via GitHub (Recommandée)

1. **Pusher le code sur GitHub**
\`\`\`bash
git init
git add .
git commit -m "Initial commit - ScanPeau App"
git branch -M main
git remote add origin https://github.com/votre-username/scanpeau-app.git
git push -u origin main
\`\`\`

2. **Connecter à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer "New Project"
   - Importer depuis GitHub
   - Sélectionner le repository `scanpeau-app`

3. **Configuration Vercel**
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Méthode 2 : Via Vercel CLI

\`\`\`bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter à Vercel
vercel login

# Déployer
vercel --prod
\`\`\`

## ⚙️ Variables d'Environnement Vercel

Dans le dashboard Vercel, ajouter ces variables :

### Base de données
- `DATABASE_URL` : URL de votre base Supabase
- `SUPABASE_URL` : URL publique Supabase
- `SUPABASE_ANON_KEY` : Clé anonyme Supabase

### Authentification
- `NEXTAUTH_URL` : https://votre-app.vercel.app
- `NEXTAUTH_SECRET` : Clé secrète aléatoire

### APIs
- `OPENAI_API_KEY` : Pour l'analyse IA
- `STRIPE_SECRET_KEY` : Pour les paiements
- `GOOGLE_MAPS_API_KEY` : Pour la géolocalisation

## 🔧 Configuration Post-Déploiement

### 1. Configurer le Domaine Personnalisé
\`\`\`bash
# Dans Vercel Dashboard
Settings > Domains > Add Domain
\`\`\`

### 2. Configurer les Redirections
\`\`\`json
// vercel.json
{
  "redirects": [
    {
      "source": "/app",
      "destination": "/",
      "permanent": true
    }
  ]
}
\`\`\`

### 3. Optimiser les Performances
- Activer Edge Functions
- Configurer le CDN
- Optimiser les images

## 📱 PWA Configuration

L'application est automatiquement installable sur :
- **Mobile** : Android, iOS
- **Desktop** : Chrome, Edge, Safari

### Fonctionnalités PWA
- ✅ Installation native
- ✅ Fonctionnement hors ligne
- ✅ Notifications push
- ✅ Raccourcis d'application
- ✅ Mise à jour automatique

## 🔒 Sécurité

- **HTTPS** : Obligatoire (automatique sur Vercel)
- **CSP** : Content Security Policy configurée
- **Headers** : Sécurité renforcée
- **Chiffrement** : Données sensibles chiffrées
- **RGPD** : Conformité européenne

## 📊 Monitoring

### Analytics Intégrés
- Vercel Analytics
- Performance monitoring
- Error tracking
- User behavior

### Logs
\`\`\`bash
# Voir les logs en temps réel
vercel logs votre-app.vercel.app
\`\`\`

## 🚀 Mise en Production

### Checklist Pré-Déploiement
- [ ] Tests passent
- [ ] Variables d'environnement configurées
- [ ] Base de données migrée
- [ ] Domaine configuré
- [ ] SSL activé
- [ ] PWA testée
- [ ] Performance optimisée

### Commandes Utiles
\`\`\`bash
# Build local
npm run build

# Test production local
npm run start

# Analyser le bundle
npm run analyze

# Linter
npm run lint

# Tests
npm run test
\`\`\`

## 📈 Scaling

### Optimisations Vercel Pro
- Edge Functions
- Image Optimization
- Analytics avancées
- Support prioritaire

### Monitoring Avancé
- Sentry pour les erreurs
- LogRocket pour les sessions
- Mixpanel pour les analytics

## 🆘 Support

- **Documentation** : [docs.scanpeau.com](https://docs.scanpeau.com)
- **Support** : support@scanpeau.com
- **GitHub Issues** : [Issues](https://github.com/votre-username/scanpeau-app/issues)

## 📄 Licence

MIT License - voir [LICENSE](LICENSE) pour plus de détails.

---

**ScanPeau** - Révolutionner les soins dermatologiques avec l'IA 🚀
\`\`\`

Créons un script de déploiement automatisé :
