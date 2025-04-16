
import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Car,UserCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vite But Not Too Fast - Sécurité Routière',
  description: 'Un site éducatif et moderne dédié à la sécurité routière pour tous les usagers : conducteurs, piétons, enfants, cyclistes.',
  openGraph: {
    title: 'Vite But Not Too Fast',
    description: 'Prévenir, informer et sensibiliser sur les bonnes pratiques de sécurité routière.',
    url: 'https://vitebutnottoofast.com',
    siteName: 'Vite But Not Too Fast',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vite But Not Too Fast',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="bg-yellow-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">La sécurité routière, c’est l’affaire de tous</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Découvrez nos conseils pratiques et nos ressources pour rouler et marcher en toute sécurité. Sensibiliser, prévenir et responsabiliser tous les usagers.
          </p>
          <Button asChild>
            <Link href="/articles">Explorer les articles</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid gap-8 md:grid-cols-4">
          <Card className="text-center">
            <CardContent className="py-6">
              <Car className="mx-auto mb-4 text-blue-600" size={36} />
              <h3 className="text-lg font-semibold mb-2">Conducteurs</h3>
              <p>Respectez les limitations de vitesse, évitez les distractions et conduisez prudemment.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="py-6">
              <Users className="mx-auto mb-4 text-blue-600" size={36} />
              <h3 className="text-lg font-semibold mb-2">Piétons</h3>
              <p>Adoptez les bons réflexes en ville et hors agglomération. Soyez visibles et vigilants.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="py-6">
              <UserCircle className="mx-auto mb-4 text-blue-600" size={36} />
              <h3 className="text-lg font-semibold mb-2">Enfants</h3>
              <p>Apprenez les règles de circulation dès le plus jeune âge grâce à nos fiches pédagogiques.</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="py-6">
              <AlertTriangle className="mx-auto mb-4 text-blue-600" size={36} />
              <h3 className="text-lg font-semibold mb-2">Règles</h3>
              <p>Comprenez les panneaux, les priorités et les comportements responsables à adopter.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
