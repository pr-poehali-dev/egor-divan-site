import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-primary">ЕгорДиван</h1>
          <nav className="hidden md:flex gap-6">
            {['Главная', 'Услуги', 'Цены', 'Отзывы', 'О компании', 'Контакты'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Профессиональная химчистка <br />
            <span className="text-primary">мягкой мебели</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Вернём вашей мебели первозданную чистоту. Работаем с 2015 года. 
            Гарантия результата. Выезд в день обращения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Заказать уборку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Sofa',
                title: 'Химчистка диванов',
                description: 'Глубокая очистка любых типов обивки. Удаление пятен, запахов и загрязнений.',
                price: 'от 2500 ₽'
              },
              {
                icon: 'Armchair',
                title: 'Химчистка кресел',
                description: 'Бережная чистка кресел, офисных и компьютерных стульев.',
                price: 'от 1200 ₽'
              },
              {
                icon: 'Bed',
                title: 'Химчистка матрасов',
                description: 'Удаление пылевых клещей, аллергенов и глубоких загрязнений.',
                price: 'от 1800 ₽'
              },
              {
                icon: 'Home',
                title: 'Чистка ковров',
                description: 'Профессиональная чистка ковров любого размера и материала.',
                price: 'от 300 ₽/м²'
              },
              {
                icon: 'Car',
                title: 'Химчистка авто',
                description: 'Полная или частичная химчистка салона автомобиля.',
                price: 'от 3500 ₽'
              },
              {
                icon: 'Sparkles',
                title: 'Удаление запахов',
                description: 'Озонирование и устранение неприятных запахов.',
                price: 'от 1000 ₽'
              }
            ].map((service, idx) => (
              <Card key={idx} className="hover:scale-105 transition-transform duration-300 animate-scale-in" style={{ animationDelay: `${idx * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Прайс-лист
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="text-left p-4 text-foreground">Услуга</th>
                    <th className="text-right p-4 text-foreground">Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Диван 2-местный', '2500 ₽'],
                    ['Диван 3-местный', '3200 ₽'],
                    ['Диван угловой', '4500 ₽'],
                    ['Кресло', '1200 ₽'],
                    ['Стул', '600 ₽'],
                    ['Матрас односпальный', '1800 ₽'],
                    ['Матрас двуспальный', '2500 ₽'],
                    ['Ковёр (за м²)', '300 ₽'],
                    ['Автомобильное сиденье', '800 ₽'],
                    ['Салон автомобиля полностью', '3500 ₽']
                  ].map(([service, price], idx) => (
                    <tr key={idx} className="border-t border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4 text-foreground">{service}</td>
                      <td className="p-4 text-right font-bold text-primary">{price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="отзывы" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Анна Петрова',
                rating: 5,
                text: 'Отличная работа! Диван выглядит как новый. Быстро приехали, всё сделали качественно. Рекомендую!',
                date: '15 октября 2024'
              },
              {
                name: 'Михаил Иванов',
                rating: 5,
                text: 'Очень доволен результатом. Удалили даже старые пятна, от которых я уже отчаялся избавиться. Спасибо!',
                date: '8 октября 2024'
              },
              {
                name: 'Елена Смирнова',
                rating: 5,
                text: 'Профессиональный подход, вежливые специалисты. Кресла после чистки пахнут свежестью. Буду обращаться ещё!',
                date: '2 октября 2024'
              }
            ].map((review, idx) => (
              <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 150}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{review.name}</h3>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-2">{review.text}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о компании" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            О компании
          </h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">ЕгорДиван</h3>
                  <p className="text-muted-foreground mb-4">
                    Мы — команда профессионалов с 9-летним опытом в сфере химчистки мягкой мебели. 
                    За это время мы очистили более 15 000 диванов, кресел и матрасов.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Используем только сертифицированные средства, безопасные для детей и животных. 
                    Все специалисты проходят обучение и регулярно повышают квалификацию.
                  </p>
                  <p className="text-muted-foreground">
                    Даём гарантию на все виды работ. Если результат вас не устроит — вернём деньги.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: 'Award', text: '9 лет на рынке' },
                    { icon: 'Users', text: 'Более 15 000 клиентов' },
                    { icon: 'Shield', text: 'Гарантия результата' },
                    { icon: 'Clock', text: 'Выезд в день обращения' },
                    { icon: 'CheckCircle', text: 'Безопасные средства' },
                    { icon: 'Smile', text: '98% довольных клиентов' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as any} size={20} className="text-primary" />
                      </div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span className="text-foreground">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span className="text-foreground">info@egordivan.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span className="text-foreground">Москва, ул. Примерная, 123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span className="text-foreground">Пн-Вс: 08:00 - 22:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Заказать звонок</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Телефон"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Сообщение (необязательно)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                  />
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 ЕгорДиван. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
