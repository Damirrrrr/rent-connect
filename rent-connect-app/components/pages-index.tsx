'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export function Index() {
  const popularCategories = [
    { name: 'Инструменты', image: '/placeholder.svg' },
    { name: 'Техника', image: '/placeholder.svg' },
    { name: 'Книги', image: '/placeholder.svg' },
    { name: 'Одежда', image: '/placeholder.svg' },
  ]

  const featuredItems = [
    { name: 'Дрель', category: 'Инструменты', price: '500₽/день', image: '/placeholder.svg' },
    { name: 'Фотоаппарат', category: 'Техника', price: '1000₽/день', image: '/placeholder.svg' },
    { name: 'Гарри Поттер', category: 'Книги', price: '100₽/неделя', image: '/placeholder.svg' },
    { name: 'Вечернее платье', category: 'Одежда', price: '2000₽/день', image: '/placeholder.svg' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Арендуйте что угодно, где угодно</h1>
            <p className="text-xl mb-8">Найдите нужную вещь или сдайте свою в аренду</p>
            <Button size="lg" variant="secondary">Начать поиск</Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8">Популярные категории</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularCategories.map((category, index) => (
                <Link href="#" key={index} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={category.image}
                      alt={category.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <span className="text-white text-xl font-semibold">{category.name}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-8">Популярные предложения</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item, index) => (
                <Card key={index}>
                  <CardHeader className="p-0">
                    <div className="aspect-square relative">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle>{item.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <span className="font-semibold">{item.price}</span>
                    <Button variant="outline" size="sm">Подробнее</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}