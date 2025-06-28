import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "",
    guests: "1",
    dietary: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.attendance) {
      setSubmitStatus("Пожалуйста, заполните обязательные поля");
      return;
    }

    setSubmitStatus("Спасибо! Мы получили ваш ответ. До встречи на празднике!");

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        attendance: "",
        guests: "1",
        dietary: "",
        message: "",
      });
      setSubmitStatus("");
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">
            Подтвердите присутствие
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="font-montserrat text-xl text-muted-foreground max-w-2xl mx-auto">
            Нам важно знать, что вы будете с нами в этот особенный день
          </p>
        </div>

        <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="font-playfair text-3xl text-primary flex items-center gap-3 justify-center">
              <Icon name="Heart" className="text-accent" size={32} />
              RSVP
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="font-montserrat font-semibold text-foreground">
                    Ваше имя *
                  </Label>
                  <Input
                    type="text"
                    placeholder="Имя Фамилия"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="font-montserrat mt-2"
                  />
                </div>
                <div>
                  <Label className="font-montserrat font-semibold text-foreground">
                    Телефон *
                  </Label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="font-montserrat mt-2"
                  />
                </div>
              </div>

              {/* Attendance */}
              <div>
                <Label className="font-montserrat font-semibold text-foreground mb-4 block">
                  Сможете ли вы присутствовать? *
                </Label>
                <RadioGroup
                  value={formData.attendance}
                  onValueChange={(value) =>
                    handleInputChange("attendance", value)
                  }
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label
                      htmlFor="yes"
                      className="font-montserrat font-medium cursor-pointer flex items-center gap-2"
                    >
                      <span className="text-xl">✅</span>
                      Да, обязательно буду!
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-gradient-to-r from-red-50 to-rose-50 p-4 rounded-lg border">
                    <RadioGroupItem value="no" id="no" />
                    <Label
                      htmlFor="no"
                      className="font-montserrat font-medium cursor-pointer flex items-center gap-2"
                    >
                      <span className="text-xl">❌</span>К сожалению, не смогу
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Number of guests */}
              {formData.attendance === "yes" && (
                <div className="animate-fade-in">
                  <Label className="font-montserrat font-semibold text-foreground">
                    Количество гостей (включая вас)
                  </Label>
                  <select
                    value={formData.guests}
                    onChange={(e) =>
                      handleInputChange("guests", e.target.value)
                    }
                    className="w-full mt-2 p-3 border border-input rounded-md font-montserrat bg-background"
                  >
                    <option value="1">1 человек</option>
                    <option value="2">2 человека</option>
                    <option value="3">3 человека</option>
                    <option value="4">4 человека</option>
                  </select>
                </div>
              )}

              {/* Dietary preferences */}
              {formData.attendance === "yes" && (
                <div className="animate-fade-in">
                  <Label className="font-montserrat font-semibold text-foreground">
                    Особые предпочтения в еде
                  </Label>
                  <Input
                    type="text"
                    placeholder="Вегетарианство, аллергии и т.д."
                    value={formData.dietary}
                    onChange={(e) =>
                      handleInputChange("dietary", e.target.value)
                    }
                    className="font-montserrat mt-2"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <Label className="font-montserrat font-semibold text-foreground">
                  Пожелания молодоженам
                </Label>
                <Textarea
                  placeholder="Ваши теплые слова и пожелания..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="font-montserrat mt-2 min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full font-montserrat font-semibold py-6 text-lg"
                size="lg"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить ответ
              </Button>

              {submitStatus && (
                <div
                  className={`p-4 rounded-lg text-center font-montserrat ${
                    submitStatus.includes("Спасибо")
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus}
                </div>
              )}
            </form>

            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border">
              <div className="flex items-start gap-3">
                <Icon name="Clock" className="text-accent mt-1" size={20} />
                <div>
                  <h4 className="font-montserrat font-semibold mb-2">
                    Важная информация:
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Пожалуйста, подтвердите участие до 1 октября</li>
                    <li>• При изменении планов сразу сообщите нам</li>
                    <li>
                      • Вопросы можете задать по телефону: +7 (999) 123-45-67
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RSVPSection;
