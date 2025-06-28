import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const GallerySection = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [guestName, setGuestName] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(e.target.files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFiles || !guestName.trim()) {
      setUploadStatus("Пожалуйста, заполните все поля");
      return;
    }

    setUploadStatus("Спасибо! Ваши фотографии будут добавлены в галерею");
    setSelectedFiles(null);
    setGuestName("");

    // Reset form
    const fileInput = document.getElementById(
      "photo-upload",
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-primary mb-6">
            Наша галерея
          </h2>
          <div className="w-24 h-0.5 bg-accent mx-auto mb-6"></div>
          <p className="font-montserrat text-xl text-muted-foreground max-w-2xl mx-auto">
            Поделитесь своими яркими моментами с нашего торжества
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Photo Grid */}
          <div>
            <h3 className="font-playfair text-3xl text-primary mb-8 text-center">
              Моменты счастья 📷
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div
                  key={index}
                  className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center shadow-md border hover:shadow-lg transition-shadow"
                >
                  <div className="text-center">
                    <Icon
                      name="Camera"
                      size={32}
                      className="text-accent mx-auto mb-2"
                    />
                    <p className="text-sm text-muted-foreground font-montserrat">
                      Фото {index}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border">
              <Icon
                name="Heart"
                size={40}
                className="text-accent mx-auto mb-4"
              />
              <p className="font-montserrat text-muted-foreground">
                Здесь будут отображаться ваши загруженные фотографии, создавая
                общую память о нашем особенном дне
              </p>
            </div>
          </div>

          {/* Upload Form */}
          <Card className="shadow-xl border-0 bg-card/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-playfair text-3xl text-primary flex items-center gap-3">
                <Icon name="Upload" className="text-accent" size={32} />
                Поделиться фото
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-montserrat font-semibold mb-3 text-foreground">
                    Ваше имя
                  </label>
                  <Input
                    type="text"
                    placeholder="Введите ваше имя"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="font-montserrat"
                  />
                </div>

                <div>
                  <label className="block font-montserrat font-semibold mb-3 text-foreground">
                    Выберите фотографии
                  </label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors">
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer">
                      <Icon
                        name="ImageUp"
                        size={48}
                        className="text-accent mx-auto mb-4"
                      />
                      <p className="font-montserrat text-muted-foreground mb-2">
                        Нажмите для выбора фотографий
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Поддерживаются форматы: JPG, PNG, HEIC
                      </p>
                    </label>
                  </div>

                  {selectedFiles && (
                    <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                      <p className="font-montserrat font-semibold text-accent mb-2">
                        Выбрано файлов: {selectedFiles.length}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        {Array.from(selectedFiles).map((file, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Icon name="Image" size={16} />
                            {file.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full font-montserrat font-semibold py-6 text-lg"
                  size="lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить фотографии
                </Button>

                {uploadStatus && (
                  <div
                    className={`p-4 rounded-lg text-center font-montserrat ${
                      uploadStatus.includes("Спасибо")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {uploadStatus}
                  </div>
                )}
              </form>

              <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border">
                <div className="flex items-start gap-3">
                  <Icon name="Info" className="text-accent mt-1" size={20} />
                  <div>
                    <h4 className="font-montserrat font-semibold mb-2">
                      Советы для лучших фотографий:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Делитесь яркими моментами церемонии</li>
                      <li>• Запечатлейте эмоции гостей</li>
                      <li>• Не забудьте про красивые детали декора</li>
                      <li>• Групповые фото всегда в радость!</li>
                    </ul>
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

export default GallerySection;
