import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const InfoSection = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">
            Детали торжества
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="font-montserrat text-xl text-muted-foreground max-w-2xl mx-auto">
            Вся важная информация для наших дорогих гостей
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Location Card */}
          <Card className="shadow-xl border-0 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-playfair text-3xl text-primary flex items-center gap-3">
                <Icon name="MapPin" className="text-accent" size={32} />
                Место проведения
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-montserrat font-semibold text-lg mb-3">
                  Усадьба "Золотая осень"
                </h4>
                <p className="text-muted-foreground mb-4">
                  Московская область, Одинцовский район, <br />
                  деревня Лесная, дом 12
                </p>
              </div>

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg h-64 flex items-center justify-center border">
                <div className="text-center">
                  <Icon
                    name="Map"
                    size={48}
                    className="text-accent mx-auto mb-4"
                  />
                  <p className="font-montserrat text-muted-foreground">
                    Интерактивная карта проезда
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    GPS: 55.123456, 37.123456
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg p-4 border-l-4 border-accent">
                <div className="flex items-start gap-3">
                  <Icon name="Car" className="text-accent mt-1" size={20} />
                  <div>
                    <h5 className="font-montserrat font-semibold mb-2">
                      Как добраться:
                    </h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• От МКАД по Рублевскому шоссе 15 км</li>
                      <li>• Поворот направо после моста</li>
                      <li>• Парковка на территории усадьбы</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dress Code Card */}
          <Card className="shadow-xl border-0 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-playfair text-3xl text-primary flex items-center gap-3">
                <Icon name="Shirt" className="text-accent" size={32} />
                Дресс-код
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="font-montserrat text-muted-foreground mb-6">
                Мы будем рады видеть вас в нарядах, которые подчеркнут осеннее
                настроение нашего торжества
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border">
                  <h4 className="font-montserrat font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">👗</span>
                    Для дам
                  </h4>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-amber-600 shadow-md"
                      title="Золотистый"
                    ></div>
                    <div
                      className="w-12 h-12 rounded-full bg-orange-600 shadow-md"
                      title="Оранжевый"
                    ></div>
                    <div
                      className="w-12 h-12 rounded-full bg-red-800 shadow-md"
                      title="Бордовый"
                    ></div>
                    <div
                      className="w-12 h-12 rounded-full bg-amber-800 shadow-md"
                      title="Коричневый"
                    ></div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Платья в осенних тонах</li>
                    <li>• Элегантные костюмы</li>
                    <li>• Комфортная обувь для прогулок</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 border">
                  <h4 className="font-montserrat font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">🤵</span>
                    Для мужчин
                  </h4>
                  <div className="grid grid-cols-4 gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full bg-amber-900 shadow-md"
                      title="Коричневый"
                    ></div>
                    <div
                      className="w-12 h-12 rounded-full bg-gray-700 shadow-md"
                      title="Серый"
                    ></div>
                    <div
                      className="w-12 h-12 rounded-full bg-amber-700 shadow-md"
                      title="Горчичный"
                    ></div>
                    <div
                      className="w-12 h-12 rounded-full bg-red-900 shadow-md"
                      title="Тёмно-красный"
                    ></div>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Костюмы в тёмных тонах</li>
                    <li>• Рубашки тёплых оттенков</li>
                    <li>• Аксессуары в осенней гамме</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-400">
                <div className="flex items-start gap-3">
                  <Icon
                    name="AlertCircle"
                    className="text-red-500 mt-1"
                    size={20}
                  />
                  <div>
                    <p className="font-montserrat font-semibold text-red-700 mb-1">
                      Просьба избегать:
                    </p>
                    <p className="text-sm text-red-600">
                      Белый цвет (оставим его для невесты) и слишком яркие
                      неоновые оттенки
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
