import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">О нас</h3>
            <ul className="space-y-2">
              <li><Link href="#">О компании</Link></li>
              <li><Link href="#">Как это работает</Link></li>
              <li><Link href="#">Блог</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><Link href="#">Центр помощи</Link></li>
              <li><Link href="#">Связаться с нами</Link></li>
              <li><Link href="#">Правила и условия</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link href="#">Инструменты</Link></li>
              <li><Link href="#">Техника</Link></li>
              <li><Link href="#">Книги</Link></li>
              <li><Link href="#">Одежда</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Следите за нами</h3>
            <ul className="space-y-2">
              <li><Link href="#">Facebook</Link></li>
              <li><Link href="#">Instagram</Link></li>
              <li><Link href="#">Twitter</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2025 RentConnect. Все права защищены.
        </div>
      </div>
    </footer>
  )
}